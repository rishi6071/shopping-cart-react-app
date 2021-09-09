import React from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";

// Custom Components
import Navbar from "./sectionComponents/Navbar";
import HomeBanner from "./sectionComponents/HomeBanner";
import ProductGrid from "./sectionComponents/ProductGrid";
import NewsGrid from "./sectionComponents/NewsGrid";
import Footer from "./sectionComponents/Footer";
import ProductDetails from "./sectionComponents/ProductDetails";
import SectionHeader from "./sectionComponents/SectionHeader";

const HomePage = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route path="/" exact>
            <HomeBanner />
            <SectionHeader title="Latest Products" />
            <ProductGrid />
          </Route>
          <Route path="/product/1" exact>
            <ProductDetails />
          </Route>
        </Switch>

        <NewsGrid />

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default HomePage;
