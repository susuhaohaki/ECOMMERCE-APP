import express from "express";
import {
  placeOrder,
  placeOderStripe,
  placeOrderRazorpay,
  allOrders,
  userOrders,
  updateStatus,
  verifyStripe,
} from "../controller/orderController.js";
import adminAuth from "./../middleware/adminAuth.js";
import userAuth from "../middleware/userAuth.js";
const orderRouter = express.Router();

//Admin Features
orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);

//Payment Feature
orderRouter.post("/place", userAuth, placeOrder);
orderRouter.post("/stripe", userAuth, placeOderStripe);
// orderRouter.post("/razorpay", userAuth, placeOrderRazorpay);

//user Feature
orderRouter.post("/userorders", userAuth, userOrders);

//verify payment
orderRouter.post("/verifyStripe", userAuth, verifyStripe);
export default orderRouter;
