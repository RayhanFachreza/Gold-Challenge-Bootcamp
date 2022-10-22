import React from "react";
import Service from "./assets/content-img.png";
import "./style.css";

const OurServices = () => {
  return (
    <section className="ourservices" id="ourservices">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 service-kiri">
            <img src={Service} alt="" />
          </div>
          <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 service-kanan">
            <div className="service-text">
              <h2>Best Car Rental for any kind of trip in (Lokasimu)!</h2>
              <p>
                Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
                lebih murah dibandingkan yang lain, kondisi mobil baru, serta
                kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
                wedding, meeting, dll.
              </p>
              <div className="listtext">
                <ul>
                  <li>Sewa Mobil Dengan Supir di Bali 12 Jam</li>
                  <li>Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
                  <li>Sewa Mobil Jangka Panjang Bulanan</li>
                  <li>Gratis Antar - Jemput Mobil di Bandara</li>
                  <li>Layanan Airport Transfer / Drop In Out</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
