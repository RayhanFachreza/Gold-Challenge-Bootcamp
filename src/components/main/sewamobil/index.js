import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const SewaMobil = () => {
  return (
    <section className="sewamobil" id="sewa-mobil">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="sewa">
              <h2>Sewa Mobil di (Lokasimu) Sekarang</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
              <Link
                to="/detail-paket-sewa-mobil"
                className="btn btn-primary"
                role="button"
              >
                Mulai Sewa Mobil
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SewaMobil;
