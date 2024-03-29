import express from "express";
import Stripe from "stripe";

const stripe = new Stripe();
// add stripe key here

const router = express.Router();

const YOUR_DOMAIN = "http://localhost:3000";

router.post("/create-checkout-session", async (req, res) => {
  console.log(req.body.price);
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price_data: {
          currency: "usd",
          product_data: {
            name: "TreeTip Booking",
          },
          unit_amount: req.body.price * 100,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${YOUR_DOMAIN}/success`,
    cancel_url: `${YOUR_DOMAIN}/canceled`,
  });

  res.json({ url: session.url });
});

export default router;
