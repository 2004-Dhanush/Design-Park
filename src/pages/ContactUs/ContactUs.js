import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import emailjs from 'emailjs-com';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_abc123', // Your Service ID
      'template_xgi0b0o', // Your Template ID
      e.target,
      '6CU0oBrwwF0GUw2pJ' // Your Public Key
    )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => alert("There was an error. Please try again."));
  };

  return (
    <>
      <Navbar />
      <div className="container-fluid py-5" style={{ background: 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)' }}>
        <div className="text-center mb-5">
          <h1 className="fw-bold mt-5" style={{ fontSize: '3rem', color: '#2c3e50' }}>Contact Us</h1>
          <p className="text-muted">We’re here to help and answer any question you might have.</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div
              className="p-4 rounded shadow-lg"
              style={{
                backdropFilter: 'blur(12px)',
                background: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '20px'
              }}
            >
              <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="floatingName"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="floatingName">Full Name</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="floatingEmail"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="floatingEmail">Email address</label>
                </div>

                <div className="form-floating mb-4">
                  <textarea
                    name="message"
                    className="form-control"
                    placeholder="Leave a message here"
                    id="floatingMessage"
                    style={{ height: '150px' }}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="floatingMessage">Message</label>
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-primary py-2 fw-semibold">
                    📩 Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <h4 className="fw-bold">Contact Info</h4>
          <p><strong>Email:</strong> <a href="mailto:dk255767@gmail.com">dk255767@gmail.com</a></p>
          <p><strong>Phone:</strong> +91 7502218281</p>
          <p><strong>Address:</strong> Kalai Annai Nagar, Sevagoundanur, Bhavani, Erode dt - 638455</p>
        </div>

        <div className="text-center mt-4">
  <h5 className="fw-bold">Follow Us</h5>
  <div className="d-flex justify-content-center gap-4 mt-2">
    <a href="https://wa.me/917502218281" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-whatsapp fa-lg me-1"></i> WhatsApp
    </a>
    <a href="https://www.instagram.com/creaticedesignpark/" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-instagram fa-lg me-1"></i> Instagram
    </a>
    <a href="mailto:dk255767@gmail.com" target="_blank" rel="noopener noreferrer">
      <i className="fas fa-envelope fa-lg me-1"></i> Email
    </a>
  </div>
</div>

      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
