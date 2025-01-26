import bg_1 from "./img/bg-1.webp";
import bg_2 from "./img/bg2.webp";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// import OwlCarousel from "react-owl-carousel";
// Import Images
import tahamiImg from "./img/tahami.png";
import jogendraImg from "./img/jogendra.png";
import ayushImg from "./img/ayush.png";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Tahami Syed",
    designation: "TT AIDS B",
    feedback:
      "Being part of the S.O.R.T. Club has helped me develop both socially and professionally. The club is more than just a group; it's like a family.",
    image: tahamiImg,
  },
  {
    name: "Jogendra Suthar",
    designation: "TT AIDS B",
    feedback:
      "SORT CLUB gave me opportunities to participate in skill-building activities and webinars. It helped me improve my communication, technical skills, and confidence.",
    image: jogendraImg,
  },
  {
    name: "Ayush Malviya",
    designation: "TT CSE",
    feedback:
      "Through the club's workshops and mentorship programs, I learned valuable skills in leadership, personal branding, aiding my personal and professional growth.",
    image: ayushImg,
  },
];

const homeBody: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: 200, // Offset from the viewport to trigger animations
      once: true, // Animation occurs only once
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: (dots: React.ReactNode) => (
      <div style={{ bottom: "20px" }}>
        <ul style={{ margin: "0px", padding: "0px" }}>{dots}</ul>
      </div>
    ),
    customPaging: (i: number) => (
      <img
        src={testimonials[i].image}
        alt={testimonials[i].name}
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />
    ),
  };

  return (
    <>
      {/* Carousel Start */}
      <section id="hero">
        <div
          className="container-fluid p-0 mb-5 wow fadeIn"
          data-wow-delay="0.1s"
        >
          <div
            id="header-carousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {/* First Carousel Item */}
              <div className="carousel-item active">
                <img className="w-100 carousel-image" src={bg_1} alt="Image" />
                <div className="carousel-caption d-flex align-items-center justify-content-center text-start">
                  <div className="mx-sm-5 px-5" style={{ maxWidth: "900px" }}>
                    <h1 className="display-2 text-white text-uppercase mb-4 animated slideInDown">
                      SORT AND LITERARY CLUB
                    </h1>
                    <h4 className="text-white text-uppercase mb-4 animated slideInDown">
                      <i className="fa fa-map-marker-alt text-primary me-3"></i>
                      TCET, Mumbai: 400101
                    </h4>
                    <h4 className="text-white text-uppercase mb-4 animated slideInDown">
                      <i className="fa fa-phone-alt text-primary me-3"></i>+91
                      70454 49325
                    </h4>
                  </div>
                </div>
              </div>
              {/* Second Carousel Item */}
              <div className="carousel-item">
                <img className="w-100 carousel-image" src={bg_2} alt="Image" />
                <div className="carousel-caption d-flex align-items-center justify-content-center text-start">
                  <div className="mx-sm-5 px-5" style={{ maxWidth: "900px" }}>
                    <h1 className="display-2 text-white text-uppercase mb-4 animated slideInDown">
                      WE WILL KEEP YOU AWESOME
                    </h1>
                    <h4 className="text-white text-uppercase mb-4 animated slideInDown">
                      <i className="fa fa-map-marker-alt text-primary me-3"></i>
                      TCET, Mumbai: 400101
                    </h4>
                    <h4 className="text-white text-uppercase mb-4 animated slideInDown">
                      <i className="fa fa-phone-alt text-primary me-3"></i>+91
                      70454 49325
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            {/* Carousel Controls */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#header-carousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#header-carousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
      {/* Carousel End */}

      {/* Events Start */}
      <section id="events">
        <div id="events-container" className="container-xxl py-5">
          <div className="container">
            <div
              className="text-center mx-auto mb-5 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ maxWidth: "600px" }}
            >
              <p className="d-inline-block bg-secondary text-primary py-1 px-4">
                EVENTS
              </p>
              <h1 className="text-uppercase">Upcoming Events</h1>
            </div>
            <div className="row g-4">
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="service-item position-relative overflow-hidden bg-secondary d-flex h-100 p-5 ps-0">
                  <div className="ps-4">
                    <br />
                    <h3 className="text-uppercase mb-3">Gen AI Workshop</h3>
                    30th Jan
                    <br />
                    <ul>
                      <li>
                        Join us for an insightful Generative AI Workshop organized by <b>SORT x PIECES</b> at TCET!  
                      </li>
                      <li>
                      This interactive session, "Gen AI 101," will dive into the essentials of Generative AI, exploring its foundations and practical use cases.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="service-item position-relative overflow-hidden bg-secondary d-flex h-100 p-5 ps-0">
                  <div className="ps-4">
                    <br />
                    <h3 className="text-uppercase mb-3">SORT League</h3>
                    TBA
                    <br />
                    <ul>
                      <li>
                      Get ready for an action-packed <b>Football Match</b> on the turf! 
                      </li>
                      <li>
                      Showcase your skills, team spirit, and passion for the game in an exhilarating showdown.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="service-item position-relative overflow-hidden bg-secondary d-flex h-100 p-5 ps-0">
                  <div className="ps-4">
                    <br />
                    <h3 className="text-uppercase mb-3">Figma Workshop</h3>
                    TBA
                    <ul>
                      <li>
                      Learn the fundamentals of UI/UX design and bring your ideas to life with Figma’s powerful tools.   
                      </li>
                      <li>
                      This hands-on session is perfect for beginners and design enthusiasts looking to master modern design techniques and workflows.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Events End */}

      <section id="experience" style={{ position: "relative", zIndex: 1 }}>
        <div className="container-xxl py-5">
          <div className="container">
            <div
              className="text-center mx-auto mb-5"
              data-aos="fade-up"
              style={{ maxWidth: "600px" }}
            >
              <p className="d-inline-block bg-secondary text-primary py-1 px-4">
                Experiences
              </p>
              <h1 className="text-uppercase">What Our Members Say!</h1>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="col-12 col-md-6">
                {" "}
                {/* Use Bootstrap's grid */}
                <Slider {...settings}>
                  {testimonials.map((testimonial, index) => (
                    <div className="testimonial-item text-center" key={index}>
                      <h4 className="text-uppercase">{testimonial.name}</h4>
                      <p className="text-primary">{testimonial.designation}</p>
                      <span className="fs-5">{testimonial.feedback}</span>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* responsive */}
      <style>{`
        @media (max-width: 767px) {
          .testimonial-item {
            padding: 0 15px; /* Add padding for smaller screens */
          }

          .text-center {
            text-align: center; /* Ensure text stays centered */
          }
        }
      `}</style>

      {/* Contact Starts */}
      <section id="contact">
        <div id="contact-container" className="container-xxl py-5">
          <div className="container">
            <div className="row g-0">
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                <div className="bg-secondary p-5">
                  <p className="d-inline-block bg-dark text-primary py-1 px-4">
                    Contact Us
                  </p>
                  <h1 className="text-uppercase mb-4">
                    Have Any Query? Please Contact Us!
                  </h1>

                  <form>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control bg-transparent"
                            id="name"
                            defaultValue=""
                            placeholder="Your Name"
                          />
                          <label htmlFor="name">Your Name</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="email"
                            className="form-control bg-transparent"
                            id="email"
                            defaultValue=""
                            placeholder="Your Email"
                          />
                          <label htmlFor="email">Your Email</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control bg-transparent"
                            id="subject"
                            defaultValue=""
                            placeholder="Subject"
                          />
                          <label htmlFor="subject">Subject</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <textarea
                            className="form-control bg-transparent"
                            id="message"
                            placeholder="Leave a message here"
                            style={{ height: "100px" }}
                          ></textarea>
                          <label htmlFor="message">Message</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <button
                          className="btn btn-primary w-100 py-3"
                          type="submit"
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                <div className="h-100" style={{ minHeight: "400px" }}>
                  <iframe
                    className="google-map w-100 h-100"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.745722943928!2d72.87241691492012!3d19.20630535285456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0e57647569d%3A0xc0aec329c82d3555!2sThakur%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1677901063659!5m2!1sen!2sin"
                    frameBorder="0"
                    allowFullScreen
                    aria-hidden="false"
                    tabIndex={0}
                    style={{
                      filter: "grayscale(10%) invert(92%) contrast(83%)",
                      border: "0",
                    }}
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Ends */}
    </>
  );
};

export default homeBody;
