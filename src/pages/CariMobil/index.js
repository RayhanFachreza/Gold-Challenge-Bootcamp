import React, { useState } from "react";
import Herosection from "../../components/main/herosection";
import "./style.css";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";

// import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const CariMobil = () => {
  const [visible, setVisible] = useState(false);

  const [cars, setCars] = useState([]);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  // const [price, setPrice] = useState(null);
  const [isRented, setIsRented] = useState(false);

  const handlePrice = (e) => {
    const val = e.target.value;
    if (val === "1") {
      setMinPrice(0);
      setMaxPrice(399999);
    }
    else if (val === "2") {
      setMinPrice(400000);
      setMaxPrice(600000);
    }
    else if (val === "3") {
      setMinPrice(600001);
      setMaxPrice(2000000);
    }
  };
  const handleSubmit = () => {
    const params = {
      name,
      minPrice,
      maxPrice,
      isRented: Boolean(isRented),
      category,
      page: 1,
      pageSize: 9 ,
    };

    axios.get(`${process.env.REACT_APP_API_URL}/customer/v2/car`, { params })
      .then((res) => {
        setCars(res.data.cars);
        setVisible(false);
      })
      .catch((err) => console.log(err));
  };

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
            <div className="col-lg-6 cari1">
              <div className="col-sm-6 col-lg-6 cariitem">
                <h3>Nama Mobil</h3>
                <div className="boxselect">
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Ketik nama/tipe mobil"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-sm-6 col-lg-6 cariitem">
                <h3>Kategori</h3>
                <div className="boxselect">
                  <Form.Select
                    aria-label="Default select example"
                    className="selecttext"
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option hidden>Masukkan Kapasitas Mobil </option>
                    <option value="small"> 2 - 4 Orang </option>
                    <option value="medium"> 4 - 6 Orang </option>
                    <option value="large"> 6 - 8 Orang </option>
                  </Form.Select>
                </div>
              </div>
            </div>
            {/* gap */}
            <div className="col-lg-6 cari1">
              <div className="col-sm-6 col-lg-6 cariitem">
                <h3>Harga</h3>
                <div className="boxselect">
                  <Form.Select
                    aria-label="Default select example"
                    className="selecttext"
                    onChange={(e) => handlePrice(e)}
                  >
                    <option hidden>Masukkan Harga Sewa per Hari </option>
                    <option value="1"> {"< Rp. 400.000"} </option>
                    <option value="2"> Rp. 400.000 - Rp. 600.000</option>
                    <option value="3"> {"> Rp. 600.000 "}</option>
                  </Form.Select>
                </div>
              </div>
              <div className="col-sm-6 col-lg-6 cariitem">
                <h3>Status</h3>
                <div className="withbtn">
                  <div className="boxselect">
                    <Form.Select
                      aria-label="Default select example"
                      className="selecttext"
                    >
                      <option hidden>Status </option>
                      <option value="true"> Disewa </option>
                      <option value="false"> Ready </option>
                    </Form.Select>
                  </div>
                  <div className="tombolcari">
                    <Button onClick={() => handleSubmit()}>Cari Mobil</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="row cardsection g-4">
          {cars.length > 0 &&
            cars.map((car) => (
              <div className="col-lg-4 col-xl-4 col-sm-12 col-md-6 ">
                <div className="card p-3">
                  <img src={car.image} className="imagecar" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{car.name}</h5>
                    <h4 className="harga">
                      
                      {`${car.price.toLocaleString("id-ID", {style:"currency", currency:"IDR"})}  / hari`}

                      </h4>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. At nostrum eveniet culpa rerum, non dolorem reiciendis recusandae vero. Esse, maiores?</p>
                    <div className="d-grid gap-2">
                      <button className="btn btn-" type="button">
                        Pilih Mobil
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default CariMobil;
