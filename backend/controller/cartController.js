import userModel from "../models/userModel.js";

//all products to user cart
const addToCart = async (req, res) => {
  try {
    const { itemId, size, userId } = req.body;
    const userData = await userModel.findById(userId);
    let cartData = await userData.cartData;
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    await userModel.findByIdAndUpdate(userId, { cartData });
    res.json({ success: true, message: "added To Cart" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

//update products to user cart
const updateCart = async (req, res) => {
  try {
    const { userId, itemId, size, quantity } = req.body;
    const userData = await userModel.findById(userId);
    let cartData = await userData.cartData;
    cartData[itemId][size] = quantity;
    await userModel.findByIdAndUpdate(userId, { cartData });
    res.json({ success: true, message: "updated To Cart" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

//get user cart data
const getUserCart = async (req, res) => {
  try {
    const { userId } = req.body;
    const userData = await userModel.findById(userId);
    let cartData = await userData.cartData;
    res.json({ success: true, cartData });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

//rest cartData user
const resetCartData = async (req, res) => {
  try {
    const { userId } = req.body;

    // Tìm người dùng theo ID và cập nhật cartData về {}
    const updatedUser = await userModel.findByIdAndUpdate(
      userId,
      { cartData: {} },
      { new: true }
    );

    if (!updatedUser) {
      return res.json({ success: false, message: "User not found" });
    }

    res.json({
      success: true,
      message: "Cart data reset successfully",
      user: updatedUser,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Error resetting cart data",
      error: error.message,
    });
  }
};

export { addToCart, updateCart, getUserCart, resetCartData };
