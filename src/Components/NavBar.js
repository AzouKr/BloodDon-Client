import React from "react";
import "./NavBar.css";
import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
    
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/">
        <i style={{color: 'red'}} class="fa fa-heartbeat" aria-hidden="true"></i>
        </a>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav mr-auto mt-2 mt-md-0">
          <Link to="/"   style={{ textDecoration: 'none' }}>
            <li class="nav-item ">
              <a class="nav-link" href="#!">
                HOME <span class="sr-only"></span>
              </a>
            </li>
            </Link>
            <Link to="/AboutUs"   style={{ textDecoration: 'none' }}>
            <li class="nav-item">
              <a class="nav-link" href="#!">
                ABOUT US
              </a>
            </li>
            </Link>
            <Link to="/Terms"  style={{ textDecoration: 'none' }}>
            <li class="nav-item">
              <a class="nav-link" href="#!">
              TERMS
              </a>
            </li>
            </Link>
            <Link to="/Search"  style={{ textDecoration: 'none' }}>
            <li class="nav-item">
              <a class="nav-link" href="#!">
                SEARCH
              </a>
            </li>
            </Link>
            <Link to="/Donate"  style={{ textDecoration: 'none' }}>
            <li class="nav-item">
              <a class="nav-link" href="#!">
                DONATE
              </a>
            </li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
