import React from "react";
import "./service.css";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'; 
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import w1 from "../../assets/w1.png";
import w2 from "../../assets/w2.png";
import w3 from "../../assets/w3.png";
import w4 from "../../assets/w4.png";

const Service1 = () => {
  const navigate = useNavigate();
  function handleCross() {
    navigate("/service");
  }
  
  return (
    <>
    <div
  id="cboxOverlay"
  style={{ opacity: "0.85", cursor: "pointer", visibility: "visible"}}
>
  <div style={{height:"1000px"}}>
<div className="service-7 service-views views-row" id="popup">
      <div className="row container" id="service">
        <div className="views-field views-field-title col-md-3">
          <span className="field-content">
            <img
              loading="lazy"
              src={w1}
              width={239}
              height={175}
              alt=""
              typeof="foaf:Image"
            />
          </span>
        </div>

        <div className="col-md-9">
          <h2>Custom Web development</h2>
          <div className="views-field views-field-body">
            
             
                <p className="pop-dec">
                  Developing and design a professional custom website for your
                  business with complete scalability and content controls
                  along with latest technologies.
                </p>
              </div>
            </div>
            
            

            <div className="service-content-one">
              <div className="row">
                <div className="col-sm-4 col-xs-12 col-md-4">
                  <div className="pop-up text-center">
                    <div className="pop-txt">
                      <h2>
                        <img
                          alt="web development"
                          data-entity-type="file"
                          data-entity-uuid="8f0d06d1-9e91-4970-b4a9-300008609f1b"
                          height={48}
                          src={w2}
                          width={48}
                          loading="lazy"
                        />
                        <a
                          data-colorbox-inline=".service-7"
                          href="/service/7"
                        >
                          Backend
                        </a>
                      </h2>
                      <ul>
                        <li className="skills">PHP, WordPress ,Drupal</li>
                        <li className="skills">
                          Java, Spring boot, Microservices
                        </li>
                        <li className="skills">NodeJS ,Web3JS</li>
                        <li className="skills">Ruby on Rails</li>
                        <li className="skills">Python / Django</li>
                        <li className="skills">Blockchain</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-sm-4 col-xs-12 col-md-4">
                  <div className="pop-up text-center">
                    <div className="pop-txt">
                      <h2>
                        <img
                          alt="mobile development"
                          data-entity-type="file"
                          data-entity-uuid="cbff11ec-4d19-434f-9eba-d9de8d35b0cf"
                          height={48}
                          src={w3}
                          width={48}
                          loading="lazy"
                        />
                        <a
                          data-colorbox-inline=".service-8"
                          href="/service/8"
                        >
                          Frontend
                        </a>
                      </h2>
                      <ul>
                        <li className="skills">AngularJS, ReactJS, VueJS</li>
                        <li className="skills">Java Script</li>
                        <li className="skills">Jquery</li>
                        <li className="skills">Webpack, Gulp</li>
                        <li className="skills">SaSS, HTML5</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-sm-4 col-xs-12 col-md-4">
                  <div className="pop-up text-center">
                    <div className="pop-txt">
                      <h2>
                        <img
                          alt="cloud Consultancy"
                          data-entity-type="file"
                          data-entity-uuid="ce06a84c-efe8-4efa-be9f-d4b6f83cf661"
                          height={48}
                          src={w4}
                          width={48}
                          loading="lazy"
                        />
                        <a
                          data-colorbox-inline=".service-9"
                          href="/service/9"
                        >
                          Design
                        </a>
                      </h2>
                      <ul>
                        <li className="skills">Figma</li>
                        <li className="skills">Sketch</li>
                        <li className="skills">
                          Adobe XD, Photoshop, Illustrator
                        </li>
                        <li className="skills">PSD to HTML</li>
                        <li className="skills">HTML to HTML5</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-end fs-1 m-5"> 
                <FontAwesomeIcon icon={faCircleXmark} onClick={handleCross}/>
                {/* <FontAwesomeIcon icon="fa-regular fa-circle-xmark" /> onclick={(e) => setLinkValue(e.target.value)}*/}
        </div>
      </div>
      </div>
      
    </div>
    
        
  
     
        
       
    </>
  );
};

export default Service1;
