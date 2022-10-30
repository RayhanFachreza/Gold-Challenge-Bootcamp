import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import Card from 'react-bootstrap/Card';
import './style.css'
import Orang from './assets/fi_users.svg'
import { Link } from "react-router-dom";

const DetailPaketSewa = () => {
  const { id } = useParams();
  const [car, setCar] = useState({})


  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/customer/car/${id}`)
      .then((res) => {
        setCar(res.data);
      })
      .catch((err) => console.log(err));
    
  }, [id])
  
const category = {
  "small": "2 - 4 Orang",
  "medium": "4 - 6 Orang",
  "large": "6 - 8 Orang",
}





  return (
    <>
    <section>
      <div className="detailsewapaket">
        <br />
      </div>
      <div className="paketsewa">
        <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-8 col-lg-8 sewatext">
            <h2>Tentang Paket</h2>
            <h3>Include</h3>
            <ul>
              <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
              <li>Sudah termasuk bensin selama 12 jam</li>
              <li>Sudah termasuk Tiket Wisata</li>
              <li>Sudah termasuk pajak</li>
            </ul>
            <h3>Exclude</h3>
            <ul>
              <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
              <li>Tidak termasuk akomodasi penginapan</li>
            </ul>
            <h3>Refund, Reschedule, Overtime</h3>
            <ul>
              <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
              <li>Tidak termasuk akomodasi penginapan</li>
              <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
              <li>Tidak termasuk akomodasi penginapan</li>
              <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
              <li>Tidak termasuk akomodasi penginapan</li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 cardkanan">
            <div className="carddetails">
            <div className="image">
              <img src={car.image} alt="" />
            </div>
            <div className="cardtext">
              <h3>{car.name}</h3>
              <div className="orang">
                <div className="gambarorang">
                <img src={Orang} alt="" />
                </div>
                <p>{category[car.category]}</p>
              </div>
              <div className="hargatotal">
                <h3>Total</h3>
                <h3> {car.price &&`${car?.price.toLocaleString("id-ID", {style:"currency", currency:"IDR"})}`} </h3>
              </div>
            </div>
          </div>
          <div className="buttonkembali">
          <Link to="/cari-mobil" className="btn" type="button">Kembali ke Pencarian</Link>
          </div>
          </div>
        </div>
        </div>
        </div>
    </section> 
      
    </>
  );
};

export default DetailPaketSewa;
