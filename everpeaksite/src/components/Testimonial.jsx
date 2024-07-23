import React from "react";
import $ from "jquery";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <>
    <div id="corosuel">
      <div className="section-header text-center">
        <h2>
          <span>what our client say about us </span>
        </h2>
      </div>
      <OwlCarousel class="owl-carousel owl-theme" loop margin={3} id="owl">
        <div class="item" data-merge="6" className="text-center m-5" id="test">
          <p>
            <em>
              Everpeak Team is absolutely amazing. His work is excellent, he is
              very knowledgable, works fast and efficient, friendly, always on
              time, and just an amazing person to work with. I'm happy the works
              is done, but I'm sad to be done working with him.. for now! I
              recommend him to everyone looking to migrate their drupal site."
            </em>
          </p>
          <h3>Michael</h3>
        </div>
        <div class="item" data-merge="6" className="text-center m-5" id="test">
          <p>
            <em>
              Everpeak Team was very professional and skilled. Vidit was quick
              to communicate and very accessible to meet and work on the issues.
              We highly recommend Everpeak It Solution and will use him in the
              future!
            </em>
          </p>
          <h3>Sam Gotts</h3>
        </div>
        <div class="item" data-merge="6" className="text-center m-5" id="test">
          <p>
            <em>
              Working with Everpeak was a pleasure. Vidit was very responsive,
              quick and collaborated with me until the requirements for this
              project were met. Highly recommended. I'll definitely work with
              him again in the future. I'm a developer myself so I can vouch for
              his competence. Thank you!"
            </em>
          </p>
          <h3>
           David Mansaray
            <a href="#"> </a>
          </h3>
        </div>
        <div class="item" data-merge="6" className="text-center m-5" id="test">
          <p>
            <em>
              Everpeak Team is absolutely amazing. His work is excellent, he is
              very knowledgable, works fast and efficient, friendly, always on
              time, and just an amazing person to work with. I'm happy the works
              is done, but I'm sad to be done working with him.. for now! I
              recommend him to everyone looking to migrate their drupal site."
            </em>
          </p>
          <h3>Michael <a href="#"> </a></h3>
        </div>
      </OwlCarousel>
      </div>
    </>
  );
};

export default Testimonial;
