// // // App.js
// // import './styles/App.css';  // exactly path aise

 
// // const App = () => {
// //   // Use Custom Hooks
// //   const { theme, toggleTheme } = useTheme();
// //   const { 
// //     cart, 
// //     wishlist, 
// //     isProductInWishlist, 
// //     toggleWishlist, 
// //     addToCart, 
// //     updateCartQuantity, 
// //     removeProductFromCart 
// //   } = useCartWishlist();
  
// //   // Navigation State
// //   const [page, setPage] = useState('Home'); 
// //   const handleNavClick = useCallback((newPage) => setPage(newPage), []);

// //   // Home Page Filter States
// //   const [searchTerm, setSearchTerm] = useState('');
// //   const [activeCategory, setActiveCategory] = useState('all');
// //   const [activeSeason, setActiveSeason] = useState('all');

// //   // Filtering Logic
// //   const filteredProducts = useMemo(() => {
// //     return PRODUCTS_DATA.filter(product => {
// //       const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
// //                             product.type.toLowerCase().includes(searchTerm.toLowerCase());
      
// //       const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
// //       const matchesSeason = activeSeason === 'all' || product.season === activeSeason;
      
// //       return matchesSearch && matchesCategory && matchesSeason;
// //     });
// //   }, [searchTerm, activeCategory, activeSeason]);

// //   // Router Logic
// //   const renderPage = () => {
// //     switch (page) {
// //       case 'Home':
// //         return <HomePage 
// //                   theme={theme}
// //                   searchTerm={searchTerm}
// //                   setSearchTerm={setSearchTerm}
// //                   activeCategory={activeCategory}
// //                   setActiveCategory={setActiveCategory}
// //                   activeSeason={activeSeason}
// //                   setActiveSeason={setActiveSeason}
// //                   filteredProducts={filteredProducts}
// //                   isProductInWishlist={isProductInWishlist}
// //                   toggleWishlist={toggleWishlist}
// //                   addToCart={addToCart}
// //                />;
// //       case 'About Us':
// //         return <AboutUsPage theme={theme} />;
// //       case 'Wishlist':
// //         return <WishlistPage 
// //                   wishlist={wishlist} 
// //                   toggleWishlist={toggleWishlist} 
// //                   addToCart={addToCart} 
// //                   handleNavClick={handleNavClick} 
// //                   theme={theme}
// //                />;
// //       case 'Cart':
// //         return <CartPage 
// //                   cart={cart} 
// //                   updateCartQuantity={updateCartQuantity} 
// //                   removeProductFromCart={removeProductFromCart} 
// //                   handleNavClick={handleNavClick} 
// //                   theme={theme}
// //                />;
// //       case 'Contact':
// //         return <ContactPage theme={theme} />;
// //       default:
// //         return <HomePage 
// //                   theme={theme}
// //                   searchTerm={searchTerm}
// //                   setSearchTerm={setSearchTerm}
// //                   activeCategory={activeCategory}
// //                   setActiveCategory={setActiveCategory}
// //                   activeSeason={activeSeason}
// //                   setActiveSeason={setActiveSeason}
// //                   filteredProducts={filteredProducts}
// //                   isProductInWishlist={isProductInWishlist}
// //                   toggleWishlist={toggleWishlist}
// //                   addToCart={addToCart}
// //                />;
// //     }
// //   };


// //   // Main Render
// //   return (
// //     <>
// //       {/* Bootstrap Icons CSS (For all icons) */}
// //       <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
// //       {/* Bootstrap CSS */}
// //       <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" xintegrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyP2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous" />
      
      
// //       {/* Main Layout */}
// //       <Header 
// //         page={page} 
// //         cartCount={cart.length} 
// //         wishlistCount={wishlist.length} 
// //         handleNavClick={handleNavClick} 
// //         theme={theme}
// //         toggleTheme={toggleTheme}
// //       />
// //       {renderPage()}
// //       <Footer 
// //         handleNavClick={handleNavClick} 
// //         theme={theme} 
// //       />
// //       <UtilityIcons />
      
