import React from "react";
import Hero_Large_Desktop from "../../assets/Hero_Large_Desktop.jpg";
import Hero_Desktop from "../../assets/Hero_Desktop.jpg";
import Hero_Tablet from "../../assets/Hero_Tablet.jpg";
import Hero_Mobile from "../../assets/Hero_Mobile.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <picture>
        <source media="(min-width:1440px)" srcSet={Hero_Desktop} />
        <source media="(min-width:960px)" srcSet={Hero_Tablet} />
        <source media="(min-width:576px)" srcSet={Hero_Mobile} />
        <img src={Hero_Large_Desktop} alt="main back ground image" />
      </picture>
      <div className="hero-content">
        <div className="container">
          <h1>Discover our line of VR Headsets</h1>
          <p className="paragrap">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium.
          </p>
          <button>View Headset</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
