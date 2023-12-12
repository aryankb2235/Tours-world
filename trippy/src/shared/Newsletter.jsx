import React from 'react'
import './newsletter.css'
import{Container,Row,Col} from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'

const Newsletter = () => {
  return (
  <section className="newsletter">
    <Container>
        <Row>
            <Col lg='6'>
            <div className="newsletter__content">
            <h2> Subscribe now to get useful travelling information</h2>
            <div className="newsletter__input">
            <input type="email" placeholder='enter  your email'/>
            <button className="btn newsletter__btn">subscribe</button>
            </div>          
           <p> <br></br> Embark on unforgettable journeys with our curated tours and travel experiences, discovering new horizons and creating lasting memories every step of the way. <br></br> 
            </p>
            </div>
            </Col>
            <Col lg='6'>
                <div className="newsletter__img">
                    <img src={ maleTourist }   alt=""/>
                </div>
            </Col>
        </Row>
    </Container>
  </section>
  );
};
export default Newsletter
