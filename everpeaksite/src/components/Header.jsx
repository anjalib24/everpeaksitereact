import React from "react";
import "./style.css";
import AboutUs from "./main/AboutUs";
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo1.png';
const Header = () => {
  const navigate = useNavigate();
  function handleAbout() {
    navigate("/aboutus");
  }
  function HandleHome() {
    navigate("/");
  }
  function handService(){
    navigate("/service")
  }
  function handleStudies(){
    navigate("/studies")
  }
  function handleSolution(){
    navigate("/solution")
  }
  function handleCareer(){
    navigate("/career")
  }
  function handleContact(){
    navigate("/contact")
  }
  return (
    <div id="navbar">
      <nav
        className="navbar navbar-expand-lg navbar-light"
       
      >
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="#">Navbar</a> */}
          <div className="space-between"  >
            <div id="logo">
            <img
              src={logo}
              alt=""
             
              className=""
              height={80}
              width={180}
              onClick={HandleHome}
            />
            </div>
          </div>
          <div>
            <button
              className="navbar-toggler"
              id="toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse flex-row-reverse mx-5 text-center justify-items-center"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav m-auto mb-2 mb-lg-0 ">
                <li className="">
                  <a
                    className="nav-link active color-blue"
                    id="nav"
                    aria-current="page"
                    onClick={handleAbout}
                  >
                    About Us
                  </a>
                </li>
                <li className="nav-item color-blue">
                  <a className="nav-link active" id="nav" href="#"
                   onClick={handService} >
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="nav"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    onClick={handleStudies}
                  >
                    Case Studies
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="nav"
                    href="#"
                    tabindex="-1"
                    aria-disabled="true"
                    onClick={handleSolution}
                  >
                    Solution
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="nav"
                    href="#"
                    tabindex="-1"
                    aria-disabled="true"
                    onClick={handleCareer}
                  >
                    Career
                  </a>
                </li>
                <button className="nav-item" id="navbutton">
                  <a className="nav-link " id="navbutton" href="#" onClick={handleContact}>
                    Contact
                  </a>
                </button>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
