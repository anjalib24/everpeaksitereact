import React, { useState } from "react";
import img11 from "../assets/counter1.png";
import img12 from "../assets/counter2.png";
import img13 from "../assets/counter3.png";
import img14 from "../assets/counter4.png";
import ScrollTrigger from "react-scroll-trigger";
import Countup from "react-countup";

import "./counter.css";
const Couter = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <>
      <section className="statistics">
        <div className="container">
          <div className="region region-counter">
            <div
              id="block-counter"
              className="block block-block-content block-block-contentce17d79b-7652-4e1f-b00d-64ca707c047f"
            >
              <div className="content">
                <div className="clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item text-white">
                  <div className="statistics-counter d-flex justify-content-center text-center text-white">
                    <div className="col-md-3 col-sm-6 ">
                      <div className="single-ststistics-box ">
                        <div className="statistics-img">
                          <img alt="counter-icon" src={img11} />
                        </div>

                        <div className="statistics-content">
                          <ScrollTrigger
                            onEnter={() => setCounterOn(true)}
                            onExit={() => setCounterOn(false)}
                          >
                            <span className="counter">
                              {" "}
                              {counterOn && (
                                <Countup
                                  start={1}
                                  end={365}
                                  duration={2}
                                  delay={0}
                                />
                              )}{" "}
                            </span>
                          </ScrollTrigger>

                          {/* <div className="counter">850</div> */}
                          <h3>days worked</h3>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-3 col-sm-6">
                      <div className="single-ststistics-box">
                        <div className="statistics-img">
                          <img alt="counter-icon" src={img12} />
                        </div>

                        <div className="statistics-content">
                          {/* <div className="counter">160</div> */}
                          <ScrollTrigger
                            onEnter={() => setCounterOn(true)}
                            onExit={() => setCounterOn(false)}
                          >
                            <span className="counter">
                              {" "}
                              {counterOn && (
                                <Countup
                                  start={0}
                                  end={160}
                                  duration={2}
                                  delay={0}
                                />
                              )}{" "}
                            </span>
                          </ScrollTrigger>

                          <h3>project finished</h3>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-3 col-sm-6">
                      <div className="single-ststistics-box">
                        <div className="statistics-img">
                          <img alt="counter-icon" src={img13} />
                        </div>

                        <div className="statistics-content">
                          {/* <div className="counter">46</div> */}
                          <ScrollTrigger
                            onEnter={() => setCounterOn(true)}
                            onExit={() => setCounterOn(false)}
                          >
                            <span className="counter">
                              {" "}
                              {counterOn && (
                                <Countup
                                  start={0}
                                  end={46}
                                  duration={2}
                                  delay={0}
                                />
                              )}{" "}
                            </span>
                          </ScrollTrigger>

                          <h3>coffee cup</h3>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-3 col-sm-6">
                      <div className="single-ststistics-box">
                        <div className="statistics-img">
                          <img alt="counter-icon" src={img14} />
                        </div>

                        <div className="statistics-content">
                          
                          <ScrollTrigger
                            onEnter={() => setCounterOn(true)}
                            onExit={() => setCounterOn(false)}
                          >
                            <span className="counter">
                              {" "}
                              {counterOn && (
                                <Countup
                                  start={20}
                                  end={225}
                                  duration={2}
                                  delay={0}
                                />
                              )}{" "}
                            </span>
                          </ScrollTrigger>

                          <h3 className="text-white">client satisfied</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Couter;
