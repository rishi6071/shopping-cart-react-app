import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import HomeBanner from "./components/HomeBanner";
import ProductGrid from "./components/ProductGrid";

const App = () => {
  return (
    <>
      <main>
        <Navbar />
        <HomeBanner />
        <ProductGrid />
      </main>
    </>
  );
};

export default App;
