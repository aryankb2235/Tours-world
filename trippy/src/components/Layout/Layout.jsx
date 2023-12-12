import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Router from '../../router/Router';

const Layout = () => {
  const location = useLocation();

  // Check if the current pathname matches the specific routes where you want to render the Header
  const showHeader = ['/home', '/about', '/tours','/adminHome'].includes(location.pathname);
const showFooter= ['/home', '/about', '/tours','/adminHome'].includes(location.pathname);
  return (
    <div>
      {/* Conditionally render the Header component based on specific routes */}
      {showHeader && <Header />}
      
      {/* Always render the Router */}
      <Router />

      {/* Always render the Footer component */}
     {showFooter &&  <Footer />}
    </div>
  );
};

export default Layout;
