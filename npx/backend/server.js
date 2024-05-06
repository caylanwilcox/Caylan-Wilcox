require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');


// Use CORS with default settings
app.use(cors());
// Set up SendGrid API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
console.log("API Key:", process.env.SENDGRID_API_KEY);
// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Endpoint to send emails
app.post('/api/send-email', (req, res) => {
  const { email, subject, message } = req.body;
  const msg = {
    to: email, // Recipient email address
    from: 'caylanwilcox@gmail.com', // Verified sender
    subject: subject,
    text: message,
    html: `<strong>${message}</strong>`,
  };

  sgMail
    .send(msg)
    .then(response => res.status(200).json({ message: 'Email sent successfully' }))
    .catch(error => {
      console.error('Email sending error:', error);
      res.status(500).json({ message: 'Failed to send email', error: error.message });
    });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
