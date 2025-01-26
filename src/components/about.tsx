import React from "react";
import Member11 from "./img/core/aadarsh pandey.webp";
import Member7 from "./img/core/Adarsh Kesharwani - Technical Lead.webp";
import Member8 from "./img/core/aniket patil.webp";
import Member4 from "./img/core/Atharv pimple.webp";
import Member3 from "./img/core/Ayush Pandey- Secretary_.webp";
import Member12 from "./img/core/harsh pal.webp";
import Member2 from "./img/core/Mehwash shaikh- Vice President .webp";
import Member9 from "./img/core/poornima.webp";
import Member10 from "./img/core/shivangi.webp";
import Member5 from "./img/core/sneha pandey.webp";
import Member6 from "./img/core/Sumeet Shah - Discipline Head.webp";
import Member1 from "./img/core/Vighnesh_Mishra_President.webp";

import Member15 from "./img/core/Adarsh Tiwari-Joint Event Manager.webp";
import Member13 from "./img/core/preyanksha.webp";
import Member16 from "./img/core/tanishq.webp";
import Member17 from "./img/core/Vedant Anand- Joint Secretary_.webp";
import Member14 from "./img/core/Vignesh Alle - Joint technical head.webp";

import Member24 from "./img/core/Janhavi Nautiyal- Publication Associate.webp";
import Member20 from "./img/core/jayesh.webp";
import Member19 from "./img/core/Khushi Chandel - Secretary Associate .webp";
import Member22 from "./img/core/Mahek Jain - Marketing Associate_.webp";
import Member18 from "./img/core/nandika.webp";
import Member25 from "./img/core/SAPTARSHI MAITI- PUBLICATION ASSOCIATE.webp";
import Member21 from "./img/core/Sneha Kanojiya- Marketting Associate.webp";
import Member23 from "./img/core/Suhani Singh- Publication Associate_.webp";
import Member26 from "./img/core/Tanushree Tiwari - creative associate .webp";

import Member27 from "./img/core/shivani.webp";
import Member28 from "./img/core/Priyanshi Jain- Literary associate.webp";
import Member29 from "./img/core/anurag.webp";

