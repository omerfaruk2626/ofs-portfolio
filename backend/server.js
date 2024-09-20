const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// CORS yapılandırması
app.use(cors({
  origin: '*', // Tüm kaynaklara izin verir
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Body parser middleware
app.use(bodyParser.json());

// Nodemailer yapılandırması
const transporter = nodemailer.createTransport({
  host: 'gandalf.wlsrv.com',
  port: 465,
  secure: true, // 465 portu SSL/TLS gerektirir
  auth: {
    user: 'ofs@omerfaruksivri.com.tr',
    pass: process.env.SMTP_PASS // .env dosyasından şifreyi al
  }
});

// E-posta gönderim endpoint'i
app.post('/api/send-email', (req, res) => {
  const { name, email, phoneNumber, message } = req.body;

  const mailOptions = {
    from: 'ofs@omerfaruksivri.com.tr',
    to: 'ofs@omerfaruksivri.com.tr',
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

// Export uygulamanız
module.exports = app;
