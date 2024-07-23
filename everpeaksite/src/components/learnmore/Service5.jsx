import React from "react";
import c1 from "../../assets/c1.png";
import c2 from "../../assets/c2.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'; 
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
const Service5 = () => {
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
        <div id="service4">
        <div>
            <img
            loading="lazy"
            src={c1}
            width={224}
            height={175}
            alt=""
            typeof="foaf:Image"
          />
            </div>
            <div>
                <h2>Digital Marketing</h2>
        <p className="pop-dec">
        Provide a range of software testing & Quality Assurance services to ensured the deliverable software meets on the peak of quality standards.


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
                      src={c2}
                      width={48}
                      loading="lazy"
                    />
                    <a data-colorbox-inline=".service-7">
                      Our Devops core  </a>
                  </h2>
                  <ul>
                    <li className="skills">Content Writing</li>
                    <li className="skills">SEO</li>
                    <li className="skills">SMO</li>
                    <li className="skills">PPC/CPC</li>
                    
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

export default Service5;
