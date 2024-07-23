import React from 'react'
import "./aboutus.css"
import Header from "../Header";
import Project from '../Project';
import Footer from '../Footer';
import Testimonial from '../Testimonial'; 
const Studies = () => {
  return (
   <>
   <Header/>
   <section className="studies-part">
        <div className="container">
          <div className="about-part-details text-center">
           
            <div className="about-part-content">
              <div className="breadcrumbs">
                <div className="container">
                  <h3 style={{ color: "#fff" }}>
                  Case Studies
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Project/>
      <Testimonial/>
      <Footer/>
</>
  )
}

export default Studies
