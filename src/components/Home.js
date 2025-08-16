import React, { useEffect, useRef } from 'react';
import './Home.css';

const Home = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    // Initialize Swiper when component mounts
    const initSwiper = async () => {
      if (window.Swiper && swiperRef.current) {
        const Swiper = window.Swiper;
        
        new Swiper(swiperRef.current, {
          loop: true,
          spaceBetween: 32,
          grabCursor: true,
          effect: 'creative',
          creativeEffect: {
            prev: {
              translate: [-100, 0, -500],
              rotate: [0, 0, -15],
              scale: 1,
            },
            next: {
              translate: [100, 0, -500],
              rotate: [0, 0, 15],
              scale: 1,
            },
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          breakpoints: {
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          },
        });
      }
    };

    // Wait for Swiper to be available
    const checkSwiper = setInterval(() => {
      if (window.Swiper) {
        clearInterval(checkSwiper);
        initSwiper();
      }
    }, 100);

    return () => clearInterval(checkSwiper);
  }, []);

  return (
    <section className="home" id="home">
      <div className="home__container container grid">
        <div className="home__content">
          <h1 className="home__title">
            Baume Custom <br />
            Timepiece Small <br />
            Second
          </h1>
          
          <div className="home__price">
            <span className="home__price-currency">₹</span>
            <span className="home__price-number">51,460</span>
          </div>

          <div className="home__actions">
            <button 
              className="home__button"
              onClick={() => document.getElementById('watches').scrollIntoView({ behavior: 'smooth' })}
            >
              SHOP NOW
            </button>
            <button 
              className="home__button-link"
              onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
            >
              LEARN MORE
            </button>
          </div>

          <p className="home__info-description">
            Personalized watches are a job of quality and commitment. 
            Each piece is the result of a work of co-creation of innovation 
            and responsible sensitivity for users.
          </p>
        </div>



        <div className="home__group">
          <div className="home__images">
            <div className="home__image-swatch">
              <img src="/assets/img/watches-border.png" alt="Watch border" />
            </div>
            
            <div className="home__image" ref={swiperRef}>
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img src="/assets/img/watches-1.png" alt="Watch 1" />
                </div>
                <div className="swiper-slide">
                  <img src="/assets/img/watches-2.png" alt="Watch 2" />
                </div>
                <div className="swiper-slide">
                  <img src="/assets/img/watches-3.png" alt="Watch 3" />
                </div>
              </div>
              
              <div className="swiper-pagination"></div>
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
