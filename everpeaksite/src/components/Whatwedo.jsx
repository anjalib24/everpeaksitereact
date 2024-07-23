import React from 'react'
import img1 from "../assets/business_1.png";
import img3 from "../assets/customer.png";
import img2 from "../assets/img2.png";
import './style.css';
const Whatwedo = () => {
  return (
    <>
    <div>
          <div className="container section-header text-center p-5">
              <h1 className="text-center p-2">What We Do</h1>
              <p className="text-center fs-5">
                  We simplify lives by building the right &amp; robust web and mobile
                  application products! Technology is transforming business, society
                  and the everyday lives of people .EverPeak IT Solutions role has
                  always been to innovate through people, knowledge, solutions to
                  support businesses and society.
              </p>
          </div>
      </div><div className="container ">
              <div className="container" id="">
                  <div className="row d-flex justify-content-between gap-4">
                      <div
                          style={{ margin: 5, height: "370px" }}
                          className="col-md-3 text-center border border-light h  cart "
                      >
                          <img className="m-5" src={img1} alt="" />
                          <h4>Business Consultancy</h4>
                          <p className="fs-5">
                              We turn your business idea into reality and transform your
                              business with our custom solutions.
                          </p>
                      </div>
                      <div
                          style={{ margin: 5, height: "370px" }}
                          className="col-md-3 text-center border border-light  cart"
                      >
                          <img className="m-5" src={img2} alt="" />
                          <h4>Help To Grow Business</h4>
                          <p>
                              Always think about what else our clients need. Helps in identify
                              the target audience, simplify business flows to driving business
                              value through implementing software solutions.
                          </p>
                      </div>
                      <div
                          style={{ margin: 5, height: "370px" }}
                          className="col-md-3 text-center border border-light  cart"
                      >
                          <img className="m-5" src={img3} alt="" />
                          <h4>24/7 support</h4>
                          <p>
                              We offer dependable, On-demand, On-time support option as
                              Technical and remote chat.
                          </p>
                      </div>
                  </div>
              </div>
          </div></>

  )
}

export default Whatwedo