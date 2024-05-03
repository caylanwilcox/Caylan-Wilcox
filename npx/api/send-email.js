const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = async (req, res) => {
  const { email, subject, message } = req.body;

  const content = {
    to: 'caylanwilcox@gmail.com',  // Your receiving email address
    from: 'your-email@example.com',  // Must be verified by SendGrid
    subject: subject,
    text: message,
    html: `<strong>${message}</strong>`,
  };

  try {
    await sgMail.send(content);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('SendGrid email error:', error);
    res.status(500).send('Error sending email');
  }
};
