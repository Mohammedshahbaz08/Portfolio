import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiLinux, DiGit } from "react-icons/di";
// import { FaGit } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <DiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGithubSquare />
      </Col>
    </Row>
  );
}

export default Toolstack;
