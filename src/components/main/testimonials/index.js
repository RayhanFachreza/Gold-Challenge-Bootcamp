import React from "react";
import "./style.css";
import Testi1 from "./assets/testi1.png";
import Testi2 from "./assets/testi2.png";
import Bintang from "./assets/bintang.png";
// import React, { Component } from "react";
import Slider from "react-slick";

const Testimonials = () => {
  return (
    <section className="testimonial" id="testimonials">
      <div className="container">
        <div className="col text-center testi">
          <h2>Testimonial</h2>
          <p>Berbagai review positif dari para pelanggan kami</p>
        </div>
        {/*  */}
      </div>

      <div className="carousel">
        {/* <Slider {...settings}> */}
        <div className="box-testimonial">
          <div className="row">
            <div className="col-lg-3 boxgambar">
              <div className="gambar-testi">
                <img src={Testi1} alt="" />
              </div>
            </div>
            <div className="col-lg-9 boxtext">
              <div>
                <img src={Bintang} alt="" />
              </div>
              <h4>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod”
              </h4>
              <h3>John Dee 32, Bromo</h3>
            </div>
          </div>
        </div>
        {/* asda */}
        <div className="box-testimonial">
          <div className="row">
            <div className="col-lg-3 boxgambar">
              <div className="gambar-testi">
                <img src={Testi2} alt="" />
              </div>
            </div>
            <div className="col-lg-9 boxtext">
              <div>
                <img src={Bintang} alt="" />
              </div>
              <h4>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod”
              </h4>
              <h3>John Dee 32, Bromo</h3>
            </div>
          </div>
        </div>
        {/* sada */}
        <div className="box-testimonial">
          <div className="row boxflex">
            <div className="col-lg-3 boxgambar">
              <div className="gambar-testi">
                <img src={Testi1} alt="" />
              </div>
            </div>
            <div className="col-lg-9 boxtext">
              <div>
                <img src={Bintang} alt="" />
              </div>
              <h4>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod”
              </h4>
              <h3>John Dee 32, Bromo</h3>
            </div>
          </div>
        </div>
        {/* batas */}
        <div className="box-testimonial">
          <div className="row">
            <div className="col-lg-3 boxgambar">
              <div className="gambar-testi">
                <img src={Testi2} alt="" />
              </div>
            </div>
            <div className="col-lg-9 boxtext">
              <div>
                <img src={Bintang} alt="" />
              </div>
              <h4>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod”
              </h4>
              <h3>John Dee 32, Bromo</h3>
            </div>
          </div>
        </div>
        {/* </Slider> */}
      </div>
    </section>
  );
};

export default Testimonials;
