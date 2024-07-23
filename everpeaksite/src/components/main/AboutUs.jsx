import React from "react";
import "./aboutus.css";
import ab2 from "../../assets/ab2.jpg";
import Header from "../Header";
import Counter from "../Counter";
import Whatwedo from "../Whatwedo";
import Footer from "../Footer";
import Testimonial from "../Testimonial";
const AboutUs = () => {
  return (
    <>
      <Header />
      <section className="about-part">
        <div className="container">
          <div className="about-part-details text-center">
            <h2>About Us</h2>
            <div className="about-part-content">
              <div className="breadcrumbs">
                <div className="container">
                  <h3 style={{ color: "#fff" }}>
                    Simplify your business idea digitally{" "}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="about-history">
        <div className="container">
          <div className="region region-content">
            <div
              id="block-virtual-team-content"
              className="block block-system block-system-main-block"
            >
              <div className="content">
                <article
                  data-history-node-id={1}
                  role="article"
                  about="/about-us"
                  typeof="schema:WebPage"
                  className="node node--type-page node--view-mode-full clearfix"
                >
                  <header>
                    <span
                      property="schema:name"
                      content="About Us"
                      className="rdf-meta hidden"
                    />
                  </header>
                  <div className="node__content clearfix">
                    <div
                      property="schema:text"
                      className="clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item"
                    >
                      <div className="row">
                        <div className="col-md-12">
                          <p style={{ textAlign: "center" }}>
                            EverPeak IT solutions incorporated in Indore started
                            in 2019 with a motive for developing the novelty
                            software. Since our inception, the brilliant minds
                            joined us and we strive hard to reach where we are
                            today. We're a digital product agency. We design,
                            build, and grow bespoke products for mobile, web,
                            and IoT based application development with current
                            market trends offer quality services with our
                            experience gems.
                          </p>
                          <p style={{ textAlign: "center" }}> </p>
                          <p style={{ textAlign: "center" }}> </p>
                        </div>
                        <div className=" row about-vission-content">
                          <div className="col-md-6 col-sm-12">
                            <div className="single-about-history">
                              <div className="about-history-txt">
                                <h2>vision and mission</h2>
                                <p>
                                  Be a distinctive IT service provider company
                                  focused on delivering Top-notch solutions to
                                  our clients with latest cutting-edge
                                  technologies.
                                </p>
                                <p>
                                  We values our client, include building and
                                  maintaining long-term business associations
                                  with the client by incessantly making them
                                  Happy with the services served.
                                  <br />
                                  <br />
                                  “Always deliver more than expected” is our
                                  motive. Our mission is to provide committed
                                  and Top quality services to our client within
                                  desired time. Our peak, Where we'll take on is
                                  solving business challenges for unique
                                  business software solutions.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-offset-1 col-md-5 col-sm-12">
                            <div className="single-about-history">
                              <div className="about-history-img text-center">
                                <img alt="about" src={ab2} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Counter/>
      <Whatwedo/>
      <Testimonial/>
      <Footer/>
    </>
  );
};

export default AboutUs;
