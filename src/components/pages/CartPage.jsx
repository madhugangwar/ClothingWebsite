// Component: CartPage (Simulated: src/components/pages/CartPage.jsx)
const CartPage = ({ cart, updateCartQuantity, removeProductFromCart, handleNavClick, theme }) => {
    const cardClass = theme === 'dark' ? 'list-group-item-dark' : 'bg-light text-dark';
    
    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const shipping = subtotal > 5000 || cart.length === 0 ? 0 : 200;
    const total = subtotal + shipping;

    return (
      <main className="container py-5">
        <h1 className="mb-4 text-center head-colr">Your Shopping Cart ({cart.length})</h1>
        <div className="row">
          
          {/* Cart Items List */}
          <div className="col-lg-8 mb-4 mb-lg-0">
            {cart.length === 0 ? (
              <div className={`text-center py-5 rounded-4 shadow-lg ${theme === 'dark' ? 'card-dark' : 'bg-white'}`}>
                <i className="bi bi-bag text-info display-1 mb-3"></i>
                <p className="lead">Your cart is empty. Let's find something great!</p>
                <button className="btn btn-primary mt-3 rounded-pill" onClick={() => handleNavClick('Home')}>Start Shopping</button>
              </div>
            ) : (
              <div className="list-group">
                {cart.map(item => (
                  <div key={item.id} className={`list-group-item d-flex flex-column flex-md-row align-items-md-center justify-content-between mb-3 p-3 rounded-4 ${cardClass}`}>
                    <div className="d-flex align-items-center mb-2 mb-md-0">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="me-3 rounded-3" 
                        style={{ width: '80px', height: '80px', objectFit: 'cover' }} 
                        onError={(e) => { e.target.onerror = null; e.target.src = "https://www.shutterstock.com/image-vector/online-shopping-concept-illustration-shop-260nw-600917831.jpg"; }}
                      />
                      <div>
                        <h5 className="mb-0 text-truncate" style={{maxWidth: '250px'}}>{item.name}</h5>
                        <p className="mb-0 text-success fw-bold">₹{(item.price * item.quantity).toLocaleString()}</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      {/* Quantity Controls */}
                      <div className="input-group input-group-sm me-3" style={{ width: '120px' }}>
                        <button className="btn btn-outline-secondary" type="button" onClick={() => updateCartQuantity(item.id, -1)}>-</button>
                        <input type="text" className={`form-control text-center ${cardClass}`} value={item.quantity} readOnly style={{ borderLeft: 0, borderRight: 0, color: theme === 'dark' ? 'white' : 'black', backgroundColor: theme === 'dark' ? '#343a40' : '#f8f9fa'}} />
                        <button className="btn btn-outline-secondary" type="button" onClick={() => updateCartQuantity(item.id, 1)}>+</button>
                      </div>
                      <button className="btn btn-danger btn-sm rounded-pill" onClick={() => removeProductFromCart(item.id)}>
                        <i className="bi bi-trash"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Cart Summary */}
          <div className="col-lg-4">
            <div className={`p-4 rounded-4 shadow-lg ${theme === 'dark' ? 'card-dark' : 'bg-light'}`}>
              <h4 className="mb-3 border-bottom pb-2 text-primary">Order Summary</h4>
              <ul className="list-unstyled mb-4">
                <li className="d-flex justify-content-between mb-2">
                  <span>Subtotal ({cart.length} items):</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </li>
                <li className="d-flex justify-content-between mb-2">
                  <span>Shipping:</span>
                  <span className={shipping === 0 ? 'text-success fw-bold' : 'text-danger'}>
                    {shipping === 0 ? 'FREE' : `₹${shipping.toLocaleString()}`}
                  </span>
                </li>
                <li className="d-flex justify-content-between pt-3 border-top border-primary fw-bold">
                  <span className="h5">Total:</span>
                  <span className="h5">₹{total.toLocaleString()}</span>
                </li>
              </ul>
              <button 
                className="btn btn-lg btn-primary w-100 rounded-pill" 
                disabled={cart.length === 0}
                onClick={() => console.log("Checkout: Order initiated with total: ₹" + total.toLocaleString())}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  };
  export default CartPage;

  