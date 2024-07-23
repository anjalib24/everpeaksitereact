import React, { useState, useRef } from "react";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlus } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const sendEmail = (e) => {
    e.preventDefault();
    setSubmitting(true);

    emailjs
      .sendForm("service_g9cjoio", "template_pdhcd0c", form.current, {
        publicKey: "mSiT-6l3KYkkCWGWQ",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setSubmitting(false);
          // Clear form fields or handle success state as needed
        },
        (error) => {
          console.log("FAILED...", error.text);
          setSubmitting(false);
          // Handle error state or display error message as needed
        }
      );
  };

  return (
    <div>
      <section className="contact">
        <div className="container">
          <div className="contact-details">
            <div className="section-header contact-head  text-center">
              <h2 className="text-white" id="one">
                Contact Us
              </h2>
            </div>

            <div className="contact-content">
              <div className="row">
                <div className="col-sm-offset-1 col-sm-5">
                  <div className="single-contact-box">
                    <div className="contact-right">
                      <div className="contact-adress">
                        <div className="contact-office-address">
                          <h3 id="address" className="fs-3">
                            Contact info
                          </h3>
                          <p id="address">
                            401, Metro Pride, Opposite Navlakha Bus Stand,{" "}
                            <br />
                            Behind Janki Nagar City Bus Stop, <br />
                            Navlakha Indore-452001
                          </p>
                          <div className="contact-online-address">
                            <div className="single-online-address">
                              <a href="tel:8248657899" style={{ color: "#fff" }}>
                                <i class="fa fa-phone"></i> +91-8248657899
                              </a>
                            </div>

                            <div className="single-online-address">
                              <i className="fa fa-envelope-o" />
                              <a style={{ color: "#fff" }}>
                                <span>info@everpeakit.com</span>
                              </a>
                            </div>
                          </div>
                        </div>

                        <div id="icon">
                          <h3 id="two">social partner</h3>
                          <div className="contact-icon ">
                            <ul>
                              <a href="#">
                                <FontAwesomeIcon icon={faFacebook} />
                              </a>

                              <a href="#">
                                <FontAwesomeIcon
                                  icon={faGooglePlus}
                                  aria-hidden="true"
                                />
                              </a>

                              <a href="https://www.linkedin.com/company/85637279/">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                              </a>

                              <a href="#">
                                <FontAwesomeIcon icon={faTwitter} />
                              </a>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-5">
                  <div className="single-contact-box">
                    <div className="contact-form">
                      <h3>Leave us a Massage Here</h3>

                      <form
                        ref={form}
                        onSubmit={sendEmail}
                        className="webform-submission-form webform-submission-add-form webform-submission-contact-form webform-submission-contact-add-form js-webform-details-toggle webform-details-toggle"
                        data-drupal-selector="webform-submission-contact-add-form"
                        action="/"
                        method="post"
                        id="webform-submission-contact-add-form"
                        acceptCharset="UTF-8"
                      >
                        <div className="row">
                          <div className="col-md-6 js-form-item form-item js-form-type-textfield form-type-textfield js-form-item-name form-item-name form-no-label">
                            <input
                              className="form-control form-text required"
                              type="text"
                              id="edit-name"
                              name="to_name"
                              defaultValue=""
                              size={60}
                              maxLength={255}
                              placeholder="Your Name"
                              required="required"
                              aria-required="true"
                            />
                          </div>

                          <div className="col-md-6 js-form-item form-item js-form-type-email form-type-email js-form-item-email form-item-email form-no-label">
                            <input
                              className="form-control form-email required"
                              data-drupal-selector="edit-email"
                              type="email"
                              id="edit-email"
                              name="to_email"
                              defaultValue=""
                              size={60}
                              maxLength={254}
                              placeholder="Your Email"
                              required="required"
                              aria-required="true"
                            />
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6 js-form-item form-item js-form-type-textfield form-type-textfield js-form-item-subject form-item-subject form-no-label">
                            <input
                              className="form-control form-text required"
                              data-drupal-selector="edit-subject"
                              type="text"
                              id="edit-subject"
                              name="to_sub"
                              defaultValue=""
                              size={60}
                              maxLength={255}
                              placeholder="Subject"
                              required="required"
                              aria-required="true"
                            />
                          </div>

                          <div className="col-md-6 js-form-item form-item js-form-type-textfield form-type-textfield js-form-item-phone form-item-phone form-no-label">
                            <input
                              className="form-control form-text required"
                              data-drupal-selector="edit-phone"
                              type="text"
                              id="edit-phone"
                              name="to_number"
                              defaultValue=""
                              size={60}
                              maxLength={255}
                              placeholder="Phone"
                              required="required"
                              aria-required="true"
                            />
                          </div>
                        </div>
                        <div className="col-md-12 js-form-item form-item js-form-type-textarea form-type-textarea js-form-item-message form-item-message form-no-label">
                          <div className="form-textarea-wrapper">
                            <textarea
                              className="form-control form-textarea required resize-vertical"
                              data-drupal-selector="edit-message"
                              id="edit-message"
                              name="to_message"
                              rows={5}
                              cols={60}
                              placeholder="Message"
                              required="required"
                              aria-required="true"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div
                          data-drupal-selector="edit-actions"
                          className="form-actions webform-actions js-form-wrapper form-wrapper"
                          id="edit-actions"
                        >
                          <div id="send">
                            <button
                              type="submit"
                              disabled={submitting}
                              id="button"
                            >
                              SEND MESSAGE
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
