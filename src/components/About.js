import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="about__title">About Our Brand</h2>
        <div className="about__content">
          <div className="about__text">
            <p>
              We are passionate about creating exceptional timepieces that combine 
              traditional craftsmanship with modern innovation. Our watches are more 
              than just accessories – they are statements of style, precision, and 
              individuality.
            </p>
            <p>
              Each watch in our collection is carefully designed and crafted using 
              the finest materials and Swiss movements. We believe that luxury 
              should be accessible without compromising on quality, which is why 
              we offer premium timepieces at competitive prices.
            </p>
            <div className="about__features">
              <div className="about__feature">
                <i className="ri-award-line"></i>
                <h3>Premium Quality</h3>
                <p>Swiss-made movements and premium materials</p>
              </div>
              <div className="about__feature">
                <i className="ri-tools-line"></i>
                <h3>Expert Craftsmanship</h3>
                <p>Hand-assembled by skilled watchmakers</p>
              </div>
              <div className="about__feature">
                <i className="ri-heart-line"></i>
                <h3>Customer Satisfaction</h3>
                <p>5-year warranty and exceptional service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
