import Img1 from "../../images/office.jpg"
import Img2 from "../../images/office_laptop.jpg"
import Img3 from "../../images/office_people.jpg"
import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import * as sliderStyles from "./slider.module.css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
// Import Swiper styles
import "swiper/css"
const Slider = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={swiper => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <img src={Img2} className={sliderStyles.img} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Img2} className={sliderStyles.img} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Img2} className={sliderStyles.img} />
      </SwiperSlide>
    </Swiper>
  )
}

export default Slider
