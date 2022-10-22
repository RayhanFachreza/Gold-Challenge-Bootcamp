import React, { useState } from "react";
import Herosection from "../../components/main/herosection";
import "./style.css";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

// import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const CariMobil = () => {
  const [visible, setVisible] = useState(false);

  return (
    <section className="carimobil">
      <div
        onClick={() => setVisible(false)}
        className={`overlay-bg-desktop ${visible ? "menu-active" : ""}`}
      ></div>
      <div className="bagianhero">
        <Herosection />
      </div>
      {/* !! Batas !!! */}
      {/* !!! Batas !!! */}
      <div className="container">
        <div className="row">
          <div className="cari" onClick={() => setVisible(true)}>
            <div className="col-sm-6 col-lg-3 cariitem">
              <h3>Nama Mobil</h3>
              <Form.Control
                size="sm"
                type="text"
                placeholder="Ketik nama/tipe mobil"
              />
            </div>
            <div className="col-sm-6 col-lg-3 cariitem">
              <h3>Kategori</h3>
              <div className="boxselect">
                <Form.Select
                  aria-label="Default select example"
                  className="selecttext"
                >
                  <option hidden>Masukkan Kapasitas Mobil </option>
                  <option value="1"> 2 - 4 Orang </option>
                  <option value="2"> 4 - 6 Orang </option>
                  <option value="3"> 6 - 8 Orang </option>
                </Form.Select>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3 cariitem">
              <h3>Harga</h3>
              <div className="boxselect">
                <Form.Select
                  aria-label="Default select example"
                  className="selecttext"
                >
                  <option hidden>Masukkan Harga Sewa per Hari </option>
                  <option value="1"> Rp. 400.000 </option>
                  <option value="2"> Rp. 400.000 - Rp. 600.000</option>
                  <option value="3"> Rp. 400.000 </option>
                </Form.Select>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3 cariitem">
              <h3>Status</h3>
              <div className="withbtn">
                <div className="boxselect">
                  <Form.Select
                    aria-label="Default select example"
                    className="selecttext"
                  >
                    <option hidden>Status </option>
                    <option value="1"> Rp. 400.000 </option>
                    <option value="2"> Rp. 400.000 - Rp. 600.000</option>
                    <option value="3"> Rp. 400.000 </option>
                  </Form.Select>
                </div>
                <Link to="/hasil-pencarian" className="tombolcari">
                  <Button>Cari Mobil</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CariMobil;
