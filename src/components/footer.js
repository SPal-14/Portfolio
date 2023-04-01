import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./mailchimpForm";
import logo from "../assets/img/3.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/github (2).png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/souvik-pal-7abbb7234/"><img src={navIcon1} alt="" /></a>
                <a href="https://www.facebook.com/souvik.pal.75098364"><img src={navIcon2} alt="" /></a>
                <a href="https://github.com/SPal-14"><img src={navIcon3} alt="" /></a>
            </div>
            <p>Roar. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
