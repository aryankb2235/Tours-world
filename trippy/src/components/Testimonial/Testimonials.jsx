import React from "react";
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'



const Testimonials = () => {
    const settings = {
        dots: true,
        Infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slideToShow: 3,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slideToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576, 
                settings: {
                    slideToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 902,
                settings: {
                    slideToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
        ]

    }
    return (
        <Slider {...settings}>
            <div className="testmonial py-4 px-3">
            <p> 
                loremg tour is very happy enjoyable moments in the world
            </p>            
              <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava01} className="w-25 h-25 rounded-2" alt="" /> 
           
                {/* <img src={ava01} className="rounded-2" alt="" style={{ width: '200px', height: '200px' }} /> */}
            <div>
                <h6 className="mb-0 mt-3 ">john doe </h6>
                <p>customer</p>
            </div>
            </div>
            </div>

           
            <div className="testmonial py-4 px-3">
            <p> 
                loremg tour is very happy enjoyable moments in the world
            </p>            
              <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
            <div>
                <h6 className="mb-0 mt-3 ">john doe </h6>
                <p>customer</p>
            </div>
            </div>
            </div>



            <div className="testmonial py-4 px-3">
            <p> 
                loremg tour is very happy enjoyable moments in the world
            </p>            
              <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
            <div>
                <h6 className="mb-0 mt-3 ">john doe </h6>
                <p>customer</p>
            </div>
            </div>
            </div>
                    </Slider>               
                );
};

                export default Testimonials;
