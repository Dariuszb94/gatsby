import { useSpring, animated } from "react-spring"
import { useState, useEffect } from "react"
import React from "react"
import * as iconsStyles from "./icons.module.css"

const useAnimatedPath = ({ toggle }) => {
  const [length, setLength] = useState(null)
  const animatedStyle = useSpring({
    strokeDashoffset: toggle ? 0 : length,
    strokeDasharray: length,
    delay: 400,
    config: { friction: 80 },
  })

  return {
    style: animatedStyle,
    ref: ref => {
      // The ref is `null` on component unmount
      if (ref) {
        setLength(ref.getTotalLength())
      }
    },
  }
}

const Part = ({ color, d, toggle }) => {
  const animationStrokeProps = useAnimatedPath({ toggle })

  return (
    <animated.path
      {...animationStrokeProps}
      // as the `animationStrokeProps` have a `style` property
      // on it, it would be overriden by just passing
      // `style={animationFillStyle}`

      stroke={color}
      strokeWidth="4"
      d={d}
    />
  )
}

const Icons = ({ inView }) => {
  const [toggle, setToggle] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setToggle(inView)
    }, 0)
  }, [inView])
  return (
    <div className={iconsStyles.iconContainer}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="84"
        fill="none"
        viewBox="0 0 70 120"
      >
        <Part
          toggle={toggle}
          d="M1 6C1 3.23858 3.23858 1 6 1H64C66.7614 1 69 3.23858 69 6V105C69 107.761 66.7614 110 64 110H6C3.23858 110 1 107.761 1 105V6ZM35 106C38.3137 106 41 103.314 41 100C41 96.6863 38.3137 94 35 94C31.6863 94 29 96.6863 29 100C29 103.314 31.6863 106 35 106Z"
          color="black"
          stroke="black"
        />
      </svg>
      <h3 className={iconsStyles.caption}>RWD</h3>
      <div className={iconsStyles.text}>
        Pellentesque ac pellentesque mi. Ut malesuada justo at neque fermentum
        maximus. Suspendisse viverra erat in aliquet sollicitudin. In orci
        nulla, elementum in diam eu, tincidunt aliquet lacus.
      </div>
    </div>
  )
}
export default Icons
