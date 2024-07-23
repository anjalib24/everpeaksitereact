import React from "react";
import c1 from '../../assets/c1.png';
import c2 from '../../assets/c2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'; 
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
const Service3 = () => {
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
      <div className="container" id="popup2">
        <div id="service3">
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
            <span className="field-content">
          <h2>Cloud computing</h2>
        </span>
        <p className="pop-dec">
          Application development with extensive networking solutions i.e.
          DevOps, Cloud consultation, Cloud Migration.
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
                      alt="Deveops"
                      data-entity-type="file"
                      data-entity-uuid="68afd3f3-5d10-4602-bac2-65aee98dfbe4"
                      height={48}
                      src={c2}
                      width={48}
                      loading="lazy"
                    />
                    <a data-colorbox-inline=".service-7">
                      Our DevOps Core
                    </a>
                  </h2>
                  <ul>
                    <li className="skill">Docke</li>
                    <li className="skills">Docker-Compose</li>
                    <li className="skills">Nginx</li>
                    <li className="skills">Redis</li>
                    <li className="skills">PostGreSQL / PostGIS</li>
                    <li className="skills">AWS</li>
                    <li className="skills">Azure,GCP</li>
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

export default Service3;