// //       {/* Bootstrap JS is loaded for potential component styling/utility */}
// //       <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" xintegrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script>
// //     </>
// //   );
// // };

// // export default App;


// // App.jsx

// import React, { useState, useCallback, useMemo } from 'react';
// import './styles/App.css'; // CSS import should be just after React
// import useTheme from './hooks/useTheme';          // ✅ Custom hook import
// import useCartWishlist from './hooks/useCartWishlist';  // ✅ Custom hook import

// // Components
// import Header from './components/ui/layout/Header';
// import Footer from './components/ui/layout/Footer';
// import UtilityIcons from './components/ui/layout/UtilityIcons';
// import HomePage from './components/pages/HomePage';
// import AboutUsPage from './components/pages/AboutUsPage';
// import WishlistPage from './components/pages/WishlistPage';
// import CartPage from './components/pages/CartPage';
// import ContactPage from './components/pages/ContactPage';

// import PRODUCTS_DATA from './components/pages/productData';


// const App = () => {
//   // --- THEME STATE ---
//   const [theme, setTheme] = useState('light'); // default light theme
//   const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

//   // --- CART & WISHLIST STATE ---
//   const [cart, setCart] = useState([]);
//   const [wishlist, setWishlist] = useState([]);

//   const isProductInWishlist = (productId) => wishlist.includes(productId);
//   const toggleWishlist = (productId) => {
//     setWishlist(prev =>
//       prev.includes(productId) ? prev.filter(id => id !== productId) : [...prev, productId]
//     );
//   };
//   const addToCart = (product) => {
//     setCart(prev => [...prev, product]);
//   };
//   const updateCartQuantity = (productId, qty) => {
//     setCart(prev =>
//       prev.map(item => item.id === productId ? { ...item, quantity: qty } : item)
//     );
//   };
//   const removeProductFromCart = (productId) => {
//     setCart(prev => prev.filter(item => item.id !== productId));
//   };

//   // --- Navigation State ---
//   const [page, setPage] = useState('Home'); 
//   const handleNavClick = useCallback((newPage) => setPage(newPage), []);

//   // --- Home Page Filter States ---
//   const [searchTerm, setSearchTerm] = useState('');
//   const [activeCategory, setActiveCategory] = useState('all');
//   const [activeSeason, setActiveSeason] = useState('all');

//   // --- Filtering Logic ---
//   const filteredProducts = useMemo(() => {
//     return PRODUCTS_DATA.filter(product => {
//       const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
//                             product.type.toLowerCase().includes(searchTerm.toLowerCase());
      
//       const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
//       const matchesSeason = activeSeason === 'all' || product.season === activeSeason;
      
//       return matchesSearch && matchesCategory && matchesSeason;
//     });
//   }, [searchTerm, activeCategory, activeSeason]);

//   // --- Router Logic ---
//   const renderPage = () => {
//     switch (page) {
//       case 'Home':
//         return <HomePage 
//                   theme={theme}
//                   searchTerm={searchTerm}
//                   setSearchTerm={setSearchTerm}
//                   activeCategory={activeCategory}
//                   setActiveCategory={setActiveCategory}
//                   activeSeason={activeSeason}
//                   setActiveSeason={setActiveSeason}
//                   filteredProducts={filteredProducts}
//                   isProductInWishlist={isProductInWishlist}
//                   toggleWishlist={toggleWishlist}
//                   addToCart={addToCart}
//                />;
//       case 'About Us':
//         return <AboutUsPage theme={theme} />;
//       case 'Wishlist':
//         return <WishlistPage 
//                   wishlist={wishlist} 
//                   toggleWishlist={toggleWishlist} 
//                   addToCart={addToCart} 
//                   handleNavClick={handleNavClick} 
//                   theme={theme}
//                />;
//       case 'Cart':
//         return <CartPage 
//                   cart={cart} 
//                   updateCartQuantity={updateCartQuantity} 
//                   removeProductFromCart={removeProductFromCart} 
//                   handleNavClick={handleNavClick} 
//                   theme={theme}
//                />;
//       case 'Contact':
//         return <ContactPage theme={theme} />;
//       default:
//         return <HomePage 
//                   theme={theme}
//                   searchTerm={searchTerm}
//                   setSearchTerm={setSearchTerm}
//                   activeCategory={activeCategory}
//                   setActiveCategory={setActiveCategory}
//                   activeSeason={activeSeason}
//                   setActiveSeason={setActiveSeason}
//                   filteredProducts={filteredProducts}
//                   isProductInWishlist={isProductInWishlist}
//                   toggleWishlist={toggleWishlist}
//                   addToCart={addToCart}
//                />;
//     }
//   };

