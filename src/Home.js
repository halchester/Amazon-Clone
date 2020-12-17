import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="banner"
        ></img>

        <div className="home__row">
          <Product
            id = '12121212'
            title="The Lean Start Up, a book that makes you wanna regret every shitty decision u've done in ur lift"
            price={29.99}
            image="http://pngimg.com/uploads/book/book_PNG51112.png"
            rating={5}
          />
          <Product
            id = '1212112'
            title="Apple's latest earphones that are actually wireless but they throw in a wire to connect those so u wont lose them"
            price={199.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/21zodo7QkUL._AC_SY200_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id = '12121231'
            title="Connect4, toys for kids"
            price={4.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/91ldZZwCMqL._AC_SY400_.jpg"
          />
          <Product
            id = '1212982'
            title="Jenga for kids or adults or whoever"
            price={4.99}
            rating={2}
            image="https://m.media-amazon.com/images/I/81OAWwX3djL._AC_UL640_FMwebp_QL65_.jpg"
          />
          <Product
            id = '5829582'
            title="VR glasses so you can escape reality and forget u r a complete horseshit"
            price={299.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71URNvzoWqL._AC_UY436_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id = '1274819'
            title="Gigantic samsung monitor that nobody needs but rich people are gonna buy it"
            price={1099.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/91-hWcNu2yL._AC_UY436_FMwebp_QL65_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
