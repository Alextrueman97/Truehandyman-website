import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

function Contact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8080/send-email', {
      firstName: firstName,
      lastName: lastName,
      email: email,
      message: message
    })
      .then(response => {
        console.log(response);
        alert('Message sent successfully!');
        setFirstName('');
        setLastName('');
        setEmail('');
        setMessage('');
      })
      .catch(error => {
        console.error('There was a problem with the axios operation:', error);
        alert('Sorry, there was a problem sending your message. Please try again later.');
      });
  };

  return (
    
    <div className="contact-container">
        <div className="header">
            <h1>Contact</h1>
        </div>
    <form onSubmit={handleSubmit} className="form-container">
      <label>
        First name:
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      </label>
      <br />
      <label>
        Last name:
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Message (please also include your phone number):
        <textarea value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
      </label>
      <br />
      <button type="submit">Send</button>

    </form>
    </div>
  );
}

export default Contact;