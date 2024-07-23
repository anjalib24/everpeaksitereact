import React from "react";
import "./style.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import img5 from "../assets/services1.png";
import img6 from "../assets/services2.png";
import img7 from "../assets/services3.png";
import img8 from "../assets/services4.png";
import img9 from "../assets/services5.png";
import img10 from "../assets/services6.png";

const Services = () => {
  const [activeService, setActiveService] = useState(null);
  const navigate = useNavigate();

  const handleService1 = (index, route) => {
    setActiveService(index);
    navigate(route);
  };
  const serviceData = [
    {
      id: 1,
      title: "Custom Web development",
      data: "Developing and design a professional custom website for your business with complete scalability and content controls along with latest technologies.",
      img: img5,
      route: "/service1",
    },
    {
      id: 2,
      title: "Mobile app development",
      data: "Innovative and Custom mobile application development on React Native, Flutter, Kotlin, Android /iOS platforms that generate peak ROI.",
      img: img6,
      route: "/service2",
    },
    {
      id: 3,
      title: "Cloud Consulting",
      data: "Application development with extensive networking solutions i.e. DevOps, Cloud consultation, Cloud Migration.",
      img: img7,
      route: "/service3",
    },
    {
      id: 4,
      title: "Software Testing",
      data: "Provide a range of software testing & Quality Assurance services to ensured the deliverable software meets on the peak of quality standards.",
      img: img8,
      route: "/service4",
    },

    {
      id: 5,
      title: "Digital Marketing",
      data: "Our digital marketing strategics focus on natural and enhanced by content, social media and other techniques",
      img: img9,
      route: "/service5",
    },
    {
      id: 6,
      title: "24/7 Customer Support",
      data: "We offer dependable, On-demand, On-time support option as Technical and remote chat.",
      img: img10,
      route: "/service6",
    },
  ];

  return (
    <>
      <div
        property="schema:text"
        className="clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item"
      >
        <section>
          <div className="container my-5">
            <div className="service-details">
              <div className="section-header text-center">
                <h2 className="">our services</h2>
              </div>
                 <div className="service-content-one">
                <div className="row  ">
                  <div style={{ display: "contents" }}>
                    {serviceData.map((data, index) => (
                      <div
                        key={index}
                        className={`data-${
                          index + 1
                        } col-sm-4 col-xs-12 col-md-4`}
                      >
                        <div>
                          <div className="service-single text-center">
                            <div className="service-img">
                              <img
                                alt="web development"
                                data-entity-type="file"
                                data-entity-uuid="5698902e-4980-4f0c-968c-6394bdd957e8"
                                src={data.img}
                                width={48}
                                height={48}
                                loading="lazy"
                              />
                            </div>

                            <div className="service-txt">
                              <h2>
                                <a
                                  data-colorbox-inline=".service-7"
                                  onClick={() =>
                                    handleService1(index, data.route)
                                  }
                                  id={`one${index}`}
                                >
                                  {data.title}{" "}
                                </a>
                              </h2>
                              <p>{data.data}</p>
                              <a
                                className="service-btn"
                                data-colorbox-inline=".service-7"
                                id={`one${index}`}
                                onClick={() =>
                                  handleService1(index, data.route)
                                }
                              >
                                learn more{" "}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
