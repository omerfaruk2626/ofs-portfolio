const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());


const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_PORT === '465',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});


app.post('/send-email', (req, res) => {
  const { name, email, phoneNumber, message } = req.body;

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: process.env.SMTP_USER,
    subject: `Yeni İletişim Formu Mesajı: ${name}`,
    text: `
      İsim: ${name}
      Email: ${email}
      Telefon Numarası: ${phoneNumber}
      
      Mesaj:
      ${message}
    `,
  };


  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ error: error.toString() });
    }
    res.status(200).json({ message: 'Mesaj başarıyla gönderildi' });
  });
});


app.listen(3001, () => {
  console.log('Sunucu 3001 portunda çalışıyor');
});
