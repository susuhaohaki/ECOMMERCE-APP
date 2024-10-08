import { v2 as Cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";
//function for add product
const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestSeller,
    } = req.body;
    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];
    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    );
    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        let result = await Cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );
    const productData = {
      name,
      description,
      price: Number(price),
      category,
      subCategory,
      bestSeller: bestSeller === "true" ? true : false,
      sizes: JSON.parse(sizes),
      image: imagesUrl,
      date: Date.now(),
    };
    const product = new productModel(productData);
    await product.save();
    res.json({
      success: true,
      message: "Product Added",
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

//function for list product
const listProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({
      success: true,
      products,
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Function for removing product
const removeProduct = async (req, res) => {
  try {
    // Find the product by its ID
    const product = await productModel.findById(req.body.productId);
    if (!product) {
      return res.json({ success: false, message: "Product not found" });
    }

    // Extract Cloudinary public IDs from the product's image URLs
    const images = product.image; // Assuming `product.image` contains an array of image URLs
    const imagePublicIds = images.map((url) => {
      const parts = url.split("/");
      const filename = parts[parts.length - 1];
      const publicId = filename.split(".")[0]; // Get the file name without the extension
      return publicId;
    });

    // Remove the images from Cloudinary
    await Promise.all(
      imagePublicIds.map((publicId) =>
        Cloudinary.uploader.destroy(publicId, {
          resource_type: "image",
        })
      )
    );

    // Remove the product from the database
    await productModel.findByIdAndDelete(req.body.productId);

    res.json({ success: true, message: "Product removed" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// function for single product
const singleProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    const product = await productModel.findById(productId);
    res.json({ success: true, product });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export { addProduct, listProducts, removeProduct, singleProduct };