//   // --- Main Render ---
//   return (
//     <>
//       {/* Bootstrap Icons CSS */}
//       <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
//       {/* Bootstrap CSS */}
//       <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" crossOrigin="anonymous" />
      
//       {/* Layout */}
//       <Header 
//         page={page} 
//         cartCount={cart.length} 
//         wishlistCount={wishlist.length} 
//         handleNavClick={handleNavClick} 
//         theme={theme}
//         toggleTheme={toggleTheme}
//       />
//       {renderPage()}
//       <Footer handleNavClick={handleNavClick} theme={theme} />
//       <UtilityIcons />

//       {/* Bootstrap JS */}
//       <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" crossOrigin="anonymous"></script>
//     </>
//   );
// };

// export default App;


import React, { useState, useCallback, useMemo } from 'react';
import './styles/App.css';

// Custom Hooks
import useTheme from './hooks/useTheme';
import useCartWishlist from './hooks/useCartWishlist';

// Components
import Header from './components/ui/layout/Header';
import Footer from './components/ui/layout/Footer';
import UtilityIcons from './components/ui/layout/UtilityIcons';
import HomePage from './components/pages/HomePage';
import AboutUsPage from './components/pages/AboutUsPage';
import WishlistPage from './components/pages/WishlistPage';
import CartPage from './components/pages/CartPage';
import ContactPage from './components/pages/ContactPage';

import PRODUCTS_DATA from './components/pages/productData';

const App = () => {

  // THEME HOOK
  const { theme, toggleTheme } = useTheme();

  // CART & WISHLIST HOOK
  const { 
    cart, 
    wishlist= [], 
    isProductInWishlist, 
    toggleWishlist, 
    addToCart, 
    updateCartQuantity, 
    removeProductFromCart 
  } = useCartWishlist();

  // NAVIGATION STATE
  const [page, setPage] = useState('Home'); 
  const handleNavClick = useCallback((newPage) => setPage(newPage), []);

  // FILTER STATES
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeSeason, setActiveSeason] = useState('all');

  // FILTER LOGIC
  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            product.type.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
      const matchesSeason = activeSeason === 'all' || product.season === activeSeason;
      
      return matchesSearch && matchesCategory && matchesSeason;
    });
  }, [searchTerm, activeCategory, activeSeason]);

  // ROUTER LOGIC
  const renderPage = () => {
    switch (page) {
      case 'Home':
        return <HomePage 
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
        />;

      case 'About Us':
        return <AboutUsPage theme={theme} />;

      case 'Wishlist':
        return <WishlistPage 
          wishlist={wishlist}
          toggleWishlist={toggleWishlist}
          addToCart={addToCart}
          handleNavClick={handleNavClick}
          theme={theme}
        />;

      case 'Cart':
        return <CartPage 
          cart={cart}
          updateCartQuantity={updateCartQuantity}
          removeProductFromCart={removeProductFromCart}
          handleNavClick={handleNavClick}
          theme={theme}
        />;

      case 'Contact':
        return <ContactPage theme={theme} />;

      default:
        return <HomePage 
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
        />;
    }
  };

  // MAIN UI RENDER
  return (
    <>
      {/* Bootstrap Icons */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />

      {/* Bootstrap CSS */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" crossOrigin="anonymous" />

      {/* Layout */}
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

      {/* Bootstrap JS */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" crossOrigin="anonymous"></script>
    </>
  );
};

export default App;

