import React from "react";
import "./project.css";
import img1 from "../assets/project1.jpg";
import img2 from "../assets/project2.jpg";
import img3 from "../assets/project3.jpg";
import img4 from "../assets/project4.jpg";
import img5 from "../assets/project5.jpg";
const Project = () => {
  return (
    <>
      <div id="project" className="container">
        <section >
          <div>
            <div className="project-details">
              <div className="project-header text-left">
                <h2>Our Finished Projects</h2>
                <p>Pallamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>

              <div className="project-content">
                <div className="gallery-content">
                  <div className="isotope">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <div className="item big-height">
                          <img src={img1} alt="portfolio image" />
                          <div className="isotope-overlay">
                            <a>
                              <span className="lnr lnr-link" />
                            </a>
                            <h3>
                              <a>Acquisition Plan</a>
                            </h3>
                            <p>Business Planning</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-8 col-sm-12">
                        <div className="row">
                          <div className="col-sm-6 col-xs-12">
                            <div className="item">
                              <img src={img2} alt="portfolio image" />
                              <div className="isotope-overlay">
                                <a>
                                  <span className="lnr lnr-link" />
                                </a>
                                <h3>
                                  <a>Acquisition Plan</a>
                                </h3>
                                <p>Business Planning</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-xs-12">
                            <div className="item">
                              <img src={img3} alt="portfolio image" />
                              <div className="isotope-overlay">
                                <a>
                                  <span className="lnr lnr-link" />
                                </a>
                                <h3>
                                  <a>Acquisition Plan</a>
                                </h3>
                                <p>Business Planning</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-sm-6 col-xs-12">
                            <div className="item">
                              <img src={img4} alt="portfolio image" />
                              <div className="isotope-overlay">
                                <a>
                                  <span className="lnr lnr-link" />
                                </a>
                                <h3>
                                  <a>Acquisition Plan</a>
                                </h3>
                                <p>Business Planning</p>
                              </div>
                            </div>
                          </div>

                          <div className="col-sm-6 col-xs-12">
                            <div className="item">
                              <img src={img5} alt="portfolio image" />
                              <div
                                className="isotope-overlay"
                                id="isotope-overlay"
                              >
                                <a>
                                  <span className="lnr lnr-link" />
                                </a>
                                <h3>
                                  <a>Acquisition Plan</a>
                                </h3>
                                <p>Business Planning</p>
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

            <div className="project-btn text-center">
              <a className="project-view">
                View All
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Project;
