import React, { useState } from 'react';
import './WatchesList.css';

const WatchesList = ({ addToCart }) => {
  const [watches] = useState([
    {
      id: 1,
      name: "Baume Custom Timepiece",
      price: 620,
      image: "/assets/img/watches-1.png",
      description: "Swiss-made precision with custom design",
      category: "luxury",
      inStock: true
    },
    {
      id: 2,
      name: "Classic Chronograph",
      price: 450,
      image: "/assets/img/watches-2.png",
      description: "Timeless design meets modern technology",
      category: "classic",
      inStock: true
    },
    {
      id: 3,
      name: "Sport Adventure",
      price: 380,
      image: "/assets/img/watches-3.png",
      description: "Built for adventure and durability",
      category: "sport",
      inStock: true
    },
    {
      id: 4,
      name: "Minimalist Elegance",
      price: 520,
      image: "/assets/img/watches-1.png",
      description: "Clean lines and sophisticated style",
      category: "minimalist",
      inStock: false
    },
    {
      id: 5,
      name: "Heritage Collection",
      price: 890,
      image: "/assets/img/watches-2.png",
      description: "Limited edition heritage timepiece",
      category: "heritage",
      inStock: true
    },
    {
      id: 6,
      name: "Modern Automatic",
      price: 650,
      image: "/assets/img/watches-3.png",
      description: "Self-winding mechanical movement",
      category: "automatic",
      inStock: true
    }
  ]);

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const categories = ['all', 'luxury', 'classic', 'sport', 'minimalist', 'heritage', 'automatic'];

  const filteredWatches = watches
    .filter(watch => selectedCategory === 'all' || watch.category === selectedCategory)
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

  const handleAddToCart = (watch) => {
    addToCart(watch);
  };

  return (
    <section className="watches-list" id="watches">
      <div className="container">
        <h2 className="watches-list__title">Our Collection</h2>
        
        {/* Filters and Sorting */}
        <div className="watches-list__controls">
          <div className="watches-list__filters">
            <label htmlFor="category-filter">Category:</label>
            <select
              id="category-filter"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>
          
          <div className="watches-list__sort">
            <label htmlFor="sort-by">Sort by:</label>
            <select
              id="sort-by"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="name">Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Watches Grid */}
        <div className="watches-list__grid">
          {filteredWatches.map(watch => (
            <div key={watch.id} className="watch-card">
              <div className="watch-card__image">
                <img src={watch.image} alt={watch.name} />
                {!watch.inStock && (
                  <div className="watch-card__out-of-stock">Out of Stock</div>
                )}
              </div>
              
              <div className="watch-card__content">
                <h3 className="watch-card__name">{watch.name}</h3>
                <p className="watch-card__description">{watch.description}</p>
                <div className="watch-card__category">{watch.category}</div>
                                 <div className="watch-card__price">₹{watch.price * 83}</div>
                
                <button
                  className={`watch-card__button ${!watch.inStock ? 'disabled' : ''}`}
                  onClick={() => handleAddToCart(watch)}
                  disabled={!watch.inStock}
                >
                  {watch.inStock ? 'Add to Cart' : 'Out of Stock'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WatchesList;
