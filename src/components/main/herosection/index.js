// import { Link } from "react-router-dom";
import Heroimage from "./asset/hero-image.png";
import "./style.css";

const Herosection = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 hero-kiri">
            <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
            <p>
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sew   a mobil selama 24 jam.
            </p>

            {window.location.pathname === "/" && (
              <a className="btn" role="button" href="/cari-mobil">
                Mulai Sewa Mobil
              </a>
              
            )}
          </div>
          <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 hero-kanan">
            <img src={Heroimage} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
