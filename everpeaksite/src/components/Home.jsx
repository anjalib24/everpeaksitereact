import React from "react";
import Header from "./Header";
import Herosection from "./Herosection";
import About from "./About";
import Services from "./Services";
import Counter from "./Counter";
import Whatwedo from "./Whatwedo";
import Project from "./Project";
import Testimonial from "./Testimonial";
import Contact from "./Contact";
import Footer from "./Footer";
import './style.css'
const Home = () => {
  return (
    <>
    <div class="layout-no-sidebars has-featured-top path-frontpage" data-once="form-single-submit" id="overflow">
      <Header />
      <Herosection />
      <Whatwedo />
      <About />
      <Services />
      <Counter />
      <Project />
      <Testimonial />
      <Contact />
      <Footer />
  </div>
    </>
  );
};
export default Home;
