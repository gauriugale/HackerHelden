import React, { useState } from 'react';
import './contact.css';

const ContactUsForm = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(form).some((field) => !field)) {
      setStatus('All fields are required.');
    } else {
      setStatus('Thank you for contacting us!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Contact Us</h2>
      <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Your Email" onChange={handleChange} required />
      <input type="text" name="subject" placeholder="Subject" onChange={handleChange} required />
      <textarea name="message" placeholder="Your Message" onChange={handleChange} required />
      {status && <p>{status}</p>}
      <button type="submit">Send Message</button>
    </form>
  );
};

export default ContactUsForm;
