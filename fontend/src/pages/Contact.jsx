import React from "react";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import NewsletterBox from "../components/NewsletterBox";

const Contact = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          className="w-full md:max-w-[480px]"
          src={assets.contact_img}
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className=" text-gray-500">
            643 Xô Viết Nghệ Tĩnh, Phường 26, Bình Thạnh, Hồ Chí Minh 760000,
            Việt Nam
          </p>
          <p className=" text-gray-500">
            Tel: (+84) 1234-013-012 <br /> Email: nguyenhai250203@gmail.com
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default Contact;
