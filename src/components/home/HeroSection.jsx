import React, { useEffect, useState } from "react";
import pic1 from "../../images/pic1.jpg";
import pic2 from "../../images/pic2.jpg";
import pic3 from "../../images/pic3.jpg";
import pic4 from "../../images/pic4.jpg";

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [pic1, pic2, pic3, pic4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const heroStyle = {
    backgroundImage: `url(${images[currentImageIndex]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "85vh",
    position: "relative",
    transition: "background-image 0.5s ease-in-out",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay for better text visibility
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  };

  return (
    <div className="hero" style={heroStyle}>
      <div style={overlayStyle}>
        <h1 className="">Darpan Enterprises</h1>
        <div>
          <p className="fs-4">
            Crafts stunning, functional spaces with expert design, construction,
            and glass & aluminum work.
          </p>
        </div>
        <div>
          <a href="/services" type="button" className="btn btn-primary m-2 p-2">
            View Services
          </a>
          <a href="/about" type="button" className="btn btn-outline-light m-2 p-2">
            About Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
