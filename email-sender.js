require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
    }
});

const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: 'Test Email from Node.js',
    text: 'Hello, this is a test email sent from Node.js using nodemailer!'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
    return console.log('Error occurred:', error);
    }
    console.log('Email sent:', info.response);
});