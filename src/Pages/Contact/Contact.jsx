import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaMedium, FaStackOverflow } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    // Fetch API call gelecek

    
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your message has been sent. Thank you!",
      showConfirmButton: false,
      timer: 1500
    });

    
    setName('');
    setEmail('');
    setPhoneNumber('');
    setMessage('');
  };

  return (
    <div className="container-fluid contact">
      <div className="container">
        <h2 className="display-3 text-center fw-bold" id="contactTitle">Contact Me</h2>
        <div className="row ">
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
              type="text"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className="form-control form-control-lg"
              type="text"
              id="phoneNumber"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6 textArea">
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
            data-toggle="modal"
            data-target="#messageModal"
          >
            PUSH
          </button>
        </div>
      </div>
      <div className="container mylinks">
        <div className="text-center">
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
      <div className="container">
        <div
          className="modal fade"
          id="messageModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="messageModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="messageModalLabel">
                  Message Sent
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>Your message has been sent. Thank you!</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
