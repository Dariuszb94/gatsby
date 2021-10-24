import React from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import { StaticImage } from "gatsby-plugin-image"

import "./swiper.css"

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper"

// install Swiper modules
SwiperCore.use([Navigation])

const Slider = () => {
  return (
    <>
      <Swiper navigation={true} className="mySwiper">
        <SwiperSlide>
          <StaticImage src="../../images/office.jpg" alt="A dinosaur" />
        </SwiperSlide>
        <SwiperSlide>
          <StaticImage src="../../images/office_laptop.jpg" alt="A dinosaur" />
        </SwiperSlide>
        <SwiperSlide>
          <StaticImage src="../../images/office_people.jpg" alt="A dinosaur" />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Slider
