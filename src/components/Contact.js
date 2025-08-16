import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="contact__title">Get In Touch</h2>
        <div className="contact__content">
          <div className="contact__info">
            <h3>Contact Information</h3>
            <div className="contact__item">
              <i className="ri-map-pin-line"></i>
              <div>
                <h4>Address</h4>
                <p>Bengaluru, Karnataka, India</p>
              </div>
            </div>
            <div className="contact__item">
              <i className="ri-mail-line"></i>
              <div>
                <h4>Email</h4>
                <p>fauzan.javid@gmail.com</p>
              </div>
            </div>
            <div className="contact__item">
              <i className="ri-phone-line"></i>
              <div>
                <h4>Phone</h4>
                <p>+91 7338360428</p>
              </div>
            </div>
            <div className="contact__item">
              <i className="ri-time-line"></i>
              <div>
                <h4>Business Hours</h4>
                <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                <p>Sat: 10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>
          
          <div className="contact__form">
            <h3>Send us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form__row">
                <div className="form__group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form__group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form__group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form__group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="contact__submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
