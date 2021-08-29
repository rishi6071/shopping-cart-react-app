import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import HomeBanner from "./components/HomeBanner";
import ProductGrid from "./components/ProductGrid";
import NewsGrid from "./components/NewsGrid";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <main>
        <Navbar />
        <HomeBanner />
        <ProductGrid />
        <NewsGrid />
        <Footer />
      </main>
    </>
  );
};

export default App;
