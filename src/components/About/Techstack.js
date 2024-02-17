import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { FaAws } from "react-icons/fa";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  DiJava,
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiLinux,
  DiMysql
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiGnubash,
} from "react-icons/si";
import { TbBrandTerraform } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGnubash />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandTerraform />
      </Col>
    </Row>
  );
}

export default Techstack;
