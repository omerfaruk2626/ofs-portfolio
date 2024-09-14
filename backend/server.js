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

// Test e-postası gönder
const testMailOptions = {
  from: 'ofs@omerfaruksivri.com.tr',
  to: 'test@example.com', // Kendi e-posta adresinizi buraya ekleyin
  subject: 'Test E-posta',
  text: 'Bu bir test e-postasıdır.',
};

transporter.sendMail(testMailOptions, (error, info) => {
  if (error) {
    console.error('Test mail sending error:', error);
  } else {
    console.log('Test mail sent:', info.response);
  }
});

// E-posta gönderim endpoint'i
app.post('/api/send-email', (req, res) => {
  const { name, email, phoneNumber, message } = req.body;

  const mailOptions = {
    from: 'ofs@omerfaruksivri.com.tr',
    to: 'omerfaruksivri26@gmail.com', // E-posta gönderen ile aynı
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
