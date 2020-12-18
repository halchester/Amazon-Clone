import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./Login.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    //login
  };
  const register = (e) => {
    e.preventDefault();
    //
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG21.png"
          alt=""
          className="login__logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            onClick={signIn}
            className="login__signin__button"
          >
            Sign in
          </button>
        </form>
        <p>
          By Signing in, you agree to Amazon's condition and policy that u never
          read and no one ever will.
        </p>
        <button onClick={register} className="login__register__button">
          Create an account
        </button>
      </div>
    </div>
  );
}

export default Login;
