import { Link, useHistory } from "react-router-dom";
import React, { useState } from "react";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { useEffect } from "react";
import axios from "./axios";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    // generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // Stripe expects the total in a currencies subunits
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);
  console.log("CLIENT SECRET KEY >>> ", clientSecret);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        setSucceeded(true);
        setError(null);
        setProcessing(false);

        history.replace("/orders");
      });
  };

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  const getBasketTotal = (basket) => {
    return basket?.reduce((amount, item) => {
      return item.price + amount;
    }, 0);
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (
          <Link to="/checkout" style={{ textDecoration: "none" }}>
            {basket?.length} items
          </Link>
          )
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>12/A,London Road,</p>
            <p>London, Myanmar</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => {
              return (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                ></CheckoutProduct>
              );
            })}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__price__container">
                <CurrencyFormat
                  renderText={(value) => {
                    return <h3>Order total : {value}</h3>;
                  }}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
