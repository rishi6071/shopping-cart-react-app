import React, { useState, useEffect } from "react";

// React-Router-Dom
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
// import Shop from "./sectionComponents/Shop";
import QuotesPolicy from "./sectionComponents/QuotesPolicy";
import ProductSlider from "./sectionComponents/ProductSlider";

const HomePage = () => {
  const [categories, setCategories] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  // Fetch All Categories
  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await commerce.categories.list();
      setCategories(data);
    };
    fetchCategories();

    const fetchAllProducts = async () => {
      const { data } = await commerce.products.list();
      setAllProducts(data);
    };
    fetchAllProducts();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route path="/" exact>
            {/* Home Carousel & Categories Listing */}
            <HomeBanner categories={categories} />

            {/* ProductSlider for all Sub-Categories */}
            {[...categories].map((parent_category) => {
              return (
                <>
                  {[...parent_category.children].map((sub_category) => {
                    return (
                      <div key={sub_category.id}>
                        <SectionHeader title={"Branded " + sub_category.name} />
                        <ProductSlider categorySlug={sub_category.slug} />
                      </div>
                    );
                  })}
                </>
              );
            })}

            {/* Latest Products */}
            <div>
              <SectionHeader title="Latest Products" />
              <ProductGrid products={allProducts} />
            </div>

            <QuotesPolicy />
            <NewsGrid resources={["newsCarousel"]} /> 
          </Route>
          <Route path="/shop" exact>
            <ProductDetails />
            {/* <Shop /> */}
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
          <Route path="/product/:id">
            <ProductDetails />
          </Route>
        </Switch>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default HomePage;