import AboutsecImg from "./img/pd.webp";
// Create About component
const About: React.FC = () => {
    return (
    <div>
        <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px", marginTop: "50px" }}
        >
            <h1 className="text-uppercase">ABOUT SORT</h1>
        </div>

      {/* About Section */}
        <section id="about">
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
              {/* Left Column */}
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className="d-flex flex-column">
                                <img
                                    className="img-fluid w-75 align-self-end"
                                    src= {AboutsecImg}
                                    alt="Personality Development"
                                />
                                <div
                                    className="w-50 bg-secondary p-5"
                                    style={{ marginTop: "-25%" }}
                                >
                                    <h1 className="text-uppercase text-primary mb-3">PERSONALITY</h1>
                                    <h2 className="text-uppercase mb-0">development</h2>
                                </div>
                            </div>
                        </div>

                {/* Right Column */}
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <h1 className="text-uppercase mb-4">
                            WE ARE MORE THAN JUST A CLUB. Learn More About Us!
                            </h1>
                            <p>
                            We conduct skill enhancement activities, debate competitions, lifestyle workshops and
                            literary events with a pinch of fun! SORT helps you to develop a spiritual connection with
                            yourself and become an individual with a strong personality. We are here to help you become
                            a better version of yourself, physically and mentally.
                            </p>
                            <br />
                {/* Mission and Vision */}
                            <div className="row g-4">
                                <div className="col-md-6">
                                    <h3 className="text-uppercase mb-3">OUR MISSION</h3>
                                    <p className="mb-0">
                                    S.O.R.T. envisions to be a platform that helps the students to work on themselves in
                                    order to be physically, mentally, emotionally fit and also to rediscover themselves as
                                    a spiritual, skillful and happy individuals.
                                    </p>
                                </div>
                                <div className="col-md-6">
                                    <h3 className="text-uppercase mb-3">OUR VISION</h3>
                                    <p className="mb-0">
                                    Youth Empowerment and Skill-building program to incubate professional skills,
                                    entrepreneurship and self-reliance by means of seminar, workshop, activities and events.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      {/* End About Section */}

      {/* Team Section */}
        <section id="team">
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
                    <p className="d-inline-block bg-secondary text-primary py-1 px-4">Our Team</p>
                    <h1 className="text-uppercase">Meet Our Family</h1>
                    </div>

                    <div className="row g-4">
              {/* Team Member */}
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item">
                                <div className="team-img position-relative overflow-hidden">
                                    <img
                                    className="img-fluid"
                                    src={Member1}
                                    alt="Vighnesh Mishra - President"
                                    />
                                    <div className="team-social">
                                        <a
                                            className="btn btn-square"
                                            href="https://www.instagram.com/vighnesh_m95_"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="bg-secondary text-center p-4">
                                    <h5 className="text-uppercase">Vighnesh Mishra</h5>
                                    <span className="text-primary">President</span>
                                </div>
                            </div>
                        </div>
              {/* Add more team members here following the same structure */}
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="team-item">
                                <div className="team-img position-relative overflow-hidden">
                                <img
                                    className="img-fluid"
                                    src={Member2}
                                    alt="Mehwash Shaikh - Vice President"
                                />
                                <div className="team-social">
                                    <a
                                    className="btn btn-square"
                                    href="https://www.instagram.com/_cassiopeia_01"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >
                                    <i className="fab fa-instagram"></i>
                                    </a>
                                    {/* Uncomment and add LinkedIn if needed */}
                                    {/* <a
                                    className="btn btn-square"
                                    href="https://www.linkedin.com/in/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >
                                    <i className="fab fa-linkedin-in"></i>
                                    </a> */}
                                </div>
                                </div>
                                <div className="bg-secondary text-center p-4">
                                <h5 className="text-uppercase">Mehwash Shaikh</h5>
                                <span className="text-primary">Vice President</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="team-item">
                                <div className="team-img position-relative overflow-hidden">
                                <img
                                    className="img-fluid"
                                    src={Member3}
                                    alt="Ayush Pandey - Secretary"
                                />
                                    <div className="team-social">
                                        <a
                                        className="btn btn-square"
                                        href="https://www.instagram.com/_ayushpandeyy_"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                        <i className="fab fa-instagram"></i>
                                        </a>
                                        {/* Uncomment and add LinkedIn if needed */}
                                        {/* <a
                                        className="btn btn-square"
                                        href="https://www.linkedin.com/in/anant-singh-6349a5219"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                        <i className="fab fa-linkedin-in"></i>
                                        </a> */}
                                    </div>
                                </div>
                                <div className="bg-secondary text-center p-4">
                                <h5 className="text-uppercase">Ayush Pandey</h5>
                                <span className="text-primary">Secretary</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="team-item">
                                <div className="team-img position-relative overflow-hidden">
                                    <img
                                        className="img-fluid"
                                        src={Member4}
                                        alt="Atharva Pimple - Treasurer"
                                    />
                                    <div className="team-social">
                                        <a
                                        className="btn btn-square"
                                        href="https://www.instagram.com/atharva_pimple_24"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                        <i className="fab fa-instagram"></i>
                                        </a>
                                        {/* Uncomment and add LinkedIn if needed */}
                                        {/* <a
                                        className="btn btn-square"
                                        href="https://www.linkedin.com/in/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                        <i className="fab fa-linkedin-in"></i>
                                        </a> */}
                                    </div>
                                </div>
                                <div className="bg-secondary text-center p-4">
                                    <h5 className="text-uppercase">Atharva Pimple</h5>
                                    <span className="text-primary">Treasurer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-4">
                    {/* Team Member 1 */}
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item">
                                <div className="team-img position-relative overflow-hidden">
                                <img
                                className="img-fluid"
                                src={Member5}
                                alt="Sneha Pandey - Event Manager"
                                />
                                    <div className="team-social">
                                    <a
                                        className="btn btn-square"
                                        href="https://www.instagram.com/snehapandey_01"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    {/* Uncomment and add LinkedIn if needed */}
                                    {/* <a
                                        className="btn btn-square"
                                        href="https://www.linkedin.com/public-profile/settings?trk=public-profile"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fab fa-linkedin-in"></i>
                                    </a> */}
                                    </div>
                                </div>
                                <div className="bg-secondary text-center p-4">
                                    <h5 className="text-uppercase">Sneha Pandey</h5>
                                    <span className="text-primary">Event Manager</span>
                                </div>
                            </div>
                        </div>

                        {/* Team Member 2 */}
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="team-item">
                                <div className="team-img position-relative overflow-hidden">
                                    <img
                                    className="img-fluid"
                                    src={Member6}
                                    alt="Sumeet Shah - Discipline Head"
                                    />
                                    <div className="team-social">
                                    <a
                                        className="btn btn-square"
                                        href="https://www.instagram.com/_crazzeee_shah_"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                                <div className="bg-secondary text-center p-4">
                                    <h5 className="text-uppercase">Sumeet Shah</h5>
                                    <span className="text-primary">Discipline Head</span>
                                </div>
                            </div>
                        </div>

                        {/* Team Member 3 */}
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="team-item">
                                <div className="team-img position-relative overflow-hidden">
                                    <img
                                    className="img-fluid"
                                    src={Member7}
                                    alt="Adarsh Kesharwani - Technical Lead"
                                    />
                                    <div className="team-social">
                                    <a
                                        className="btn btn-square"
                                        href="https://www.instagram.com/adarshh.me"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    </div>
                                </div>
                                <div className="bg-secondary text-center p-4">
                                    <h5 className="text-uppercase">Adarsh Kesharwani</h5>
                                    <span className="text-primary">Technical Lead</span>
                                </div>
                            </div>
                        </div>

                        {/* Team Member 4 */}
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="team-item">
                                <div className="team-img position-relative overflow-hidden">
                                    <img
                                    className="img-fluid"
                                    src={Member8}
                                    alt="Aniket Patil - Marketing Head"
                                    />
                                        <div className="team-social">
                                        <a
                                            className="btn btn-square"
                                            href="https://www.instagram.com/Adp_88888"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                        </div>
                                </div>
                                    <div className="bg-secondary text-center p-4">
                                        <h5 className="text-uppercase">Aniket Patil</h5>
                                        <span className="text-primary">Marketing Head</span>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-4">
                    {/* Team Member 1 */}
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="team-item">
                        <div className="team-img position-relative overflow-hidden">
                            <img
                            className="img-fluid"
                            src={Member9}
                            alt="Poornima Kalekar - Publication Head"
                            />
                            <div className="team-social">
                            <a
                                className="btn btn-square"
                                href="https://www.instagram.com/puurnimaa22"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                            </div>
                        </div>
                        <div className="bg-secondary text-center p-4">
                            <h5 className="text-uppercase">Poornima Kalekar</h5>
                            <span className="text-primary">Publication Head</span>
                        </div>
                        </div>
                    </div>

                    {/* Team Member 2 */}
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="team-item">
                        <div className="team-img position-relative overflow-hidden">
                            <img
                            className="img-fluid"
                            src={Member10}
                            alt="Shivangi Chouhan - Literary Head"
                            />
                            <div className="team-social">
                            <a
                                className="btn btn-square"
                                href="https://www.instagram.com/shivangiiiii_05"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                            </div>
                        </div>
                        <div className="bg-secondary text-center p-4">
                            <h5 className="text-uppercase">Shivangi Chouhan</h5>
                            <span className="text-primary">Literary Head</span>
                        </div>
                        </div>
                    </div>

                    {/* Team Member 3 */}
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="team-item">
                        <div className="team-img position-relative overflow-hidden">
                            <img
                            className="img-fluid"
                            src={Member11}
                            alt="Aadarsh Pandey - Creative Head"
                            />
                            <div className="team-social">
                            <a
                                className="btn btn-square"
                                href="https://www.instagram.com/aadarshp_77"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                            </div>
                        </div>
                        <div className="bg-secondary text-center p-4">
                            <h5 className="text-uppercase">Aadarsh Pandey</h5>
                            <span className="text-primary">Creative Head</span>
                        </div>
                        </div>
                    </div>

                    {/* Team Member 4 */}
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="team-item">
                        <div className="team-img position-relative overflow-hidden">
                            <img
                            className="img-fluid"
                            src={Member12}
                            alt="Harsh Pal - Joint Creative Head"
                            />
                            <div className="team-social">
                            <a
                                className="btn btn-square"
                                href="https://www.instagram.com/yaarrharshh"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                            </div>
                        </div>
                        <div className="bg-secondary text-center p-4">
                            <h5 className="text-uppercase">Harsh Pal</h5>
                            <span className="text-primary">Joint Creative Head</span>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-4">
                    {/* Team Member 1 */}
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="team-item">
                        <div className="team-img position-relative overflow-hidden">
                            <img
                            className="img-fluid"
                            src={Member13}
                            alt="Preyanksha Singh - Joint Publication Head"
                            />
                            <div className="team-social">
                            <a
                                className="btn btn-square"
                                href="https://www.instagram.com/lanadel.prey"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                            </div>
                        </div>
                        <div className="bg-secondary text-center p-4">
                            <h5 className="text-uppercase">Preyanksha Singh</h5>
                            <span className="text-primary">Joint Publication Head</span>
                        </div>
                        </div>
                    </div>

                    {/* Team Member 2 */}
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="team-item">
                        <div className="team-img position-relative overflow-hidden">
                            <img
                            className="img-fluid"
                            src={Member14}
                            alt="Vignesh Alle - Joint Technical Lead"
                            />
                            <div className="team-social">
                            <a
                                className="btn btn-square"
                                href="https://www.instagram.com/vigneshalle__16"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                            </div>
                        </div>
                        <div className="bg-secondary text-center p-4">
                            <h5 className="text-uppercase">Vignesh Alle</h5>
                            <span className="text-primary">Joint Technical Lead</span>
                        </div>
                        </div>
                    </div>

                    {/* Team Member 3 */}
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="team-item">
                        <div className="team-img position-relative overflow-hidden">
                            <img
                            className="img-fluid"
                            src={Member16}
                            alt="Tanishq Satote - Joint Marketing Head"
                            />
                            <div className="team-social">
                            <a
                                className="btn btn-square"
                                href="https://www.instagram.com/tanishq.satote07"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                            </div>
                        </div>
                        <div className="bg-secondary text-center p-4">
                            <h5 className="text-uppercase">Tanishq Satote</h5>
                            <span className="text-primary">Joint Marketing Head</span>
                        </div>
                        </div>
                    </div>

                    {/* Team Member 4 */}
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="team-item">
                        <div className="team-img position-relative overflow-hidden">
                            <img
                            className="img-fluid"
                            src={Member15}
                            alt="Adarsh Tiwari - Joint Event Manager"
                            />
                            <div className="team-social">
                            <a
                                className="btn btn-square"
                                href="https://www.instagram.com/adarshhtiwarii"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                            </div>
                        </div>
                        <div className="bg-secondary text-center p-4">
                            <h5 className="text-uppercase">Adarsh Tiwari</h5>
                            <span className="text-primary">Joint Event Manager</span>
                        </div>
                        </div>
                    </div>

                    </div>
                </div>
            </div>


            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-4">
                    {/* Team Member 1 */}
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="team-item">
                        <div className="team-img position-relative overflow-hidden">
                            <img
                            className="img-fluid"
                            src={Member17}
                            alt="Vedant Anand - Joint Secretary"
                            />
                            <div className="team-social">
                            <a
                                className="btn btn-square"
                                href="https://www.instagram.com/vedant_anand"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                            </div>
                        </div>
                        <div className="bg-secondary text-center p-4">
                            <h5 className="text-uppercase">Vedant Anand</h5>
                            <span className="text-primary">Joint Secretary</span>
                        </div>
                        </div>
                    </div>

                    {/* Team Member 2 */}
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="team-item">
                        <div className="team-img position-relative overflow-hidden">
                            <img
                            className="img-fluid"
                            src={Member28}
                            alt="Priyanshi Jain"
                            />
                            <div className="team-social">
                            <a
                                className="btn btn-square"
                                href="https://www.instagram.com/priyanshi4571"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                            </div>
                        </div>
                        <div className="bg-secondary text-center p-4">
                            <h5 className="text-uppercase">Priyanshi Jain</h5>
                            <span className="text-primary">Joint Literary Head</span>
                        </div>
                        </div>
                    </div>


                    {/* Team Member 3 */}
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="team-item">
                        <div className="team-img position-relative overflow-hidden">
                            <img
                            className="img-fluid"
                            src={Member19}
                            alt="Khushi Chandel - Associate"
                            />
                            <div className="team-social">
                            <a
                                className="btn btn-square"
                                href="https://www.instagram.com/_khushichandel_"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                            </div>
                        </div>
                        <div className="bg-secondary text-center p-4">
                            <h5 className="text-uppercase">Khushi Chandel</h5>
                            <span className="text-primary">Associate</span>
                        </div>
                        </div>
                    </div>

                    {/* Team Member 4 */}
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="team-item">
                        <div className="team-img position-relative overflow-hidden">
                            <img
                            className="img-fluid"
                            src={Member20}
                            alt="Jayesh Dhore - Associate"
                            />
                            <div className="team-social">
                            <a
                                className="btn btn-square"
                                href="https://www.instagram.com/dhore_jayesh"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                            </div>
                        </div>
                        <div className="bg-secondary text-center p-4">
                            <h5 className="text-uppercase">Jayesh Dhore</h5>
                            <span className="text-primary">Associate</span>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>


            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-4">
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="team-item">
                        <div className="team-img position-relative overflow-hidden">
                            <img
                            className="img-fluid"
                            src={Member26}
                            alt="Tanushree Tiwari"
                            />
                            <div className="team-social">
                            <a
                                className="btn btn-square"
                                href="https://www.instagram.com/x0xree._"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                            </div>
                        </div>
                        <div className="bg-secondary text-center p-4">
                            <h5 className="text-uppercase">Tanushree Tiwari</h5>
                            <span className="text-primary">Associate</span>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="team-item">
                        <div className="team-img position-relative overflow-hidden">
                            <img
                            className="img-fluid"
                            src={Member27}
                            alt="Shivani Pathak"
                            />
                            <div className="team-social">
                            <a
                                className="btn btn-square"
                                href="https://www.instagram.com/shivanipathak7496"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                            </div>
                        </div>
                        <div className="bg-secondary text-center p-4">
                            <h5 className="text-uppercase">Shivani Pathak</h5>
                            <span className="text-primary">Associate</span>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="team-item">
                        <div className="team-img position-relative overflow-hidden">
                            <img
                            className="img-fluid"
                            src={Member18}
                            alt="Nandika Bhardwaj - Associate"
                            />
                            <div className="team-social">
                            <a
                                className="btn btn-square"
                                href="https://www.instagram.com/nandika.bhardwajj"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                            </div>
                        </div>
                        <div className="bg-secondary text-center p-4">
                            <h5 className="text-uppercase">Nandika Bhardwaj</h5>
                            <span className="text-primary">Associate</span>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="team-item">
                        <div className="team-img position-relative overflow-hidden">
                            <img
                            className="img-fluid"
                            src={Member29}
                            alt="Anurag Gupta"
                            />
                            <div className="team-social">
                            <a
                                className="btn btn-square"
                                href="https://www.instagram.com/anurag.0904"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                            </div>
                        </div>
                        <div className="bg-secondary text-center p-4">
                            <h5 className="text-uppercase">Anurag Gupta</h5>
                            <span className="text-primary">Associate</span>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>



            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-4">
                    {/* Team Member 1 */}
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="team-item">
                        <div className="team-img position-relative overflow-hidden">
                            <img
                            className="img-fluid"
                            src={Member21}
                            alt="Sneha Kanojiya - Marketing Associate"
                            />
                            <div className="team-social">
                            <a
                                className="btn btn-square"
                                href="https://www.instagram.com/snehhaa_09"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                            </div>
                        </div>
                        <div className="bg-secondary text-center p-4">
                            <h5 className="text-uppercase">Sneha Kanojiya</h5>
                            <span className="text-primary">Associate</span>
                        </div>
                        </div>
                    </div>

                    {/* Team Member 2 */}
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="team-item">
                        <div className="team-img position-relative overflow-hidden">
                            <img
                            className="img-fluid"
                            src={Member22}
                            alt="Mahek Jain - Marketing Associate"
                            />
                            <div className="team-social">
                            <a
                                className="btn btn-square"
                                href="https://www.instagram.com/mahek_j_"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                            </div>
                        </div>
                        <div className="bg-secondary text-center p-4">
                            <h5 className="text-uppercase">Mahek Jain</h5>
                            <span className="text-primary">Associate</span>
                        </div>
                        </div>
                    </div>

                    {/* Team Member 3 */}
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="team-item">
                        <div className="team-img position-relative overflow-hidden">
                            <img
                            className="img-fluid"
                            src={Member23}
                            alt="Suhani Singh - Publication Associate"
                            />
                            <div className="team-social">
                            <a
                                className="btn btn-square"
                                href="https://www.instagram.com/_.suhaniiii__"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                            </div>
                        </div>
                        <div className="bg-secondary text-center p-4">
                            <h5 className="text-uppercase">Suhani Singh</h5>
                            <span className="text-primary">Associate</span>
                        </div>
                        </div>
                    </div>

                    {/* Team Member 4 */}
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="team-item">
                        <div className="team-img position-relative overflow-hidden">
                            <img
                            className="img-fluid"
                            src={Member24}
                            alt="Janhavi Nautiyal - Publication Associate"
                            />
                            <div className="team-social">
                            <a
                                className="btn btn-square"
                                href="https://www.instagram.com/_vivirizz"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                            </div>
                        </div>
                        <div className="bg-secondary text-center p-4">
                            <h5 className="text-uppercase">Janhavi Nautiyal</h5>
                            <span className="text-primary">Associate</span>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
                                                                                                                             
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-4">
                    {/* Team Member */}
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="team-item">
                        <div className="team-img position-relative overflow-hidden">
                            <img
                            className="img-fluid"
                            src= {Member25}
                            alt="Saptarshi Maiti - Publication Associate"
                            />
                            <div className="team-social">
                            <a
                                className="btn btn-square"
                                href="https://www.instagram.com/saptarshi__1004"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                            </div>
                        </div>
                        <div className="bg-secondary text-center p-4">
                            <h5 className="text-uppercase">Saptarshi Maiti</h5>
                            <span className="text-primary">Associate</span>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
      {/* End Team Section */}
    </div>
    );
};

export default About;
