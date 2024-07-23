import React from "react";
import support1 from '../../assets/support1.png';
import support2 from "../../assets/support2.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'; 
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
const Service6 = () => {
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
      <div className="container" id="popup3">
        <div id="service4" className="gap-5 p-3">
        <div>
            <img
            loading="lazy"
            src={support1}
            width={224}
            height={175}
            alt=""
            typeof="foaf:Image"
          />
            </div>
            <div>
                <h2>24/7 Support</h2>
        <p className="pop-dec">
        We offer dependable, On-demand, On-time support option as Technical and remote chat.

 


        </p>
        </div>
       </div>
        <div className="service-content-one">
          <div className="row">
            <div className="col-sm-4 col-xs-12">
              <div className="pop-up">
                <div className="pop-txt">
                  <h2>
                    <img
                      alt="Software Testing"
                      data-entity-type="file"
                      data-entity-uuid="99279400-fdc7-42d8-8afa-8086de59254c"
                      height={48}
                      src={support2}
                      width={48}
                      loading="lazy"
                    />
                    <a data-colorbox-inline=".service-7">
                      24/7 support </a>
                  </h2>
                  <ul>
                    <li className="skills">Software and Application Support</li>
                    <li className="skills">Data Backup and Recovery</li>
                    <li className="skills">Help Desk Support</li>
                    <li className="skills">Server and Cloud computing</li>
                    <li className="skills">IT Training and Knowledge Transfer</li>
                    
                    
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-end fs-1"> 
                <FontAwesomeIcon icon={faCircleXmark} onClick={handleCross}/>
                
        </div>
      </div>
      </div>
    </>
  );
};

export default Service6;
