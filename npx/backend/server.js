require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');
const app = express();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(cors());
app.use(express.json());

app.post('/api/send-email', async (req, res) => {
  const { email, subject, message } = req.body;
  const msg = {
    to: 'your-email@example.com',  // Where you want to receive the emails
    from: 'your-verified-sender@example.com',  // Verified SendGrid sender email
    subject: subject,
    text: message,
    html: `<strong>${message}</strong>`,
  };

  try {
    await sgMail.send(msg);
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
