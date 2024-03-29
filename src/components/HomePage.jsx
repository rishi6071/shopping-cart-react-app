import React, { useState, useLayoutEffect, useEffect, useRef } from "react";
import axios from "axios";

// React-Router-Dom
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Helpers
import { saveInCache, getFromCache } from "../helper/cache";

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
import Checkout from "./sectionComponents/Checkout/Checkout";

// Formatting Price
const formatPrice = (price) => {
  return price.substring(0, price.length - 3);
};

const HomePage = () => {
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
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  useLayoutEffect(() => {
    let isMounted = true;

    try {
      /** CATEGORIES */
      const fetchCategories = async () => {
        const { data } = await commerce.categories.list();
        saveInCache("categories", data);
        if (isMounted) setCategories(data);
      };

      // use categories if already in cache otherwise fetch
      const getCategories = getFromCache("categories");
      if (getCategories?.length > 0) {
        if (isMounted) setCategories([...getCategories]);
      } else fetchCategories();

      /** LATEST PRODUCTS */
      const fetchLatestProducts = async () => {
        const { data } = await commerce.products.list({
          sortBy: "updated_at",
          sortOrder: "desc",
          limit: 12,
        });
        saveInCache("latest_products", data);
        if (isMounted) setAllProducts(data);
      };

      // use latest_products if already in cache otherwise fetch
      const getLatestProducts = getFromCache("latest_products");
      if (getLatestProducts?.length > 0) {
        if (isMounted) setAllProducts([...getLatestProducts]);
      } else fetchLatestProducts();
    } catch (err) {
      console.log(err);
    }

    // cleanup function
    return () => {
      isMounted = false;
    };
  }, []);

  // NEWS Carousel, Grid and Cart
  useEffect(() => {
    let isMounted = true;

    try {
      /** NEWS Carousel */
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
            "x-rapidapi-key": "6f7060b3efmsh122f3af8594763dp1e7b8ajsn7ff3f2f5bd27",
          },
        };
        axios
          .request(options)
          .then(function (response) {
            if (isMounted) setNewsCarousel(response.data.value);
          })
          .catch(function (error) {
            console.error(error);
          });
      };
      fetchNewsCarousel();

      /** NEWS Grid Cards */
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
            "x-rapidapi-key": "6f7060b3efmsh122f3af8594763dp1e7b8ajsn7ff3f2f5bd27",
          },
        };
        axios
          .request(options)
          .then(function (response) {
            if (isMounted) setNewsGridCards(response.data.value);
          })
          .catch(function (error) {
            console.error(error);
          });
      };
      fetchNewsGridCards();

      /** FETCH CART */
      const fetchCart = async () => {
        if (isMounted) setCart(await commerce.cart.retrieve());
      };
      fetchCart();
    } catch (error) {
      console.log(error);
    }

    // cleanup function
    return () => {
      isMounted = false;
    };
  }, []);

  /** ADD TO CART */
  const handleAddToCart = (p_id, qty) => {
    const addItem = async (p_id) => {
      const response = await commerce.cart.add(p_id, qty);
      setCart(response.cart);
      if (response.success) handleAlertMessage("success", "Item Added in Cart!");
      else handleAlertMessage("error", "Error Occured!");
    };
    addItem(p_id, qty);
  };

  /** UPDATE IN CART */
  const handleUpdateInCart = (item_id, qty) => {
    const updateCart = async (item_id, qty) => {
      const response = await commerce.cart.update(item_id, { quantity: qty });
      setCart(response.cart);
      if (response.success) handleAlertMessage("success", "Item Updated in Cart!");
      else handleAlertMessage("error", "Error Occured!");
    };
    updateCart(item_id, qty);
  };

  /** REMOTE FROM CART */
  const handleRemoveFromCart = (item_id) => {
    const removeItem = async (id) => {
      const response = await commerce.cart.remove(id);
      setCart(response.cart);
      if (response.success) handleAlertMessage("success", "Item Removed from Cart!");
      else handleAlertMessage("error", "Error Occured!");
    };
    removeItem(item_id);
  };

  /** REFRESH CART */
  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();
    setCart(newCart);
  };

  /** CAPTURE CHECKOUT */
  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
      handleAlertMessage("error", "Error OCCURED!");
    }
  };

  /** ALERT MESSAGE */
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

            {/* ProductSlider for all Sub-Categories */}
            {[...categories].map((parent_category, idx) => {
              return (
                <div key={idx}>
                  {[...parent_category.children].map((sub_category) => {
                    return (
                      <div key={sub_category.id}>
                        <ProductSlider categorySlug={sub_category.slug} title={"Branded " + sub_category.name} />
                      </div>
                    );
                  })}
                </div>
              );
            })}

            {/* Latest Products */}
            <div>
              <SectionHeader title="Latest Products" />
              <ProductGrid products={allProducts} />
            </div>

            {/* Quotes Policy & NEWS Panel */}
            <QuotesPolicy />
            <NewsGrid newsCarousel={newsCarousel} />
          </Route>

          <Route path="/shop" exact>
            <Shop />
          </Route>

          <Route path="/shop/category/:category" exact>
            <Shop />
          </Route>

          <Route path="/newsfeed" exact>
            <NewsGrid newsCarousel={newsCarousel} newsGridCards={newsGridCards} />
          </Route>

          <Route path="/contact" exact>
            <Contact />
          </Route>

          <Route path="/cart" exact>
            <Cart cart={cart} handleUpdateInCart={handleUpdateInCart} handleRemoveFromCart={handleRemoveFromCart} />
          </Route>

          <Route path="/search/:search" exact>
            <SearchProduct />
          </Route>

          <Route path="/checkout" exact>
            <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} />
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
