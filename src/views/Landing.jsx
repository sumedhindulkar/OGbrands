import React from "react";
import Hero from "../components/Home/Hero.jsx";
import Products from "../components/ProductSection/Products";
import Shop from "../components/Shop/Shop";
import Insta from "../components/InstaFeed/Insta";

const Landing = () => {
  return (
    <>
      <Hero />
      <Products />
      <Shop />
      <Insta />
    </>
  );
};

export default Landing;
