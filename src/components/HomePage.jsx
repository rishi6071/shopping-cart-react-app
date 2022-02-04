import React, { useState, useLayoutEffect, useEffect, useRef } from "react";
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
import AlertMessage from "./sectionComponents/AlertMessage";
import Checkout from "./sectionComponents/Checkout";

// Formatting Price
const formatPrice = (price) => {
  return price.substring(0, price.length - 3);
};

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  const alertFunc = useRef(null);
  const [alertContent, setAlertContent] = useState({
    message: "",
    context: "",
  });

  const [newsCarousel, setNewsCarousel] = useState([]);
  const [newsGridCards, setNewsGridCards] = useState();

  const [categories, setCategories] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [cart, setCart] = useState([]);

  /** FETCH categories, products */
  useLayoutEffect(() => {
    try {
      setLoading(true);
      const fetchCategories = async () => {
        const { data } = await commerce.categories.list();
        setCategories(data);
      };
      fetchCategories();

      const fetchLatestProducts = async () => {
        const response = await commerce.products.list({
          sortBy: "updated_at",
          sortOrder: "desc",
          limit: 12,
        });
        setAllProducts(response.data);
      };
      fetchLatestProducts();
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    } catch (e) {
      console.log(e);
    }
  }, []);

  /** FETCH News, Cart */
  useEffect(() => {
    try {
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

      const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
      };
      fetchCart();
    } catch (e) {
      console.log(e);
    }
  }, []);

  const handleAddToCart = (p_id, qty) => {
    const addItem = async (p_id) => {
      const response = await commerce.cart.add(p_id, qty);
      setCart(response.cart);
      if (response.success)
        handleAlertMessage("success", "Item Added in Cart!");
      else handleAlertMessage("error", "Error Occured!");
    };
    addItem(p_id, qty);
  };

  const handleUpdateInCart = (item_id, qty) => {
    const updateCart = async (item_id, qty) => {
      const response = await commerce.cart.update(item_id, { quantity: qty });
      setCart(response.cart);
      if (response.success)
        handleAlertMessage("success", "Item Updated in Cart!");
      else handleAlertMessage("error", "Error Occured!");
    };
    updateCart(item_id, qty);
  };

  const handleRemoveFromCart = (item_id) => {
    const removeItem = async (id) => {
      const response = await commerce.cart.remove(id);
      setCart(response.cart);
      if (response.success)
        handleAlertMessage("success", "Item Removed from Cart!");
      else handleAlertMessage("error", "Error Occured!");
    };
    removeItem(item_id);
  };

  const handleAlertMessage = (ctxt, msg) => {
    setAlertContent({
      message: msg,
      context: ctxt,
    });
    alertFunc.current();
  };

  return (
    <>
      <BrowserRouter>
        <Navbar cartItems={cart.total_items} />

        <Switch>
          <Route path="/" exact>
            {/* Home Carousel & Categories Listing */}
            <HomeBanner categories={categories} />

            {!loading ? (
              <div>
                {/* ProductSlider for all Sub-Categories */}
                {[...categories].map((parent_category) => {
                  return (
                    <>
                      {[...parent_category.children].map((sub_category) => {
                        return (
                          <div key={sub_category.id}>
                            <ProductSlider
                              categorySlug={sub_category.slug}
                              title={"Branded " + sub_category.name}
                            />
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
              </div>
            ) : (
              ``
            )}

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
            <Cart
              cart={cart}
              handleUpdateInCart={handleUpdateInCart}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          </Route>
          <Route path="/search/:search" exact>
            <SearchProduct />
          </Route>
          <Route path="/checkout" exact>
            <Checkout />
          </Route>
          <Route path="/product/:id">
            <ProductDetails handleAddToCart={handleAddToCart} />
          </Route>
        </Switch>

        <Footer />

        {/* Alert Toast Message */}
        <AlertMessage alertFunc={alertFunc} alertContent={alertContent} />
      </BrowserRouter>
    </>
  );
};

export default HomePage;
export { formatPrice };
