import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            {/* So hi dosto! I'm [Mohammed Shahbaz], a tech enthusiast with a knack for crafting seamless frontend experiences and diving into the world of cloud computing and DevOps.
🎓 Graduated with honors in Computer Science, specializing in building dynamic user interfaces and applications using:
 💻 HTML, CSS, JavaScript
 ⚛️ React.js, Bootstrap, Material UI, Rest API's
 🐍 Python
 🔃 Git and GitHub 

🌟 Throughout my academic journey, 
 -- I've driven initiatives like organizing a power-packed webinar on Frontend Development using 
 HTML, CSS, JavaScript, and React.js. 
 -- I led a dynamic team of two during the 5th semester for an impactful mini-project, honing my 
 collaborative skills.

🏆 Additionally, I orchestrated an engaging online coding quiz competition, offering recognition through certificates based on performance, fostering a vibrant coding community at our college.

🔍 Currently diving deeper into AWS & DevOps, merging my passion for development with cutting-edge cloud technologies. */}

Hi there! I'm <b className="purple"> [Mohammed Shahbaz]</b>, a tech enthusiast with a knack for crafting seamless frontend experiences and diving into the world of cloud computing and DevOps.
              <br />
              <br />Specializing in building dynamic user interfaces and applications using
              <i>
                <b className="purple"> HTML, CSS, JavaScript, React.js, Bootstrap, Material UI, Rest API's, Python, Git and GitHub  </b>
              </i>
              <br />
              <br />
              Currently diving deeper into &nbsp;
              <i>
                <b className="purple">AWS & DevOps,</b> merging my passion for development with cutting-edge{" "}
                <b className="purple">
                Cloud technologies.
                </b>
              </i>
              <br />
              <br />
              {/* Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i> */}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Mohammedshahbaz08"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/MShahbaz08"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mohammed-shahbaaz/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.tublian.com/profile/Mohammedshahbaz08"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
