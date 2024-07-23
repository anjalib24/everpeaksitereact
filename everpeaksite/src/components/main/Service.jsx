import React from "react";
import "./aboutus.css";
import Header from "../Header";
import Services from "../../components/Services"
import Footer from "../Footer";
import Testimonial from "../Testimonial";
const Service = () => {
  return (
    <>
      <Header/>
      <section className="service-part">
        <div className="container">
          <div className="about-part-details text-center">
            <h2>Services</h2>
            <div className="about-part-content">
              <div className="breadcrumbs">
                <div className="container">
                  <h3 style={{ color: "#fff" }}>
                    Experience the excellence with our professionals team
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Services/>
      <Testimonial/>
      <Footer/>
    </>
  );
};
export default Service;
