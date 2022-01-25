import React, { useState, useEffect } from "react";
import axios from "axios";

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
import Shop from "./sectionComponents/Shop";
import QuotesPolicy from "./sectionComponents/QuotesPolicy";
import ProductSlider from "./sectionComponents/ProductSlider";

// Formatting Price
const formatPrice = (price) => {
  return price.substring(0, price.length - 3);
};

const HomePage = () => {
  const [newsCarousel, setNewsCarousel] = useState([]);
  const [newsGridCards, setNewsGridCards] = useState();

  const [categories, setCategories] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    // Fetch All Categories
    const fetchCategories = async () => {
      const { data } = await commerce.categories.list();
      setCategories(data);
    };
    fetchCategories();

    // Fetch All Products
    const fetchAllProducts = async () => {
      const { data } = await commerce.products.list();
      setAllProducts(data);
    };
    fetchAllProducts();

    // Fetch News Carousel Items
    const fetchNewsCarousel = () => {
      const options = {
        method: "GET",
        url: "https://bing-news-search1.p.rapidapi.com/news/search",
        params: {
          q: "Gadgets",
          safeSearch: "Off",
          textFormat: "Raw",
          freshness: "Week",
        },
        headers: {
          "x-bingapis-sdk": "true",
          "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
          "x-rapidapi-key":
            "6f7060b3efmsh122f3af8594763dp1e7b8ajsn7ff3f2f5bd27",
        },
      };

      axios
        .request(options)
        .then(function (response) {
          setNewsCarousel(response.data.value);
        })
        .catch(function (error) {
          console.error(error);
        });
    };
    fetchNewsCarousel();

    // Fetch News Horizontal Cards
    const fetchNewsGridCards = () => {
      const options = {
        method: "GET",
        url: "https://bing-news-search1.p.rapidapi.com/news/search",
        params: {
          q: "Technology",
          safeSearch: "Off",
          textFormat: "Raw",
          freshness: "Week",
        },
        headers: {
          "x-bingapis-sdk": "true",
          "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
          "x-rapidapi-key":
            "6f7060b3efmsh122f3af8594763dp1e7b8ajsn7ff3f2f5bd27",
        },
      };

      axios
        .request(options)
        .then(function (response) {
          setNewsGridCards(response.data.value);
        })
        .catch(function (error) {
          console.error(error);
        });
    };
    fetchNewsGridCards();
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
            <NewsGrid newsCarousel={newsCarousel} />
          </Route>
          <Route path="/shop" exact>
            <Shop products={allProducts} />
          </Route>
          <Route path="/newsfeed" exact>
            <NewsGrid
              newsCarousel={newsCarousel}
              newsGridCards={newsGridCards}
            />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
          <Route path="/cart" exact>
            <Cart />
          </Route>
          <Route path="/search/:search" exact>
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
export { formatPrice };
