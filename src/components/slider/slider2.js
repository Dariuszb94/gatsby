import React, { useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import Img1 from "../../images/office.jpg"
import Img2 from "../../images/office_laptop.jpg"
import Img3 from "../../images/office_people.jpg"
// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import { StaticImage } from "gatsby-plugin-image"

import "./styles.css"

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper"

// install Swiper modules
SwiperCore.use([Navigation])

const Slider = () => {
  return (
    <>
      <Swiper navigation={true} className="mySwiper">
        <SwiperSlide>
          <StaticImage src={Img1} alt="A dinosaur" />
        </SwiperSlide>
        <SwiperSlide>
          <StaticImage src="../../images/office_laptop.jpg" alt="A dinosaur" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img3} />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Slider
