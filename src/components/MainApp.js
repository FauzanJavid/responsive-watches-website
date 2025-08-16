import React, { useEffect, useState } from 'react';
import Header from './Header';
import Home from './Home';
import WatchesList from './WatchesList';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import ShoppingCart from './ShoppingCart';

const MainApp = ({ currentUser, onLogout }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Import GSAP and Swiper dynamically
    const loadScripts = async () => {
      try {
        // Load GSAP
        const gsap = await import('gsap');
        window.gsap = gsap.default;
        
        // Load Swiper
        const Swiper = await import('swiper');
        window.Swiper = Swiper.default;
        
        // Initialize animations after scripts are loaded
        if (window.gsap) {
          // GSAP animations can be initialized here
          console.log('GSAP loaded successfully');
        }
      } catch (error) {
        console.error('Error loading scripts:', error);
      }
    };

    loadScripts();
  }, []);

  const addToCart = (watch) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === watch.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === watch.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...watch, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId, newQuantity) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className="App">
      <Header currentUser={currentUser} onLogout={onLogout} />
      <main className="main">
        <Home />
        <WatchesList addToCart={addToCart} />
        <About />
        <Contact />
      </main>
      <Footer />
      <ShoppingCart
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
        clearCart={clearCart}
      />
    </div>
  );
};

export default MainApp;
