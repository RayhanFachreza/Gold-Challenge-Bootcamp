import React from "react";
import "./style.css";
import Testi1 from "./assets/testi1.png";
import Testi2 from "./assets/testi2.png";
import Bintang from "./assets/bintang.png";
// import Left from "./assets/Left button.svg";
// import Right from "./assets/Right button.svg";
// import React, { Component } from "react";
import Slider from "react-slick";

const Testimonials = () => {
 
  const settings = {
    dots: false,
    infinite: true,
    centerMode: true,
    centerPadding: "350px",
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 2000,  
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrow:true,
    // nextArrow: <img src={Right} alt="" title="Next" />,
    nextArrow: <div className="arrowkiri"/>,
    prevArrow: <div className="arrowkanan"/>,
    // prevArrow: <img src={Left} alt="" title="Previous" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "180px",
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          centerPadding: "100px",
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "10px",
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  

  return (
    <section className="testimonial" id="testimonials">
      <div className="container">
        <div className="col text-center testi">
          <h2>Testimonial</h2>
          <p>Berbagai review positif dari para pelanggan kami</p>
        </div>
      </div>
      {/*  */}

      <div className="carousel">
        <Slider {...settings}>
          <div className="box-testimonial">
            <div className="row">
              <div className="col-lg-3 boxgambar">
                <div className="gambar-testi">
                  <img src={Testi1} alt="" />
                </div>
              </div>
              <div className="col-lg-9 boxtext">
                <div className="bintang">
                  <img src={Bintang} alt="" />
                </div>
                <h4>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod”
                </h4>
                <h3>John Dee 32, Bromo</h3>
              </div>
            </div>
          </div>
          <div className="box-testimonial">
            <div className="row">
              <div className="col-lg-3 boxgambar">
                <div className="gambar-testi">
                  <img src={Testi2} alt="" />
                </div>
              </div>
              <div className="col-lg-9 boxtext">
                <div className="bintang">
                  <img src={Bintang} alt="" />
                </div>
                <h4>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod”
                </h4>
                <h3>John Dee 32, Bromo</h3>
              </div>
            </div>
          </div>
          <div className="box-testimonial">
            <div className="row boxflex">
              <div className="col-lg-3 boxgambar">
                <div className="gambar-testi">
                  <img src={Testi1} alt="" />
                </div>
              </div>
              <div className="col-lg-9 boxtext">
                <div className="bintang">
                  <img src={Bintang} alt="" />
                </div>
                <h4>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod”
                </h4>
                <h3>John Dee 32, Bromo</h3>
              </div>
            </div>
          </div>
          <div className="box-testimonial">
            <div className="row">
              <div className="col-lg-3 boxgambar">
                <div className="gambar-testi">
                  <img src={Testi2} alt="" />
                </div>
              </div>
              <div className="col-lg-9 boxtext">
                <div className="bintang">
                  <img src={Bintang} alt="" />
                </div>
                <h4>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod”
                </h4>
                <h3>John Dee 32, Bromo</h3>
              </div>
            </div>
          </div>
        </Slider>
        <div className="button-slider"></div>
      </div>
    </section>
  );
};

export default Testimonials;

