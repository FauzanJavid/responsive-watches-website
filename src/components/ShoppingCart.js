import React, { useState } from 'react';
import './ShoppingCart.css';

const ShoppingCart = ({ cart, removeFromCart, updateQuantity, clearCart }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState('cart'); // cart, shipping, payment, confirmation

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  const formatPrice = (price) => {
    return price.toLocaleString('en-IN');
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;
    setCheckoutStep('shipping');
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    updateQuantity(itemId, newQuantity);
  };

  const handleRemoveItem = (itemId) => {
    removeFromCart(itemId);
  };

  const renderCartItems = () => (
    <div className="cart-items">
      {cart.length === 0 ? (
        <div className="cart-empty">
          <i className="ri-shopping-bag-line"></i>
          <p>Your cart is empty</p>
          <span>Add some watches to get started!</span>
        </div>
      ) : (
        cart.map(item => (
          <div key={item.id} className="cart-item">
            <div className="cart-item__image">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="cart-item__details">
              <h4 className="cart-item__name">{item.name}</h4>
              <p className="cart-item__price">₹{formatPrice(item.price)}</p>
            </div>
            <div className="cart-item__quantity">
              <button
                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                disabled={item.quantity <= 1}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
              >
                +
              </button>
            </div>
                         <div className="cart-item__total">
               ₹{formatPrice(item.price * item.quantity)}
             </div>
            <button
              className="cart-item__remove"
              onClick={() => handleRemoveItem(item.id)}
            >
              <i className="ri-delete-bin-line"></i>
            </button>
          </div>
        ))
      )}
    </div>
  );

  const renderShippingForm = () => (
    <div className="checkout-form">
      <h3>Shipping Information</h3>
      <form className="form">
        <div className="form__row">
          <div className="form__group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" required />
          </div>
          <div className="form__group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" required />
          </div>
        </div>
        <div className="form__group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />
        </div>
        <div className="form__group">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" required />
        </div>
        <div className="form__row">
          <div className="form__group">
            <label htmlFor="city">City</label>
            <input type="text" id="city" required />
          </div>
          <div className="form__group">
            <label htmlFor="zipCode">ZIP Code</label>
            <input type="text" id="zipCode" required />
          </div>
        </div>
        <div className="form__group">
          <label htmlFor="country">Country</label>
          <select id="country" required>
            <option value="">Select Country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="UK">United Kingdom</option>
            <option value="AU">Australia</option>
          </select>
        </div>
        <div className="form__actions">
          <button type="button" onClick={() => setCheckoutStep('cart')}>
            Back to Cart
          </button>
          <button type="button" onClick={() => setCheckoutStep('payment')}>
            Continue to Payment
          </button>
        </div>
      </form>
    </div>
  );

  const renderPaymentForm = () => (
    <div className="checkout-form">
      <h3>Payment Information</h3>
      <form className="form">
        <div className="form__group">
          <label htmlFor="cardNumber">Card Number</label>
          <input type="text" id="cardNumber" placeholder="1234 5678 9012 3456" required />
        </div>
        <div className="form__row">
          <div className="form__group">
            <label htmlFor="expiry">Expiry Date</label>
            <input type="text" id="expiry" placeholder="MM/YY" required />
          </div>
          <div className="form__group">
            <label htmlFor="cvv">CVV</label>
            <input type="text" id="cvv" placeholder="123" required />
          </div>
        </div>
        <div className="form__group">
          <label htmlFor="cardName">Name on Card</label>
          <input type="text" id="cardName" required />
        </div>
        <div className="form__actions">
          <button type="button" onClick={() => setCheckoutStep('shipping')}>
            Back to Shipping
          </button>
          <button type="button" onClick={() => setCheckoutStep('confirmation')}>
            Complete Order
          </button>
        </div>
      </form>
    </div>
  );

  const renderConfirmation = () => (
    <div className="checkout-confirmation">
      <div className="confirmation-icon">
        <i className="ri-check-line"></i>
      </div>
      <h3>Order Confirmed!</h3>
      <p>Thank you for your purchase. Your order has been successfully placed.</p>
      <div className="order-summary">
        <h4>Order Summary</h4>
        <p>Total Items: {totalItems}</p>
                 <p>Total Amount: ₹{formatPrice(totalPrice)}</p>
        <p>Order ID: #{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
      </div>
      <button onClick={() => {
        setCheckoutStep('cart');
        clearCart();
        setIsOpen(false);
      }}>
        Continue Shopping
      </button>
    </div>
  );

  const renderCheckoutContent = () => {
    switch (checkoutStep) {
      case 'shipping':
        return renderShippingForm();
      case 'payment':
        return renderPaymentForm();
      case 'confirmation':
        return renderConfirmation();
      default:
        return (
          <>
            {renderCartItems()}
            {cart.length > 0 && (
              <div className="cart-summary">
                <div className="cart-total">
                  <span>Total ({totalItems} items):</span>
                  <span className="cart-total__price">₹{formatPrice(totalPrice)}</span>
                </div>
                <div className="cart-actions">
                  <button onClick={clearCart} className="cart-clear">
                    Clear Cart
                  </button>
                  <button onClick={handleCheckout} className="cart-checkout">
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            )}
          </>
        );
    }
  };

  return (
    <>
      {/* Cart Toggle Button */}
      <button className="cart-toggle" onClick={() => setIsOpen(!isOpen)}>
        <i className="ri-shopping-cart-line"></i>
        {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
      </button>

      {/* Cart Sidebar */}
      <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h3>
            {checkoutStep === 'cart' && 'Shopping Cart'}
            {checkoutStep === 'shipping' && 'Shipping Information'}
            {checkoutStep === 'payment' && 'Payment Information'}
            {checkoutStep === 'confirmation' && 'Order Confirmation'}
          </h3>
          {checkoutStep === 'cart' && (
            <button className="cart-close" onClick={() => setIsOpen(false)}>
              <i className="ri-close-line"></i>
            </button>
          )}
        </div>
        
        <div className="cart-content">
          {renderCheckoutContent()}
        </div>
      </div>

      {/* Cart Overlay */}
      {isOpen && (
        <div className="cart-overlay" onClick={() => setIsOpen(false)}></div>
      )}
    </>
  );
};

export default ShoppingCart;
