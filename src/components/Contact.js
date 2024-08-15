import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { gsap } from 'gsap';
import '../Style/Contact.css';
import { FaMapMarkerAlt, FaEnvelope, FaGithub, FaXing, FaInstagram } from 'react-icons/fa';

function Contact() {
  const form = useRef();

  React.useEffect(() => {
    gsap.from('.contact-form', { duration: 1, opacity: 0, y: 50 });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7aal3t7', 'template_b8zwwxc', form.current, 'eeO_XMmDeEVeDniM-')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <section id="contact">
      <div className="contact-section">
        <h1 className="contact-title">Get <span className="highlight">in touch</span></h1>
        <div className="map-container">
          <img src="oo.png" alt="Map" className="map-image" />
        </div>
        <div className="contact-content">
          <div className="pppp">
            <p className="contact-description">
              Have a project for me? Any questions about something I've built? I'd love to hear from you, give me a shout by email or by using the form below if you'd like to get in contact with me.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span><strong>Location:</strong> Givat Ze'ev, Israel</span>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <span><strong>Email:</strong> ycollins555@gmail.com</span>
              </div>
              <div className="contact-item">
                <FaGithub className="contact-icon" />
                <span><strong>GitHub:</strong> yehudacollins</span>
              </div>
              <div className="contact-item">
                <FaXing className="contact-icon" />
                <span><strong>Xing:</strong> YehudaCollins</span>
              </div>
              <div className="contact-item">
                <FaInstagram className="contact-icon" />
                <span><strong>Instagram:</strong> yehudacollins</span>
              </div>
            </div>
          </div>
          <div className="contact-text">
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <input type="text" name="name" placeholder="Name" className="form-input" required />
              <input type="email" name="email" placeholder="Email" className="form-input" required />
              <textarea name="message" placeholder="Message" className="form-textarea" required></textarea>
              <button type="submit" className="send-button">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
