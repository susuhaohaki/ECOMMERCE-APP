import express from "express";
import {
  addToCart,
  getUserCart,
  updateCart,
  resetCartData,
} from "../controller/cartController.js";
import userAuth from "../middleware/userAuth.js";

const cartRouter = express.Router();
cartRouter.post("/get", userAuth, getUserCart);
cartRouter.post("/add", userAuth, addToCart);
cartRouter.post("/update", userAuth, updateCart);
cartRouter.post("/restcartdata", userAuth, resetCartData);

export default cartRouter;
