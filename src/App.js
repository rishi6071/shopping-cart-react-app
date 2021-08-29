import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import HomeBanner from "./components/HomeBanner";
import ProductGrid from "./components/ProductGrid";
import NewsGrid from "./components/NewsGrid";

const App = () => {
  return (
    <>
      <main>
        <Navbar />
        <HomeBanner />
        <ProductGrid />
        <NewsGrid />
      </main>
    </>
  );
};

export default App;
