// server.js (Node.js with Express)
const express = require('express');
const sendEmail = require('./SendGridConfig'); // assuming this exports the function to send emails
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // for parsing application/json

app.post('/subscribe', async (req, res) => {
    const { email } = req.body;
    const emailDetails = {
        to: 'caylanwilcox@gmail.com',
        from: 'caylanwilcox@gmail.com',
        subject: 'New Subscriber',
        text: `You have a new subscriber: ${email}`,
        html: `<strong>You have a new subscriber:</strong> ${email}`,
    };

    try {
        const response = await sendEmail(emailDetails);
        res.json({ success: true, message: 'Subscription email sent.' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to send email.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
