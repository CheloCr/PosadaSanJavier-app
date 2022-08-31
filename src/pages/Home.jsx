import React from "react";
import Publicity from "../components/Publicity";
import Navbar from "../components/Navbar";
import Carrousel from "../components/Carrousel";
import Categories from "../components/Categories";
import ProductsLists from "../components/ProductsLists";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Publicity />
      <Navbar />
      <Carrousel />
      <Categories />
      <ProductsLists />
      <NewsLetter />
      <Footer/>
    </div>
  );
};

export default Home;
