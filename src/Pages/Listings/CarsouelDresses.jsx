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
          <div key={item.key} className="p-4 rounded-2xl relative w-1/3 h-1/3">
            <div className="rounded-2xl overflow-hidden shadow-lg bg-white relative">
              <img
                className="w-full h-52 object-cover"
                src={item.img}
                alt={item.title}
              />
              <div
                className={
                  item.sale.length > 0
                    ? "absolute top-0 right-0 p-3 rounded-bl-2xl bg-red-500 text-white rounded-tr-2xl"
                    : ""
                }
              >
                {item.sale}
              </div>
              <div>
                <Heart
                  className="text-green-700 bg-green-200 hover:bg-green-500 hover:text-white w-8 h-8"
                  size={24}
                />
              </div>
              <div>
                <div className="font-medium text-lg px-4 py-2">
                  {item.title}
                </div>
                <div className="border-t border-gray-300"></div>

                <div className="px-4 py-1 flex justify-between">
                  <div>
                    <span className="inline-block text-lg py-1 font-semibold text-gray-700 mr-2 mb-2">
                      {item.price}
                    </span>
                    <span className="inline-block rounded-full line-through py-1 text-sm font-semibold text-slate-300 mr-2 mb-2">
                      {item.discount}
                    </span>
                  </div>
                  <button className="px-6 text-sky-500 border-2 border-sky-400 rounded-2xl hover:bg-sky-500 hover:text-white">
                    Option
                  </button>
                </div>
                <p className="text-gray-700 text-base px-4 py-2">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselDresses;
