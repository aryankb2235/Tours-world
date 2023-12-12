import React from "react";
import "./Footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";


const Footer = () => {
  const year = new Date().getFullYear()
  const role=localStorage.getItem("ROLE")

  let quicks__links = [
    {
      path: "/home",
      display: "Home"
    },
    {
      path: "/about",
      display: "About"
    },
    {
      path: "/tours",
      display: "Tours"
    },
  
  ];
  let quicks__links2 = [
    {
      path: "/gallery",
      display: "Gallery",
    },
    {
      path: "/login",
      display: "Login",
    },
    {
      path: "/register",
      display: "Register",
    },
  
  ];

  if (role === 'admin') {

    quicks__links=null;

    quicks__links2 = null;

  }

 

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <div className="logo">
              <img src={logo} alt="" />
              <p>Travelling is a transformative journey </p>
              <div className="social__links d-flex align-items-center gap-4">
                <span><Link to="#"><i class="ri-youtube -line"></i></Link></span>
              </div>
              < div className="social _links d-flex align -items-center gap">
                <span><Link to="#"><i class="ri-github -line"></i></Link></span>
              </div>
              <div className="social _links d-flex align -items-center gap">
                <span><Link to="#"><i class="facebook-line"></i></Link></span>
              </div>
            </div>
            <div className="social _links d-flex align -items-center gap">
              <span><Link to="#"><i class="instagram-line"></i></Link></span>
            </div>

          </Col>
          <Col lg="3">
          {role === 'user' && (
  <h5 className="footer__link-title">Discover</h5>
)}
            <ListGroup className="footer__quick_links">
              {    quicks__links && quicks__links.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>


          <Col lg="3">
         { role==="user " && ( <h5 className="footer__link-title">Quick links</h5>)}  
            <ListGroup className="footer__quick_links">
              { quicks__links2 && quicks__links2.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3">

            <h5 className="footer__link-title">Contact </h5>
            <ListGroup className="footer__quick_links">
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2" >
                  <span><i class="ri-map-pin-line"></i></span>
                  Address:
                </h6>
                <p className="mb-0">sylhet ,bangladesh</p>
              </ListGroupItem>



              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2" >
                  <span>
                    <i class="ri-mail-line"></i>
                  </span>
                  Email:
                </h6>
                <p className="mb-0">loki@gmail.com</p>
              </ListGroupItem>



              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-3">
                  <span><i class="ri-phone-fill"></i></span>
                  Phone:
                </h6>
                <p className="mb-0">+0123456789</p>
              </ListGroupItem>
            </ListGroup>


          </Col>

          <Col lg="12" className="text-center pt-5">
            <p className="copyright">COPYRIGHT {year},design and develop by ali mazin ,All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;

