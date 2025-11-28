import React from 'react';

const ProductCard = ({ product, theme, isProductInWishlist, toggleWishlist, addToCart }) => {
  const isWished = isProductInWishlist(product.id);
  const themeClass = theme === 'dark' ? 'card-dark text-white border-secondary' : 'bg-white text-dark shadow-lg';

  return (
    <div className={`card h-100 ${themeClass} card-product rounded-4`}>
      <img
        src={product.image}
        className="card-img-top p-2 rounded-lg"
        alt={product.name}
        style={{ height: '250px', objectFit: 'cover' }}
        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x400/808080/ffffff?text=Image+Missing"; }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title mb-1 text-truncate">{product.name}</h5>
        <p className="card-text small mb-1">
          <span className="badge btn-cart me-2">{product.category}</span>
          <span className="badge pro-info">{product.season}</span>
        </p>
        <p className="card-text fw-bold text-success mt-auto">₹{product.price.toLocaleString()}</p>

        <div className="d-flex justify-content-between align-items-center">
          <i
            className={`bi ${isWished ? 'bi-heart-fill liked-heart' : 'bi-heart unliked-heart'} heart-icon`}
            onClick={() => toggleWishlist(product.id)}
          ></i>
          <button
            className="btn btn-cart btn-sm flex-grow-1 rounded-pill ms-3"
            onClick={() => addToCart(product)}
          >
            <i className="bi bi-cart me-1"></i> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
