import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/Login.css'
import registerImg from '../assets/images/register.png'
import userIcon from '../assets/images/user.png'
import axios from "axios";
const Register = () => {
  const [credentials ,setCredentials] = useState({
    username: "",
    email: "",
    password: "",

  });
console.log("details",credentials)
const navigate=useNavigate()
  const handleChange = e => {
    setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleClick = (e) => {
    e.preventDefault();
  
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' // Set the content type if needed
      },
      body: JSON.stringify(credentials)
    };
  
    fetch('http://localhost:4000/users/signup', config)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      console.log('data', data);
      if (data.user.email) {
        alert("signup successfull")
        navigate("/login");
      } else {
       alert("please provide correct details")
      }
    })
    .catch((error) => {
      console.error('There was a problem with the fetch operation:', error);
    });
  
  };
  

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={registerImg} alt="" />
              </div>
              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt=""/>
                </div>
                <h2>Register</h2>
                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <FormGroup>
                      <input type="text" placeholder="username" required id="username" onChange={handleChange} />
                    </FormGroup>
                    <input type="email" placeholder="Email" required id="email" onChange={handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <input type="password" placeholder="Password" required id="password" onChange={handleChange} />
                  </FormGroup>
                  <Button className="btn secondary_btn auth_btn" type="submit">
                    create Account
                  </Button>
                  </Form>
                <p>Already have an account ? <Link to="/login">Login</Link></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

  );
};
export default Register;
