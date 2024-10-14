import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import slider_image1 from "../src/assets/tranding-food-1.png";
import slider_image2 from "../src/assets/tranding-food-2.png";
import slider_image3 from "../src/assets/tranding-food-3.png";
import slider_image4 from "../src/assets/tranding-food-4.png";
import slider_image5 from "../src/assets/tranding-food-5.png";
import slider_image6 from "../src/assets/tranding-food-6.png";
import slider_image7 from "../src/assets/tranding-food-7.png";

function App() {
  return (
    <div className="container">
      <h2 className="heading">Flower Gallery</h2>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        className="swiper_container"
      >
        {[slider_image1, slider_image2, slider_image3, slider_image4, slider_image5, slider_image6, slider_image7].map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Flower ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
          </SwiperSlide>
        ))}

        <div className="slider-controller">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default App; 