import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mohammed Shahbaz </span>
            from <span className="purple"> Hyderabad, India.</span>
            <br />
            Currently diving deeper into  AWS & DevOps, merging my passion for development with cutting-edge Cloud technologies.
            <br />
            I have completed Integrated Bachelors of Engineering in computer Science & Engineering.
            <br />
            <br />
            Apart from Professional work, some other activities that I love to do!
          </p>
          <ul>
          <li className="about-activity">
              <ImPointRight /> Exploring AI Tools
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Shayaris....
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Shahbaz</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
