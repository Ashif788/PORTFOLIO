import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,

  DiJava,
} from "react-icons/di";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import { MdCss } from "react-icons/md";
import { FaFileWord ,FaFilePowerpoint} from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
    
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <MdCss/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TiHtml5/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <PiMicrosoftExcelLogoFill/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaFileWord/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaFilePowerpoint/>
      </Col>
  
    
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
    </Row>
  );
}

export default Techstack;
