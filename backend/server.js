const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// CORS yapılandırmasını doğru bir şekilde ayarlayın
app.use(cors({
  origin: '*', // Tüm kaynaklara izin verir
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));


app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT, 10),
  secure: process.env.SMTP_PORT === '465',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

console.log(transporter); // Burada transporter objesini kontrol edin

app.post('/api/send-email', (req, res) => {
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

// Sunucuyu başlat
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda dinliyor...`);
});

// Export uygulamanızı
module.exports = app;
