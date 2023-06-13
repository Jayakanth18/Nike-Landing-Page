import React from "react";
import "./landingpage.css";

const LandingPage = () => {
  return (
    <main className="main container">
      <div className="content">
        <h1>
          YOUR FEET <p></p> DESERVE<p></p>THE BEST
        </h1>
        <p className="para">
          YOUR FEET DESERVE THE BEST AND WE&apos;RE HERE TO HELP{" "}
          <p> YOU WITH OUR SHOES.</p>
          <p>
            <b>JUST DO IT.</b>
          </p>
        </p>
        <div className="btn">
          <button>SHOP NOW</button>
          <button>Category</button>
        </div>
        <div className="shoping">
          <p>Also Avaliable On</p>
          <img src="/images/amazon.png" alt="amazon" />
          <img src="/images/flipkart.png" alt="flipkart" />
        </div>
      </div>
      <div className="img">
        <img src="/images/hero-image.png" alt="nike-shoe" />
      </div>
    </main>
  );
};

export default LandingPage;
