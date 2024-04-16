import React from "react";
import Slider from "react-slick";
import { Heart } from "react-bootstrap-icons/dist";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CarsouelDressesData } from "./CarsouelDressesData";

const CarouselDresses = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1230,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 relative">
      <Slider {...settings}>
        {CarsouelDressesData.map((item) => (
          <div
            key={item.key}
            className=" gap-8 rounded-2xl overflow-hidden shadow-lg bg-white relative "
          >
            <img
              className="w-full h-52 object-cover"
              src={item.img}
              alt={item.title}
            />
            {item.sale.length > 0 && (
              <div className="absolute top-0 right-0 p-3 rounded-bl-2xl bg-red-500 text-white rounded-tr-2xl">
                {item.sale}
              </div>
            )}
            <div className="absolute top-44 right-1">
              <Heart
                className="text-green-700 bg-green-200 hover:bg-green-500 hover:text-white w-8 h-8"
                size={24}
              />
            </div>
            <div className="px-4 py-2">
              <div className="font-medium text-lg">{item.title}</div>
              <div className="border-t border-gray-300"></div>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <span className="text-lg font-semibold text-gray-700 mr-2">
                    {item.price}
                  </span>
                  <span className="rounded-full line-through text-sm font-semibold text-slate-300">
                    {item.discount}
                  </span>
                </div>
                <button className="px-6 text-sky-500 border-2 border-sky-400 rounded-2xl hover:bg-sky-500 hover:text-white">
                  Option
                </button>
              </div>
              <p className="text-gray-700 text-base py-2">{item.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselDresses;
