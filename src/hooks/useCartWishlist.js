
import { useState, useEffect } from "react";

const useCartWishlist = () => {
  
  // --- CART FROM LOCAL STORAGE ---
  const [cart, setCart] = useState(() => {
    try {
      const storedCart = localStorage.getItem("cart");
      return storedCart ? JSON.parse(storedCart) : [];
    } catch {
      return [];
    }
  });

  // --- WISHLIST FROM LOCAL STORAGE ---
  const [wishlist, setWishlist] = useState(() => {
    try {
      const storedWishlist = localStorage.getItem("wishlist");
      return storedWishlist ? JSON.parse(storedWishlist) : [];
    } catch (e){
      return [];
    }
  });

  // --- SYNC CART ---
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // --- SYNC WISHLIST ---
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // --- WISHLIST HANDLERS ---
  const isProductInWishlist = (productId) => wishlist.includes(productId);

  const toggleWishlist = (productId) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  // --- CART HANDLERS ---
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        // Increase quantity if exists
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      }

      // Add new item
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateCartQuantity = (productId, qty) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: qty } : item
      )
    );
  };

  const removeProductFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  return {
    cart,
    wishlist,
    isProductInWishlist,
    toggleWishlist,
    addToCart,
    updateCartQuantity,
    removeProductFromCart,
  };
};

export default useCartWishlist;
