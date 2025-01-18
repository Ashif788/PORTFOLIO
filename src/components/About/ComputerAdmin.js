import React from "react";
import { Col, Row } from "react-bootstrap";

  import { FaNetworkWired } from "react-icons/fa";
  import { MdInstallDesktop } from "react-icons/md";
 
  import { BsEthernet } from "react-icons/bs";
  import { RiAdminFill } from "react-icons/ri";
  import { FcDataConfiguration } from "react-icons/fc";

  

function ComputerAdmin() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <MdInstallDesktop/>
      </Col>
    
      <Col xs={4} md={2} className="tech-icons">
       <FaNetworkWired/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
       <BsEthernet/>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <RiAdminFill/>
      </Col>
     
      
      <Col xs={4} md={2} className="tech-icons">
        <FcDataConfiguration/>
      </Col>
    </Row>
  )
}

export default ComputerAdmin