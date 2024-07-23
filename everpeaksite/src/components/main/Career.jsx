import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Testimonial from "../Testimonial";
import './aboutus.css';
import { useState,useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useForm, ValidationError } from '@formspree/react';
const Career = () => {
  const [state, handleSubmit] = useForm("xzbnogdy");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }


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
const handleFileChange = (e) => {
  const file = e.target.files[0];
  setFile(file);
};
  return (
    <>
      <Header />
      <section className="career-part">
        <div className="container">
          <div className="about-part-details text-center">
            <div className="about-part-content">
              <div className="breadcrumbs">
                <div className="container">
                  <h3 style={{ color: "#fff" }}>Career</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="node__content clearfix">
        <div
          property="schema:text"
          className="clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item"
        >
          <div className="row career">
            <div className="col-md-3">
              <h3>Drupal Developer</h3>
              <strong>Summary</strong>
              <p>
                <strong>Location:</strong> Indore, India
              </p>
              <p>
                <strong>Role: </strong>Drupal Developer
              </p>
              <p>
                <strong>Experience:</strong> 2+ years
              </p>
              <p>
                <strong>No. of position:</strong> 2
              </p>
              <p>
                <strong>Skills:</strong> Drupal, PHP
              </p>
             

              <div className="col-md-2 col-sm-4">
                <div className="single-new-project">
                  {/* <a
                    
                    // data-dialog-type="modal"
                    // data-dialog-options='{"width":600}'
                    // data-bs-toggle="modal"
                    // data-bs-target="#exampleModal1"
                    data-toggle="modal" data-target="#exampleModalLong"
                    id="apply"
                  >
                   Apply Now
                  </a> */}
                  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
  Launch demo modal
</button>

                  {/* model */}
                  <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

               
                 
             
                </div>
              </div>
              
            </div>
            <div className="col-md-3">
              <h3>PHP Developer</h3>
              <strong>Summary</strong>
              <p>
                <strong>Location:</strong> Indore, India
              </p>
              <p>
                <strong>Role: </strong>PHP Developer
              </p>
              <p>
                <strong>Experience:</strong> 1+ years
              </p>
              <p>
                <strong>No. of position:</strong> 2
              </p>
              <p>
                <strong>Skills:</strong> PHP, Mysql, HTML, CSS
              </p>
             
              <div className="col-md-2 col-sm-4">
                <div className="single-new-project">
                  <a
                    
                    data-dialog-type="modal"
                    data-dialog-options='{"width":600}'
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    id="apply"
                  >
                   Apply Now
                  </a>

                  {/* model */}

                  <div
                    class="modal fade "
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog border-top border-8 border-primary">
                      <div class="modal-content " id="mycontent">
                        

                        <div
                          class="modal-body"
                          className="text-center gap-5 m-4"
                        >
                          <div className="text-start">
                          <label htmlFor="" >Full Name</label>
                         <br />
                          <input
                            type="text"
                            style={{
                              width: '100%',
                              padding: '12px 20px',
                              margin: '8px 0',
                              boxSizing: 'border-box',
                              border: 'none',
                              borderBottom: '1px solid black',
                            }}
                           
                          />
                          <br />
                          </div>



                          <div className="text-start">
                          <label htmlFor="">Email</label>
                          <br />
                          <input
                            type="text"
                           
                            style={{
                              width: '100%',
                              padding: '12px 20px',
                              margin: '8px 0',
                              boxSizing: 'border-box',
                              border: 'none',
                              borderBottom: '1px solid black',
                            }}
                           
                            
                          />
                          <br />
                          </div>


                         <div className="text-start">
                         <label htmlFor="">Contact</label>
                          <br />
                          <input
                            type="text"
                           
                            style={{
                              width: '100%',
                              padding: '12px 20px',
                              margin: '8px 0',
                              boxSizing: 'border-box',
                              border: 'none',
                              borderBottom: '1px solid black',
                            }}
                          />

                          <br />
                         </div>
                          <div  className="text-start">
                          <label htmlFor="">Position for apply</label>
                          <select
                            name="pets"
                            id="pet-select"
                            style={{
                              width: '100%',
                              padding: '12px 20px',
                              margin: '8px 0',
                              boxSizing: 'border-box',
                              border: 'none',
                              borderBottom: '1px solid black',
                            }}
                          >
                            <option value="">-Service-</option>
                            <option value="Drupal Developer ">Drupal Developer </option>
                            <option value="PHP Developer">PHP Developer</option>
                            <option value="UI/UX designer">UI/UX designer</option>
                            <option value="Java Developer">Java Developer</option>
                            
                          </select>
                          <br />
                          </div>
                           <div className="text-start">
                           <label htmlFor="">Add your resume</label>
                          <br />

                          <input
                            type="file"
                            style={{
                              width: '100%',
                              padding: '12px 20px',
                              margin: '8px 0',
                              boxSizing: 'border-box',
                              border: 'none',
                              borderBottom: '1px solid black',
                            }}
                            
                          />
                           </div>
                        </div>

                        <div className="modal-footer" id="one1">
                          <button
                            type="submit"
                            className="btn btn-info"
                            data-bs-dismiss="modal"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <h3>UI/UX Designer</h3>
              <strong>Summary</strong>
              <p>
                <strong>Location:</strong> Indore India
              </p>
              <p>
                <strong>Role: </strong>Designer
              </p>
              <p>
                <strong>Experience:</strong> 2+ years
              </p>
              <p>
                <strong>No. of position:</strong> 1
              </p>
              <p>
                <strong>Skills:</strong> HTML, CSS, Photoshop, FIgma, XD
              </p>
           
              <div className="col-md-2 col-sm-4">
                <div className="single-new-project">
                  <a
                    
                    data-dialog-type="modal"
                    data-dialog-options='{"width":600}'
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    id="apply"
                  >
                   Apply Now
                  </a>

                  {/* model */}

                  <div
                    class="modal fade "
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog border-top border-8 border-primary">
                      <div class="modal-content " id="mycontent">
                        

                        <div
                          class="modal-body"
                          className="text-center gap-5 m-4"
                        >
                          <div className="text-start">
                          <label htmlFor="" >Full Name</label>
                         <br />
                          <input
                            type="text"
                            style={{
                              width: '100%',
                              padding: '12px 20px',
                              margin: '8px 0',
                              boxSizing: 'border-box',
                              border: 'none',
                              borderBottom: '1px solid black',
                            }}
                           
                          />
                          <br />
                          </div>



                          <div className="text-start">
                          <label htmlFor="">Email</label>
                          <br />
                          <input
                            type="text"
                           
                            style={{
                              width: '100%',
                              padding: '12px 20px',
                              margin: '8px 0',
                              boxSizing: 'border-box',
                              border: 'none',
                              borderBottom: '1px solid black',
                            }}
                           
                            
                          />
                          <br />
                          </div>


                         <div className="text-start">
                         <label htmlFor="">Contact</label>
                          <br />
                          <input
                            type="text"
                           
                            style={{
                              width: '100%',
                              padding: '12px 20px',
                              margin: '8px 0',
                              boxSizing: 'border-box',
                              border: 'none',
                              borderBottom: '1px solid black',
                            }}
                          />

                          <br />
                         </div>
                          <div  className="text-start">
                          <label htmlFor="">Position for apply</label>
                          <select
                            name="pets"
                            id="pet-select"
                            style={{
                              width: '100%',
                              padding: '12px 20px',
                              margin: '8px 0',
                              boxSizing: 'border-box',
                              border: 'none',
                              borderBottom: '1px solid black',
                            }}
                          >
                            <option value="">-Service-</option>
                            <option value="Drupal Developer ">Drupal Developer </option>
                            <option value="PHP Developer">PHP Developer</option>
                            <option value="UI/UX designer">UI/UX designer</option>
                            <option value="Java Developer">Java Developer</option>
                            
                          </select>
                          <br />
                          </div>
                           <div className="text-start">
                           <label htmlFor="">Add your resume</label>
                          <br />

                          <input
                            type="file"
                            style={{
                              width: '100%',
                              padding: '12px 20px',
                              margin: '8px 0',
                              boxSizing: 'border-box',
                              border: 'none',
                              borderBottom: '1px solid black',
                            }}
                            
                          />
                           </div>
                        </div>

                        <div className="modal-footer" id="one1">
                          <button
                            type="submit"
                            className="btn btn-info"
                            data-bs-dismiss="modal"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <h3>Java Developer</h3>
              <strong>Summary</strong>
              <p>
                <strong>Location:</strong> Indore India
              </p>
              <p>
                <strong>Role: </strong>Java
              </p>
              <p>
                <strong>Experience:</strong> 2+ years
              </p>
              <p>
                <strong>No. of position:</strong> 2
              </p>
              <p>
                <strong>Skills:</strong> Java, Maven, Spring Boot, Kubernate,
                Hibernate, Git,Jira, Bitbuket, AWS
              </p>
           
              <div className="col-md-2 col-sm-4">
                <div className="single-new-project">
                  <a
                    
                    data-dialog-type="modal"
                    data-dialog-options='{"width":600}'
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    id="apply"
                  >
                   Apply Now
                  </a>

                  {/* model */}

                  <div
                    class="modal fade "
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                   <div class="modal-dialog border-top border-8 border-primary">
    <div class="modal-content" id="mycontent">

        <div class="modal-body" className="text-center gap-5 m-4">
            <div className="text-start">
                <label htmlFor="full_name">Full Name</label><br />
                <input
                    type="text"
                    id="full_name"
                    name="full_name"
                    style={{
                        width: '100%',
                        padding: '12px 20px',
                        margin: '8px 0',
                        boxSizing: 'border-box',
                        border: 'none',
                        borderBottom: '1px solid black',
                    }}
                    required
                /><br />
            </div>

            <div className="text-start">
                <label htmlFor="email">Email</label><br />
                <input
                    type="text"
                    id="email"
                    name="email"
                    style={{
                        width: '100%',
                        padding: '12px 20px',
                        margin: '8px 0',
                        boxSizing: 'border-box',
                        border: 'none',
                        borderBottom: '1px solid black',
                    }}
                    required
                /><br />
            </div>

            <div className="text-start">
                <label htmlFor="contact">Contact</label><br />
                <input
                    type="text"
                    id="contact"
                    name="contact"
                    style={{
                        width: '100%',
                        padding: '12px 20px',
                        margin: '8px 0',
                        boxSizing: 'border-box',
                        border: 'none',
                        borderBottom: '1px solid black',
                    }}
                    required
                /><br />
            </div>

            <div className="text-start">
                <label htmlFor="position">Position for apply</label><br />
                <select
                    name="position"
                    id="position"
                    style={{
                        width: '100%',
                        padding: '12px 20px',
                        margin: '8px 0',
                        boxSizing: 'border-box',
                        border: 'none',
                        borderBottom: '1px solid black',
                    }}
                    required
                >
                    <option value="">-Service-</option>
                    <option value="Drupal Developer">Drupal Developer</option>
                    <option value="PHP Developer">PHP Developer</option>
                    <option value="UI/UX designer">UI/UX designer</option>
                    <option value="Java Developer">Java Developer</option>
                </select><br />
            </div>

            <div className="text-start">
                <label htmlFor="resume">Add your resume</label><br />
                <input
                    type="file"
                    id="resume"
                    name="resume"
                    style={{
                        width: '100%',
                        padding: '12px 20px',
                        margin: '8px 0',
                        boxSizing: 'border-box',
                        border: 'none',
                        borderBottom: '1px solid black',
                    }}
                    required
                />
            </div>
        </div>

        <div className="modal-footer" id="one1">
            <button
                type="submit"
                className="btn btn-info"
                data-bs-dismiss="modal"
            >
                Submit
            </button>
        </div>
    </div>
</div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Testimonial />
     <Footer/>
    </>
  );
};
export default Career;
