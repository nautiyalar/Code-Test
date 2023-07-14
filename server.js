const express = require('express');
const app = express();
const nodemailer = require('nodemailer');

const port = 3000;

// Enable CORS middleware
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(express.json());

// Handle POST requests to /submit-form
app.post('/submit-form', (req, res) => {
  // Process the received form data
  const { name, email, message } = req.body;

  // Create a transporter for sending emails
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'nautiyalar@gmail.com', // Replace with your Gmail address
      pass: 'Barbie_1926#' // Replace with your Gmail password
    }
  });

  // Define the email message
  const mailOptions = {
    from: 'nautiyalar@gmail.com',
    to: 'arun@trustheal.in', // Replace with the recipient's email address
    subject: 'New Contact Form Submission',
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `
  };

  // Send the email
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.error(error);
      res.status(500).send('An error occurred while sending the email.');
    } else {
      console.log('Email sent: ' + info.response);
      res.sendStatus(200);
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
