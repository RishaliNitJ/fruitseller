import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import fruits from "../img/Fruits.png";
import "./Footer.css";
import { logoutRedux } from '../store/userSlice';
import { useDispatch, useSelector } from "react-redux";

function Header() {
  const [{ basket }] = useStateValue();
  const [isScrolled, setIsScrolled] = useState(false);
  const userData = useSelector((state) => state.users); // Change this line
  // console.log(userData);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getLinkClass = (...paths) => {
    return paths.includes(location.pathname) ? 'nav-item nav-link active' : 'nav-item nav-link';
  };


  //handle login logout
  const [ShowLoginOut, hideLoginOut] = useState(false);
  const handleLoginOut = () => {
    hideLoginOut((preve) => !preve);
  }
  const handleLogout = () => {
    dispatch(logoutRedux())
  }


  return (
    <div>
      <div className="container-fluid fixed-top">
        <div className={`container topbar bg-primary d-none d-lg-block ${isScrolled ? 'hidden' : ''}`}>
          <div className="d-flex justify-content-between">
            <div className="top-info ps-2">
              <small className="me-3">
                <i className="fas fa-map-marker-alt me-2 text-secondary"></i>
                <a href="#!" className="text-white">123 Street, New York</a>
              </small>
              <small className="me-3">
                <i className="fas fa-envelope me-2 text-secondary"></i>
                <a href="#!" className="text-white">Email@Example.com</a>
              </small>
            </div>
            <div className="top-link pe-2">
              <a href="#!" className="text-white"><small className="text-white mx-2">Privacy Policy</small>/</a>
              <a href="#!" className="text-white"><small className="text-white mx-2">Terms of Use</small>/</a>
              <a href="#!" className="text-white"><small className="text-white ms-2">Sales and Refunds</small></a>
            </div>
          </div>
        </div>
        <div className="container px-0">
          <nav className="navbar navbar-light bg-white navbar-expand-xl">
            <Link to="/" className="navbar-brand">
              <span><img src={fruits} className="heading-cont" alt="Fruits" /></span>
              <h1 className="text-primary display-6">Fruitables</h1>
            </Link>
            <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
              <span className="fa fa-bars text-primary"></span>
            </button>
            <div className="collapse navbar-collapse bg-white" id="navbarCollapse">
              <div className="navbar-nav mx-auto">
                <Link to="/" className={getLinkClass('/')}>Home</Link>
                <Link to="/shop" className={getLinkClass('/shop')}>Shop</Link>
                <Link to="/shopdetails" className={getLinkClass('/shopdetails')}>Shop Detail</Link>
                <div className="nav-item dropdown">
                  <a href="#!" className={getLinkClass('/cart', '/checkout', '/testimonial')} data-bs-toggle="dropdown">Pages</a>
                  <div className="dropdown-menu m-0 bg-secondary rounded-0">
                    <Link to="/cart" className="dropdown-item">Cart</Link>
                    <Link to="/checkout" className="dropdown-item">Checkout</Link>
                    <Link to="/testimonial" className="dropdown-item">Testimonial</Link>
                  </div>
                </div>
                <Link to="/contact-us" className={getLinkClass('/contact-us')}>Contact</Link>
              </div>
              <div className="d-flex m-3 me-0 align-items-center">
                <button className="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4" data-bs-toggle="modal" data-bs-target="#searchModal">
                  <i className="fas fa-search text-primary"></i>
                </button>
                <Link to="/cart" className="position-relative me-4 my-auto">
                  <i className="fa fa-shopping-bag fa-2x"></i>
                  <span className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1" style={{ top: '-5px', left: '15px', height: '20px', minWidth: '20px' }}>{basket?.length}</span>
                </Link>



                <div className="nav-item dropdown">
                  <a href="#!" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="fas fa-user fa-2x"></i></a>
                  {userData.name ?
                    <>

                      <div className="dropdown-menu m-0 bg-secondary rounded-0">
                        <Link to="/all-orders" className="dropdown-item">All Orders</Link>
                        <Link to="/all-users" className="dropdown-item">All Users</Link>
                        <Link to="/messages" className="dropdown-item">Messages</Link>
                        <Link to="/" className="dropdown-item" onClick={handleLogout}>Log Out</Link>
                      </div>
                    </>


                    :

                    <>
                      <div className="dropdown-menu m-0 bg-secondary rounded-0">
                        <Link to="/Login" className="dropdown-item">Log In</Link>
                        {/* <Link to="/signup" className="dropdown-item">Sign Up</Link> */}
                      </div>
                    </>
                  }
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
