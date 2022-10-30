import React from "react";
import "./style.css";
import Fb from "./assets/icon_facebook.svg";
import Ig from "./assets/icon_instagram.svg";
import Twitter from "./assets/icon_twitter.svg";
import Mail from "./assets/icon_mail.svg";
import Twitch from "./assets/icon_twitch.svg";
import Logo from "../../assets/img/logo.svg";

function Footer() {
  return (
    <footer className="footer">
      <section>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-3 col-lg-3">
              <div className="kontak">
                <h3> Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</h3>
                <h3><a href="mailto:binarcarrental@gmail.com">binarcarrental@gmail.com</a></h3>
                <h3> <a href="tel:+6281233334808">081-233-334-808</a> </h3>
              </div>
            </div>
            <div className="col-sm-12 col-md-2 col-lg-2">
              <div className="penawaran">
                <ul>
                  <li><a href="/#ourservices">Our services</a></li>
                  <li><a href="/#whyus">Why Us</a></li>
                  <li><a href="/#testimonials">Testimonials</a></li>
                  <li><a href="/#faq">FAQ</a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
              <h3>Connect with us</h3>
              <div className="sosmed">
                <ul>
                  <li>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      <img src={Fb} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      <img src={Ig} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      <img src={Twitter} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      <img src={Mail} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      <img src={Twitch} alt="" />
                    </a>
                  </li>
                  <li></li>
                </ul>
              </div>
            </div>

            <div className="col-sm-12 col-md-3 col-lg-3">
              <div className="copyright">
                <h3>Copyright Binar 2022</h3>
                <div className="binar2022">
                  <a href="/" >
                    <img src={Logo} alt="Bcr" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
