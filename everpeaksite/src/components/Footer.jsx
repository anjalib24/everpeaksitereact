import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
import { FaAngleDoubleUp } from 'react-icons/fa';
import { useState,useRef } from 'react';
import emailjs from '@emailjs/browser';

const Footer = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    service: '',
    projectBrief: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your submission logic here
    console.log(formData);
  };

  const validateForm = () => {
    // Implement your validation logic here
    // For example, check if email is valid
    const { email } = formData;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
    return true;
  };

  const scrollToTop = () => { 
    window.scrollTo({ 
      top: 0,  
      behavior: 'smooth'
    }); 
  }; 

  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  window.addEventListener('scroll', toggleVisible);
//  send mail
const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm('service_g9cjoio', 'template_pdhcd0c', form.current, {
      publicKey: 'mSiT-6l3KYkkCWGWQ',
    })
    .then(
      () => {
        console.log('SUCCESS!');
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
};



  return (
    <>
      <section id="new-project" className="new-project">
        <div className="container">
          <div className="new-project-details">
            <div className="row">
              <div className="col-md-10 col-sm-8 ">
                <div className="single-new-project">
                  <h3>Want to start a new project with us? Let’s Start!</h3>
                </div>
              </div>

              <div className="col-md-2 col-sm-4">
                <div className="single-new-project">
                  <a
                    className="slide-btn use-ajax"
                    data-dialog-type="modal"
                    data-dialog-options='{"width":600}'
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal9"
                  >
                    start now
                  </a>

                  {/* model */}

                  <div
                    className="modal fade"
                    id="exampleModal9"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog border-top border-8 border-primary">
                      <div className="modal-content" id="mycontent">
                        <div className="modal-header">
                          <h6 className="modal-title" id="exampleModalLabel">
                            Want To Start A New Project With Us? Let’s Start!
                          </h6>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>

                        <form ref={form} onSubmit={sendEmail} className="text-center">
                          <input
                            type="text"
                            className="w-75 rounded my-2  text-center p-2"
                            placeholder="First Name"
                            name="to_name"
                            id="form"
                           
                            onChange={handleChange}
                            required
                          />
                          <input
                            type="text"
                            id="form"
                            placeholder="last Name"
                            name="to_last"
                            className="w-75 rounded my-2  text-center p-2"
                           
                            onChange={handleChange}
                            required
                          />
                          <input
                            type="email"
                            placeholder="Email"
                            name="to_email"
                            id="form"
                           
                            onChange={handleChange}
                            className="w-75 rounded my-2  text-center p-2"
                            required
                          />
                          <input
                            type="text"
                            placeholder="phone Number"
                            name="to_number"
                            id="form"
                            className="w-75 rounded my-2  text-center p-2"
                          
                            onChange={handleChange}
                            required
                          />
                          <select
                            name="to_service"
                            
                            onChange={handleChange}
                            id="form"
                            className="w-75 rounded my-2  text-center p-2"
                            required
                          >
                            <option value="">Select a Service</option>
                            <option value="Custom Web development">Custom Web development</option>
                            <option value="Mobile App Development">Mobile App Development</option>
                            <option value="Cloud Computing">Cloud Computing</option>
                            <option value="Software Testing">Software Testing</option>
                            <option value="Digital Marketing">Digital Marketing</option>
                            <option value="Other">Other...</option>
                          </select>
                          <input
                            placeholder="Brief about the project"
                            name="to_message"
                            id="form"
                           
                            onChange={handleChange}
                            className="w-75 rounded my-2  text-center p-2"
                            required
                          />
                          
                          <br />
                         
                          <button  type="submit" id="btnform">Submit</button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer-copyright">
        <div className="container">
          <div className="row">
            <div className="col-sm-7">
              <div className="foot-copyright pull-left">
                <p>
                  © All Rights Reserved. Designed and Developed by EverPeak IT
                  Solution
                </p>
              </div>
            </div>
            <div className="col-sm-5">
              <div className="foot-menu pull-right">
                <ul>
                  <a href="#" className="ms-5">
                    legal
                  </a>
                  <a href="#" className="ms-5">
                    sitemap
                  </a>
                  <a href="#" className="ms-5">
                    privacy policy
                  </a>
                </ul>
                <FaAngleDoubleUp
                  onClick={scrollToTop}
                  style={{ display: visible ? 'inline' : 'none' }}
                  id="scroll"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
