import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const Carousel = ({ articles }) => {
  const slides = articles.filter((item) => item.urlToImage).slice(0, 5);

  return (
    <div className="w-full rounded-lg overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000 }}
        loop
        className="rounded-lg"
      >
        {slides.map((article) => {
          const realIndex = articles.indexOf(article);
          return (
            <SwiperSlide key={realIndex}>
              <Link to={`/article/${realIndex}`}>
                <div className="relative h-64 md:h-80">
                  <img
                    src={article.urlToImage}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                    <h2 className="text-lg font-bold">{article.title}</h2>
                    <p className="text-sm">
                      {article.publishedAt?.slice(0, 10)}
                    </p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Carousel;
