import React, { useState, useCallback, useMemo } from "react";
import "./styles/App.css";

import useTheme from "./hooks/useTheme";
import useCartWishlist from "./hooks/useCartWishlist";

import Header from "./components/ui/layout/Header";
import Footer from "./components/ui/layout/Footer";
import UtilityIcons from "./components/ui/layout/UtilityIcons";
import HomePage from "./components/pages/HomePage";
import AboutUsPage from "./components/pages/AboutUsPage";
import WishlistPage from "./components/pages/WishlistPage";
import CartPage from "./components/pages/CartPage";
import ContactPage from "./components/pages/ContactPage";

import PRODUCTS_DATA from "./components/pages/productData";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  const {
    cart,
    wishlist = [],
    isProductInWishlist,
    toggleWishlist,
    addToCart,
    updateCartQuantity,
    removeProductFromCart,
  } = useCartWishlist();

  const [page, setPage] = useState("Home");
  const handleNavClick = useCallback((newPage) => setPage(newPage), []);

  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeSeason, setActiveSeason] = useState("all");

  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.type.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        activeCategory === "all" || product.category === activeCategory;
      const matchesSeason =
        activeSeason === "all" || product.season === activeSeason;

      return matchesSearch && matchesCategory && matchesSeason;
    });
  }, [searchTerm, activeCategory, activeSeason]);

  const renderPage = () => {
    switch (page) {
      case "Home":
        return (
          <HomePage
            theme={theme}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            activeSeason={activeSeason}
            setActiveSeason={setActiveSeason}
            filteredProducts={filteredProducts}
            isProductInWishlist={isProductInWishlist}
            toggleWishlist={toggleWishlist}
            addToCart={addToCart}
          />
        );

      case "About Us":
        return <AboutUsPage theme={theme} />;

      case "Wishlist":
        return (
          <WishlistPage
            wishlist={wishlist}
            toggleWishlist={toggleWishlist}
            addToCart={addToCart}
            handleNavClick={handleNavClick}
            theme={theme}
          />
        );

      case "Cart":
        return (
          <CartPage
            cart={cart}
            updateCartQuantity={updateCartQuantity}
            removeProductFromCart={removeProductFromCart}
            handleNavClick={handleNavClick}
            theme={theme}
          />
        );

      case "Contact":
        return <ContactPage theme={theme} />;

      default:
        return (
          <HomePage
            theme={theme}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            activeSeason={activeSeason}
            setActiveSeason={setActiveSeason}
            filteredProducts={filteredProducts}
            isProductInWishlist={isProductInWishlist}
            toggleWishlist={toggleWishlist}
            addToCart={addToCart}
          />
        );
    }
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
      />

      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        crossOrigin="anonymous"
      />

      <Header
        page={page}
        cartCount={cart.length}
        wishlistCount={wishlist.length}
        handleNavClick={handleNavClick}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {renderPage()}

      <Footer handleNavClick={handleNavClick} theme={theme} />
      <UtilityIcons />

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        crossOrigin="anonymous"
      ></script>
    </>
  );
};

export default App;
