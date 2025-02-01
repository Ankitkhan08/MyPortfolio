import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FiSend } from "react-icons/fi";
import "./contact.css";
import Noty from 'noty'; // Import Noty library
import 'noty/lib/noty.css'; // Import Noty CSS
import 'noty/lib/themes/mint.css'; // Import Noty theme CSS
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all required fields are filled out
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      new Noty({
        type: 'error',
        text: 'Please fill out all required fields',
        timeout: 3000
      }).show();
      return;
    }

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = 'service_q325z8o';
    const templateId = 'template_8e6qdvp';
    const publicKey = 'FXFxus8vaxRHY4oD7';

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_name: 'Web Wizard',
      message: formData.message,
    };

    // Send the email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setMessageSent(true);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        new Noty({
          type: 'success',
          text: 'Message sent!',
          timeout: 3000
        }).show();
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don't be Shy!</h3>

          <p className="contact__description">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas, or opportunities to be part of your
            visions.
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />
              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__desc">officialankitkhan@gmail.com</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />
              <div>
                <span className="info__title">Call me</span>
                <h4 className="info__desc">+91 98175 44104</h4>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a
              href="https://www.linkedin.com/in/ankit-khan-3689b5247?"
              className="contact__social-link"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Ankitkhan08"
              className="contact__social-link"
              target="_blank"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/Ankitkhan08"
              className="contact__social-link"
              target="_blank"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/ankit_khan08"
              className="contact__social-link"
              target="_blank"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <form className="contact__form" ref={form} onSubmit={handleSubmit}>
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Name"
                className="form__control"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form__input-div">
              <input
                type="email"
                placeholder="Your Email"
                className="form__control"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Subject"
                className="form__control"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form__input-dev">
            <textarea
              placeholder="Your Message"
              className="form__control textarea"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button className="button" type="submit">
            Send Message
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
