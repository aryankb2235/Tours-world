import React, { useState } from "react";
import "./booking.css";
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";



const Booking = ({ tour, avgRating }) => {
const userid=localStorage.getItem("USERID")
    console.log("dataplace",tour)
    const { price, reviews,title,city } = tour;
    const navigate = useNavigate()
    const [credentials, setCredentials] = useState({
        userId: "01",// later  it will be dynamic
        userEmail: "example@gmail.com",
        fullName: "",
        phone: "",
        guestSize: 1,
        bookAt: "",
    });

    const [bookItems,setBookItems]=useState({
        title:title,
        city:city,
        price:price,
        userid
    })

const handlebookTour=()=>{
    
    const config = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' // Set the content type if needed
        },
        body: JSON.stringify(bookItems)
      };
    fetch('http://localhost:4000/users/booktour', config)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    }).then((res)=>{
            console.log("res",res)
            if(res.city){
                alert("booking confirmed")
            }else{
                alert("some error occured")
            }
    })
}

    const handleChange = e => {
        setCredentials(prev => ({ ...prev, [e.target.id] : e.target.value }));
    };


    const serviceFee = 10
    const totalAmount = Number(price) * Number(credentials.guestSize) + Number(serviceFee)
   
   
    // send data  to the  server
    const handleClick = e => {
        e.preventDefault()
       
        navigate('/thank-you');
    };

    return <div className="booking">
        <div className="booking__top.d-flex align-items-center justify-content-between">
            <h3>Rs{price} <span> /per person</span></h3>
            <span className="tour_rating d-flex align-items-center ">
                <i class="ri-star-s-fill"> </i>
                {avgRating === 0 ? null : avgRating} ({reviews?.length})
            </span>
        </div>

        {/*=============booking form===========*/}
        <div className="booking__form">
            <h5> Information</h5>
            <Form className="booking__info-form" onSubmit={handleClick}>

                <FormGroup>
                    <input type="text" placeholder="FullName" id="full Name" required onChange={handleChange} />
                </FormGroup>

                <FormGroup>
                    <input type="number" placeholder="Phone " id="Phone" required onChange={handleChange} />
                </FormGroup>

                <FormGroup className="d-flex align-items-center gap-3" >

                    <input type="date"
                        placeholder=" "
                        id="bookAt"
                        required
                        onChange={handleChange} />


                    <input type="number"
                        placeholder="Guest"
                        id="guestSize"
                        required
                        onChange={handleChange} />
                </FormGroup>

            </Form>
        </div>
        {/*=============booking end ==========*/}

        {/*============booking bottom ========*/}

        <div className="booking__bottom">
            <ListGroup>
                <ListGroupItem className="border-0 px-0">
                    <h5 className="d-flex align-items-center gap-1">
                        Rs{price} <i class="ri-close-line"></i> 1 person
                    </h5>
                    <span> Rs{price} </span>
                </ListGroupItem>

                <ListGroupItem className="border-0 px-0">
                    <h5>Service charge</h5>
                    <span>Rs{serviceFee}</span>

                </ListGroupItem>

                <ListGroupItem className="border-0 px-0 total">
                    <h5>Total</h5>
                    <span> Rs{totalAmount}</span>
                </ListGroupItem>

            </ListGroup>
            <Button className="btn primary__btn w-100 mt-4" onClick={handleClick,handlebookTour}> Book Now</Button>
        </div>
    </div >
};

export default Booking;
