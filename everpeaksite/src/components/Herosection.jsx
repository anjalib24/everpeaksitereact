import React from "react";
import "./style.css";

const Herosection = () => {
  return (
    <>
      <div className="container-fluid  row col-sm-12 cart2">
        <div className="row col-12 p-5 herosection">
          <div className=" mt-5">
            <h1 className="text-white banner">
              Consult Your Software <br /> Solution Idea With Us
            </h1>
          </div>
          <div className="">
            <p className="fs-2 text-white ">
              At EverPeak Solutions, We just not only build software but we{" "}
              <br />
              also build trust; We love to act as our clients solutions
              <br /> provider as affordable, innovative timely.
            </p>
          </div>
          
          <div id="slide">
          <button type="button" class="slide-btn">
											get started
											</button>
          <button type="button" class="slide-btn">
												explore more
											</button>
                      </div>
        </div>
      </div>

     
    </>
  );
};
export default Herosection;
