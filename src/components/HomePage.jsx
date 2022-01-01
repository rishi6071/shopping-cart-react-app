import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

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

const HomePage = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route path="/" exact>
            <HomeBanner />

            {/* Latest Products */}
            <div>
              <SectionHeader title="latestProducts" />
              <ProductGrid />
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

        <Footer subscribe={true} />
      </BrowserRouter>
    </>
  );
};

export default HomePage;
