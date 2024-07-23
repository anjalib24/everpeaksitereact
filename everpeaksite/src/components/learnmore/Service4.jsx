import React from "react";
import t1 from "../../assets/t1.png";
import t2 from "../../assets/t2.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'; 
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
const Service4 = () => {
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
            src={t1}
            width={224}
            height={175}
            alt=""
            typeof="foaf:Image"
          />
            </div>
            <div>
                <h2>Software Testing</h2>
        <p className="pop-dec">
          Provide a range of software testing &amp; Quality Assurance services
          to ensured the deliverable software meets on the peak of quality
          standards.
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
                      src={t2}
                      width={48}
                      loading="lazy"
                    />
                    <a data-colorbox-inline=".service-7">
                      Our Key Testing services
                    </a>
                  </h2>
                  <ul>
                    <li className="skills">Agile &amp; DevOps</li>
                    <li className="skills">Digital and Web</li>
                    <li className="skills">Automation Software Testing</li>
                    <li className="skills">Manual Software Testing</li>
                    <li className="skills">Performance Testing</li>
                    <li className="skills">Security Testing</li>
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

export default Service4;
