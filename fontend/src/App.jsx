// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Collection from "./pages/Collection";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Product from "./pages/Product";
// import Cart from "./pages/Cart";
// import Login from "./pages/Login";
// import PlaceOrder from "./pages/PlaceOrder";
// import Orders from "./pages/Orders";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import SearchBar from "./components/SearchBar";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Verify from "./pages/Verify";
// const App = () => {
//   return (
//     <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
//       <ToastContainer autoClose={1000} />
//       <Navbar />
//       <SearchBar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/collection" element={<Collection />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/product/:productId" element={<Product />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/place-order" element={<PlaceOrder />} />
//         <Route path="/orders" element={<Orders />} />
//         <Route path="/verify" element={<Verify />} />
//       </Routes>
//       <Footer />
//     </div>
//   );
// };
// export default App;



// import React, { useEffect } from "react";
// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Collection from "./pages/Collection";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Product from "./pages/Product";
// import Cart from "./pages/Cart";
// import Login from "./pages/Login";
// import PlaceOrder from "./pages/PlaceOrder";
// import Orders from "./pages/Orders";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import SearchBar from "./components/SearchBar";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Verify from "./pages/Verify";

// const App = () => {
//   useEffect(() => {
//     // Thêm script vào trang
//     const script = document.createElement("script");
//     script.src = "https://embed.tawk.to/67d6e94fe009211911ba88f2/1imfnuouf";
//     script.async = true;
//     script.charset = "UTF-8";
//     script.setAttribute("crossorigin", "*");
//     document.body.appendChild(script);

//     return () => {
//       // Xóa script khi component bị unmount để tránh lỗi
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
//       <ToastContainer autoClose={1000} />
//       <Navbar />
//       <SearchBar />

//       {/* Các tuyến đường */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/collection" element={<Collection />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/product/:productId" element={<Product />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/place-order" element={<PlaceOrder />} />
//         <Route path="/orders" element={<Orders />} />
//         <Route path="/verify" element={<Verify />} />
//       </Routes>

//       <Footer />
//     </div>
//   );
// };

// export default App;

import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Verify from "./pages/Verify";

const App = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.fchat.vn/assets/embed/webchat.js?id=67d6ff6c7ae51616200afc56";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Xóa script khi component unmount
    };
  }, []);

  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <ToastContainer autoClose={1000} />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/verify" element={<Verify />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
