import React from "react";
import "./service.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'; 
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import m1 from "../../assets/m1.png";
import m2 from "../../assets/m2.png";
const Service2 = () => {
    const navigate = useNavigate();
    function handleCross() {
      navigate("/service");
    }
  return (
    <>
     <div
  id="cboxOverlay"
  style={{ opacity: "0.85", cursor: "pointer", visibility: "visible" }}
>
    <div className="service-8 service-views views-row container" id="popup1" >
      <div className="views-field views-field-field-icon"  id="service2">
        <div className="field-content my-3">
          <img
            loading="lazy"
            src={m1}
            width={224}
            height={175}
            alt=""
            typeof="foaf:Image"
          />
        </div>
      <div>
      <div className="views-field views-field-title my-3">
        <span className="field-content">
          <h2>Mobile App development</h2>
        </span>
      </div>
      <div className="views-field views-field-body">
        
            <p className="pop-dec">
              Innovative And Custom Mobile Application Development On React
              Native, Flutter, Kotlin, Android /IOS Platforms That Generate Peak
              ROI.
            </p>
             </div>
</div>
</div>
            <div className="service-content-one">
              <div className="row">
                <div className="col-sm-4 col-xs- col-md-4">
                  <div className="pop-up">
                    <div className="pop-txt">
                      <h2>
                        <img
                          alt="mobile"
                          data-entity-type="file"
                          data-entity-uuid="7c843d1c-0681-4d2f-97f1-7941b930317f"
                          height={48}
                          src={m2}
                          width={48}
                          loading="lazy"
                        />
                        <a data-colorbox-inline=".service-7">
                          Our Mobile Expertise
                        </a>
                      </h2>
                      <ul>
                        <li className="skills">React Native</li>
                        <li className="skills">Flutter</li>
                        <li className="skills">Swift, iOS, Kotlin</li>
                        <li className="skills">Android</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-end fs-1"> 
                <FontAwesomeIcon icon={faCircleXmark} onClick={handleCross}/>
                {/* <FontAwesomeIcon icon="fa-regular fa-circle-xmark" /> onclick={(e) => setLinkValue(e.target.value)}*/}
        </div>

            </div>

          </div>
        
      
    
     
    </div>
    </>
  );
};

export default Service2;
