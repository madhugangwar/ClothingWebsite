import React from 'react';
import PRODUCTS_DATA from './productData'; 

const WishlistPage = ({ wishlist, toggleWishlist, addToCart, handleNavClick, theme }) => {
  const cardClass = theme === 'dark' ? 'list-group-item-dark' : 'bg-light text-dark';

  const wishlistProducts = PRODUCTS_DATA.filter(product => wishlist.includes(product.id));

  return (
    <main className="container py-5">
      <h1 className="mb-4 text-center head-colr">Your Wishlist ({wishlistProducts.length})</h1>
      <div className={`p-4 rounded-4 shadow-lg ${theme === 'dark' ? 'card-dark' : 'bg-white'}`}>
        {wishlistProducts.length === 0 ? (
          <div className="text-center py-5">
            <i className="bi bi-heart text-danger display-1 mb-3"></i>
            <p className="lead">Your wishlist is empty. Add your favorite items!</p>
            <button className="btn btn-primary mt-3 rounded-pill" onClick={() => handleNavClick('Home')}>View Products</button>
          </div>
        ) : (
          <div className="list-group">
            {wishlistProducts.map(item => (
              <div key={item.id} className={`list-group-item d-flex flex-column flex-md-row align-items-md-center justify-content-between mb-3 p-3 rounded-4 ${cardClass}`}>
                <div className="d-flex align-items-center mb-2 mb-md-0">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="me-3 rounded-3" 
                    style={{ width: '80px', height: '80px', objectFit: 'cover' }} 
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/80x80/808080/ffffff?text=X"; }}
                  />
                  <div>
                    <h5 className="mb-0 text-truncate" style={{maxWidth: '250px'}}>{item.name}</h5>
                    <p className="mb-0 text-success fw-bold">₹{item.price.toLocaleString()}</p>
                  </div>
                </div>
                <div className="d-flex w-100 w-md-auto justify-content-end">
                  <button className="btn btn-info btn-sm me-2 rounded-pill" onClick={() => { addToCart(item); handleNavClick('Cart'); }}>
                    <i className="bi bi-cart"></i> Add to Cart
                  </button>
                  <button className="btn btn-outline-danger btn-sm rounded-pill" onClick={() => toggleWishlist(item.id)}>
                    <i className="bi bi-x-lg"></i> Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default WishlistPage;
