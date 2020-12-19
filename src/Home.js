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
            id="12121212"
            title="The Lean Start Up, a book that makes you wanna regret every shitty decision u've done in ur life"
            price={29.99}
            image="http://pngimg.com/uploads/book/book_PNG51112.png"
            rating={5}
          />
          <Product
            id="1212112"
            title="Apple's latest earphones that are actually wireless but they throw in a wire to connect those so u wont lose them"
            price={199.99}
            rating={4}
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.QB0Vq54ef34lLTC2p_oqTgHaEt%26pid%3DApi&f=1"
          />
        </div>
        <div className="home__row">
          <Product
            id="12121231"
            title="Connect4, toys for kids"
            price={4.99}
            rating={4}
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.vON52KaNJsksbyH-SbhyXQHaHa%26o%3D6%26pid%3DApi&f=1"
          />
          <Product
            id="1212982"
            title="Jenga for kids or adults or whoever"
            price={4.99}
            rating={2}
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.gUACWbSXNwBsisXhV2G0IAHaHa%26pid%3DApi&f=1"
          />
          <Product
            id="5829582"
            title="VR glasses so you can escape reality and forget u r a complete horseshit"
            price={299.99}
            rating={5}
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.lH6YYl_6TnnV95EcI37X3wHaEu%26pid%3DApi&f=1"
          />
        </div>
        <div className="home__row">
          <Product
            id="1274819"
            title="Gigantic samsung monitor that nobody needs but rich people are gonna buy it"
            price={1099.99}
            rating={5}
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.E3fCYYxFXU1SwhVRRRE5wAHaF7%26pid%3DApi&f=1"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
