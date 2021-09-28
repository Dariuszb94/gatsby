import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"
import Img1 from "../../images/office.jpg"
import Img2 from "../../images/office_laptop.jpg"
import Img3 from "../../images/office_people.jpg"

const Slider = () => {
  return (
    <>
      {/* <Carousel showThumbs={false} showStatus={false}>
        <div>
          <img src={Img1} />
        </div>
        <div>
          <img src={Img2} />
        </div>
        <div>
          <img src={Img3} />
        </div>
      </Carousel> */}
      <Carousel showArrows={false} dynamicHeight={true}>
        <div key="slide1">
          <img src="http://placehold.it/350x150" />
        </div>
        <div key="slide2">
          <img src="http://placehold.it/255x150" />
        </div>
        <div key="slide3">
          <img src="http://placehold.it/295x150" />
        </div>
        <div key="slide4">
          <img src="http://placehold.it/310x150" />
        </div>
        <div key="slide5">
          <img src="http://placehold.it/575x250" />
        </div>
        <div key="slide6">
          <img src="http://placehold.it/450x150" />
        </div>
      </Carousel>
    </>
  )
}

export default Slider
