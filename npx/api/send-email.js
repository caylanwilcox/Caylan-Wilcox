const sgMail = require('@sendgrid/mail');
const cors = require('cors')({origin: true});  // Allow any domain, or configure specific ones

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = (req, res) => {
  cors(req, res, () => {  // Use cors middleware
    if (req.method === 'POST') {  // Ensure it's a POST request
      const { email, subject, message } = req.body;

      const content = {
        to: 'caylanwilcox@gmail.com', // Your receiving email address
        from: 'caylanwilcox@gmail.com', // Must be verified by SendGrid
        subject: subject,
        text: message,
        html: `<strong>${message}</strong>`,
      };

      sgMail.send(content)
        .then(() => res.status(200).json({ message: 'Email sent successfully' }))
        .catch(error => {
          console.error('SendGrid email error:', error);
          res.status(500).json({ message: 'Error sending email', details: error.message });
        });
    } else {
      res.status(405).send('Method not allowed'); // Handle non-POST requests
    }
  });
};
