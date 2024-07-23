import React from "react";
import img4 from "../assets/a.jpg";
import './style.css'
const About = () => {
  return (
    <>
    <div className="bg-light">
    <div className="bg-light mt-5 container text-center" id="about">
      <div className="text-center" id="about1">
        <div className="row gap-5">
          <div className="col mt-5">
            <h1 className="font-weight-bold text-start" id="heading">
              About Us
            </h1>
            <br />
            <p className="fs-5 text-gray text-start">
              EverPeak IT solutions incorporated in Indore started in 2019 with
              a motive for developing the novelty software. Since our inception,
              the brilliant minds joined us and we strive hard to reach where we
              are today. We're a digital product agency. We design, build, and
              grow bespoke products for mobile, web, and IoT based application
              development with current market trends offer quality services with
              our experience gems.
            </p>
            <br />
            <div className="text-start">
            <button type="button" className="btn btn-lg btn-info">
              Learn More
            </button>
            </div>
          </div>
          <div className="col">
            <img
              className="text-center"
              id="aboutimg"
              src={img4}
              alt=""
              height={400}
              width={450}
            />
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default About;
