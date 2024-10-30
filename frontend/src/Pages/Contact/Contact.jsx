import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaMedium, FaStackOverflow } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSendMessage = async () => {
    try {
      const response = await fetch(`https://ofs-portfolio-1.onrender.com/api/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phoneNumber,
          message,
        }),
      });

      if (response.ok) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your message has been sent. Thank you!',
          showConfirmButton: false,
          timer: 1500,
        });

        // Reset the form
        setName('');
        setEmail('');
        setPhoneNumber('');
        setMessage('');
      } else {
        // Handle error
        const errorData = await response.json();
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: `Error: ${errorData.error || 'Something went wrong. Please try again.'}`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: `Network error: ${error.message}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="container-fluid contact">
      <div className="container">
        <h2 className="display-3 text-center fw-bold" id="contactTitle">Contact Me</h2>
        <div className="row">
          <div className="col-md-6">
            <input
              className="form-control form-control-lg mb-3"
              type="text"
              id="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              className="form-control form-control-lg mb-3"
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className="form-control form-control-lg mb-3"
              type="tel"
              id="phoneNumber"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6">
            <textarea
              className="form-control form-control-lg"
              rows="5"
              id="message"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
        </div>
        <div className="col-md-3 mx-auto text-center">
          <button
            type="button"
            className="btn btn-light btn-lg"
            id="sendMessageBtn"
            onClick={handleSendMessage}
          >
            SEND
          </button>
        </div>
      </div>
      <div className="container mylinks">
        <div className="text-center flex gap-1">
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/o-faruk-sivri/">
            <FaLinkedin />
          </a>
          <a target="_blank" rel="noreferrer" href="https://github.com/omerfaruk2626">
            <FaGithub />
          </a>
          <a target="_blank" rel="noreferrer" href="https://medium.com/@omerfaruksivri26">
            <FaMedium />
          </a>
          <a target="_blank" rel="noreferrer" href="https://stackoverflow.com/users/23258999/omer26">
            <FaStackOverflow />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;