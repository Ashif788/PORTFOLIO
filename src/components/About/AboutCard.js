import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ashif  M I </span>
            from <span className="purple">Kodagu, Karnataka , India</span>
            <br />
            I am currently employed as System Admin at Tata Electronic System Solution.
            <br />
            I have completed Diploma  in Computer Science in the year 2024
        
            <br />
            <br />
            Apart from coding & System Admin, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games Pubg
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ashif M I</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
