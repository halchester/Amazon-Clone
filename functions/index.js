const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")(
  "sk_test_51I0fz0Fjz7NZ6kdxDVuPozi0nHflE7XwzGwQA2E90Z6G0Vti70U7vebN8FK5jvIgqotv89qp0Uh5meMd4flgg5w200oAVKt1Ol"
);

//APIs

//App configs
const app = express();

//Middle wares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
//listen commands
exports.api = functions.https.onRequest(app);

//http://localhost:5001/clone-45d27/us-central1/api
