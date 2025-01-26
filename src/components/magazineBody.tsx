import React from "react";
import magazineEven from "./img/magazine-even.webp";
import magazineTemplate from "./img/magazinetemplate.webp";
import magzineImage from "./img/magzine-.webp";

const Magazine: React.FC = () => {
  return (
    <>
      {/* Header Section */}
      <div
        className="text-center mx-auto mb-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: "600px", marginTop: "50px"}}
      >
        <p className="d-inline-block bg-secondary text-primary py-1 px-4">
          Magazine
        </p>
        <h1 className="text-uppercase">Year : 2023 - 2024</h1>
      </div>

      {/* Magazine of Odd Semester */}
      <section id="magazine">
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-0 align-items-stretch">
              {/* Left Section: Text */}
              <div
                className="col-lg-6 wow fadeIn d-flex"
                data-wow-delay="0.1s"
              >
                <div className="bg-secondary h-100 d-flex flex-column justify-content-center p-5">
                  <p className="d-inline-flex bg-dark text-primary py-1 px-4 me-auto">
                    Our This Year (ODD) Magazine
                  </p>
                  <h1 className="text-uppercase mb-4">
                    Welcome to our magazine!
                  </h1>
                  <ul>
                    <li style={{ color: "rgb(235, 214, 214)" }}>
                      To discover the secrets and wonders of the intricate
                      web of life that sustains us all.
                    </li>
                    <li style={{ color: "rgb(235, 214, 214)" }}>
                      We aim to inspire readers to cultivate a deeper
                      appreciation for the natural world that surrounds us.
                    </li>
                    <li style={{ color: "rgb(235, 214, 214)" }}>
                      Our articles will cover a wide range of topics, from
                      mountains and oceans to insect behavior and plant
                      biology.
                    </li>
                    <li style={{ color: "rgb(235, 214, 214)" }}>
                      We believe that human beings are deeply connected to
                      nature and that our actions can have a profound impact
                      on the health and vitality of the planet.
                    </li>
                  </ul>
                  <div>
                    <br />
                    <a
                      href="https://pubhtml5.com/xtvgn/enue/"
                      className="btn btn-primary rounded-0 py-2 px-lg-4 d-none d-lg-block"
                    >
                      View the Magazine
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Section: Image */}
              <div
                className="col-lg-6 wow fadeIn"
                data-wow-delay="0.5s"
              >
                <div className="h-100">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://drive.google.com/file/d/194Kr5pdDvT23sricc9h-Q4DR5OkdhrYD/view?usp=sharing"
                  >
                    <img
                      className="img-fluid h-100"
                      src={magzineImage}
                      alt="Magazine Cover"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Previous Year Section */}
      <div
        className="text-center mx-auto mb-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: "600px" }}
      >
        <h1 className="text-uppercase">Previous Year : 2023 - 2024</h1>
      </div>

      {/* About Section */}
      <section id="about">
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-5">
              <div
                className="col-lg-6 wow fadeIn"
                data-wow-delay="0.1s"
              >
                <div className="d-flex flex-column">
                  <a
                    href="https://online.pubhtml5.com/jttk/qkku/#p=1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="img-fluid h-20"
                      src={magazineTemplate}
                      alt="Magazine Template"
                    />
                  </a>
                  <br />
                  <h4 className="test-text">Odd Semester Magazine</h4>
                </div>
              </div>
              <div
                className="col-lg-6 wow fadeIn"
                data-wow-delay="0.1s"
              >
                <div className="d-flex flex-column">
                  <a
                    href="https://pubhtml5.com/xtvgn/rsbh/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="img-fluid h-20"
                      src={magazineEven}
                      alt="Magazine Even"
                    />
                  </a>
                  <br />
                  <h4 className="test-text">Even Semester Magazine</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Magazine;

