import React from "react";
// import Announcement from "../components/Announcement";
import Categories from "../components/Categories/index.jsx";
// import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
// import ProductsList from "../components/ProductsResult";
import Slider from "../components/Slider/index.jsx";

const Home = () => {
  return (
    <div>
      {/* <Announcement /> */}
      <Navbar />
      <Slider />
      <Categories />
      {/* <ProductsList/> */}
      <Newsletter/>
      {/* <Footer/> */}
    </div>
  );
};

export default Home;