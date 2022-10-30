import React, { useState } from "react";
import "./style.css";
import Logo from "../../assets/img/logo.svg";
import Burger from "../../assets/img/burgermenu.svg";
import Bcr from "./assets/BCR.svg";
import Close from "./assets/Close.svg";
// import { Link } from "react-router-dom";

const Header = () => {
  const [sideVisible, setSideVisible] = useState(false);

  return (
    <header className="head">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div className="logo">
              <a href="/">
                <img src={Logo} alt="" />
              </a>
            </div>
            {
            <div className="burger">
            <a href="/">
              <img src={Logo} alt="" />
            </a>
            {window.location.pathname === "/" && <img onClick={() => setSideVisible(true)} src={Burger} alt="" />}
            </div>
            }
          </div>
          <div
            onClick={() => setSideVisible(false)}
            className={`overlay-bg ${sideVisible ? "menu-active" : ""}`}
          ></div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 kanan">
          {window.location.pathname === "/" &&
          
            <div className={`sidebar ${sideVisible ? "menu-active" : ""}`}>
              <div className="top-sidebar">
                <a href="/">
                <img src={Bcr} alt="" />
                </a>
                <img onClick={() => setSideVisible(false)} src={Close} alt="" />
              </div>
              <ul className="menu">
                <li>
                  <a href="#ourservices">Our Services</a>
                </li>
                <li>
                  <a href="#whyus ">Why Us</a>
                </li>
                <li>
                  <a href="#testimonials">Testimonials</a>
                </li>
                <li>
                  <a href="#faq">FAQ</a>
                </li>
              </ul>
            </div>

          }
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
