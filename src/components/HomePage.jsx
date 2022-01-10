import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Commerce.js Instance
import { commerce } from "../lib/commerce";

// Custom Components
import Navbar from "./sectionComponents/Navbar";
import HomeBanner from "./sectionComponents/HomeBanner";
import ProductGrid from "./sectionComponents/ProductGrid";
import NewsGrid from "./sectionComponents/NewsGrid";
import Footer from "./sectionComponents/Footer";
import SectionHeader from "./sectionComponents/SectionHeader";
import Cart from "./sectionComponents/Cart";
import ProductDetails from "./sectionComponents/ProductDetails";
import Contact from "./sectionComponents/Contact";
import SearchProduct from "./sectionComponents/SearchProduct";
import Shop from "./sectionComponents/Shop";
import QuotesPolicy from "./sectionComponents/QuotesPolicy";
import ProductSlider from "./sectionComponents/ProductSlider";

const HomePage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await commerce.categories.list();
      console.log(data);
      setCategories(data);
    };
    
    fetchCategories();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route path="/" exact>
            {/* Home Carousel & Categories Listing */}
            <HomeBanner categories={categories} />

            {/* Latest Products */}
            <div>
              <SectionHeader title="latestProducts" />
              <ProductSlider />
            </div>

            {/* Related Products */}
            <div>
              <SectionHeader title="relatedProducts" />
              <ProductGrid />
            </div>

            <QuotesPolicy />
            <NewsGrid resources={["newsCarousel"]} /> 
          </Route>
          <Route path="/product/1" exact>
            <ProductDetails />
            <Shop />
          </Route>
          <Route path="/newsfeed" exact>
            <NewsGrid resources={["newsCarousel", "newsGrid"]} />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
          <Route path="/cart" exact>
            <Cart />
          </Route>
          <Route path="/search" exact>
            <SearchProduct />
          </Route>
        </Switch>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default HomePage;
