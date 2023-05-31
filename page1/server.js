const express = require('express');
const app = express();
const nodemailer = require('nodemailer');

// Middleware to parse JSON data
app.use(express.json());

// POST route to handle form submission
app.post('/submit-form', (req, res) => {
  const { name, email, message } = req.body;

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'b.ishimwe1@alustudent.com', // Replace with your Gmail email address
      pass: 'Benj@0791209572' // Replace with your Gmail password or an app-specific password
    }
  });

  // Prepare the email content
  const mailOptions = {
    from: 'b.ishimwe1@alustudent.com', // Replace with your Gmail email address
    to: 'benjaminishimwe2018@gmail.com', // Replace with your desired recipient email address
    subject: 'New Contact Form Submission',
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: 'Error sending email' });
    } else {
      console.log('Email sent:', info.response);
      res.json({ message: 'Email sent successfully' });
    }
  });
});

// Start the server
app.listen(5500, () => {
  console.log('Server running on port 5500');
});
