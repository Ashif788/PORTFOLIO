import React from "react";
import { Col, Row } from "react-bootstrap";
import {
 
  SiPostman,
  SiVercel,
  SiMacos,
} from "react-icons/si";
import { FaWindows } from "react-icons/fa6";
import { FcLinux } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
       <FaWindows/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
         <FcLinux/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
         <FaGithub/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiPostman /> 
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <VscVscode/>
      </Col>
    </Row>
  );
}

export default Toolstack;
