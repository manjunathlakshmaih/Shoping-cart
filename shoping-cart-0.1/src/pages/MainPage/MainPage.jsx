import React from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import ProductSlider from "../../components/Product-slider/ProductSlider";
import NewsLetter from "../../components/News-Letter/NewsLetter";
import Footer from "../../components/Footer/Footer";
import CopyRight from "../../components/Copyright/CopyRight";
import "./MainPage.css";

const MainPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <ProductSlider />
      <NewsLetter />
      <Footer/>
      <CopyRight />
    </div>
  );
};

export default MainPage;
