import React from "react";
import PriceHome from "../components/Price/PriceHome";
import AboutNavbar from "../pages/AboutNavbar";
import PriceFAQ from "../components/Price/PriceFAQ";

const Price = () => {
  return (
    <>
      <AboutNavbar />
      <PriceHome />
      <PriceFAQ />
    </>
  );
};

export default Price;
