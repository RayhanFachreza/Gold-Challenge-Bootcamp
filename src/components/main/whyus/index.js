import React from "react";
import "./style.css";
import why1 from "./assets/why1.svg";
import why2 from "./assets/why2.svg";
import why3 from "./assets/why3.svg";
import why4 from "./assets/why4.svg";

const Whyus = () => {
  return (
    <section className="whyus" id="whyus">
      <div className="container">
        <div className="row mengapa">
          <div className="col">
            <h2>Why Us?</h2>
            <p>mengapa harus pilih Binar Car Rental?</p>
          </div>
        </div>
        <div className="row poinmengapa">
          <div className="col-lg-3 col-xl-3 col-md-6">
            <div className="why1">
              <img src={why1} alt="" />
              <h3>Mobil Lengkap</h3>
              <p>
                Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                terawat
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-xl-3 col-md-6">
            <div className="why2">
              <img src={why2} alt="" />
              <h3>Harga Murah</h3>
              <p>
                Harga murah dan bersaing, bisa bandingkan harga kami dengan
                rental mobil lain
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-xl-3 col-md-6">
            <div className="why3">
              <img src={why3} alt="" />
              <h3>Layanan 24 Jam</h3>
              <p>
                Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                tersedia di akhir minggu
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-xl-3 col-md-6">
            <div className="why4">
              <img src={why4} alt="" />
              <h3>Sopir Profesional</h3>
              <p>
                Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
                tepat waktu
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whyus;
