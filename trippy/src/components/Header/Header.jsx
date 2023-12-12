// import React from "react"; 
// import { Container, Row, Button, NavItem} from 'reactstrap' 
// import {NavLink, Link} from 'react-router-dom';

// import logo from "../../assets/images/logo.png";
// import './header.css';
// import { useEffect, useRef } from 'react';
// const nav__links=[
// {
//   path: '/home',  
//   display: 'Home'
// },
// {
// path: '/about',
// display:'About',
// },
// {
// path: '/tours', 
// display: 'Tours',
// },
// ];
// const Header = () => {
// const headerRef = useRef(null);

// const stickyHeaderFunc = ()=> {
//   window.addEventListener('scroll', ()=>{
//   if( document . body. scrollTop >80 || document.documentElement.scrollTop >80){
//    headerRef.current.classList.add('sticky__header')
//   }else{
//   headerRef.current.classList.remove('sticky__header')
//   }
// })
// }

// useEffect(()=>{
//   stickyHeaderFunc()
//   return window.removeEventListener('scroll', stickyHeaderFunc)
// })


// return (
// <header className="header" ref={headerRef} >


import React, { useEffect, useRef } from "react";
import { Container, Row, Button } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import logo from "../../assets/images/logo.png";
import './header.css';





const Header = () => {


  const role=localStorage.getItem("ROLE")

 
  let nav__links = [
    {
      path: '/home',
      display: 'Home'
    },
    {
      path: '/about',
      display: 'About'
    },
    {
      path: '/tours',
      display: 'Tours',
    },
  ];

  if (role === 'admin') {
    nav__links = null;
  
  }


  const headerRef = useRef(null);

  useEffect(() => {
    const stickyHeaderFunc = () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky__header');
      } else {
        headerRef.current.classList.remove('sticky__header');
      }
    };

    window.addEventListener('scroll', stickyHeaderFunc);

    return () => {
      window.removeEventListener('scroll', stickyHeaderFunc);
    };
  }, []);

const sessionClear=()=>{
  localStorage.clear()
}

  return (

    <header className="header" ref={headerRef}>
<Container>
  <Row>
    <div className="nav__wrapper d-flex align-items-center justify-content-between">
      <div className="logo">
      <img  alt="img" src={logo}/>
    </div>

      <div className="navigation">
      <ul className="menu d-flex align-items-center gap-5">
          {
     nav__links &&     nav__links.map((item,index) => (
            <li className="nav__item" key={index}>
              <NavLink 
              to ={item.path} 
              className = {navClass =>
                navClass.isActive ? "active__link" : "" 
              }
              >
                {item.display} 
                </NavLink>
           </li>
          ))}
           </ul> 
    </div>

    <div className="nav__right d-flex align-items-center gap-4 ">
      <div className="nav__btns d-flex align-items-center gap-4 ">
        {/* <Button className="btn secondery__btn" >
          <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>login</Link>
        </Button> */}
        <Button className="btn primary__btn">
          <Link to="/login" style={{ color: 'white', textDecoration: 'none' }} onClick={sessionClear}>Logout</Link>
        </Button>
         </div>
        <span className="mobile__menu">
        <i class="ri-menu-line"></i>
          </span>
          </div>
          </div>
  </Row>
</Container>
</header>
);
};
export default Header;