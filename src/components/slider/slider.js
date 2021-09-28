import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"
import Img1 from "../../images/office.jpg"
import Img2 from "../../images/office_laptop.jpg"
import Img3 from "../../images/office_people.jpg"

const Slider = () => {
  return (
    <Carousel showThumbs={false} showStatus={false}>
      <div>
        <img src={Img1} />
      </div>
      <div>
        <img src={Img2} />
      </div>
      <div>
        <img src={Img3} />
      </div>
    </Carousel>
  )
}

export default Slider
