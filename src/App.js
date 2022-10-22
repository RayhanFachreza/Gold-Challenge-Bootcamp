import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import HomePage from "./pages/HomePage";
import CariMobil from "./pages/CariMobil";
import DetailPaketSewa from "./pages/DetailPaketSewaMobiil";
import HasilPencarian from "./pages/HasilPencarian";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cari-mobil" element={<CariMobil />} />
        <Route path="/detail-paket-sewa-mobil" element={<DetailPaketSewa />} />
        <Route path="/hasil-Pencarian" element={<HasilPencarian />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
