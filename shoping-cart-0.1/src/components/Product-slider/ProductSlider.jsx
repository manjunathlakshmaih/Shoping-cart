import React from "react";
import vr1 from "../../assets/vr1.jpg";
import vr2 from "../../assets/vr2.jpg";
import vr3 from "../../assets/vr3.jpg";
import "./ProductSlider.css";

const ProductSlider = () => {
  return (
    <section className="product-slider">
      <h1>Best Seller</h1>
      <hr />
      <div class="product-details">
        <div class="container">
          <div class="product new">
            <div class="product-picture">
              <img src={vr1} alt="product: apple's VR" />
            </div>
            <div class="product-info">
              <h5>Smart Watches, Cases, Apple</h5>
              <h4>Penom Case for Apple Watch</h4>
              <div class="price">
                <h3>US$ 450.00</h3>
              </div>
              <button>Add to Bag</button>
            </div>
          </div>
          <div class="product new">
            <div class="product-picture">
              <img src={vr2} alt="product: apple's VR" />
            </div>
            <div class="product-info">
              <h5>Headphones, Audio, Sound</h5>
              <h4>Noise Cancelling Headphone</h4>
              <div class="price">
                <h3>US$ 18.49</h3>
              </div>
              <button>Add to Bag</button>
            </div>
          </div>
          <div class="product">
            <div class="product-picture">
              <img src={vr3} alt="product: apple's VR" />
            </div>
            <div class="product-info">
              <h5>Cameras, Kits, Photo & Video</h5>
              <h4>Canon Digital SLR EOS Rebel T6</h4>
              <div class="price discount">
                <h3>US$ 396.89</h3>
                <span class="verginal-price">US$ 400.89</span>
              </div>
              <button>Add to Bag</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSlider;
