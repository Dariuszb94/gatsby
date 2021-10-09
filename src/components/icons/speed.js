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

const Icons = () => {
  const [toggle, setToggle] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setToggle(true)
    }, 0)
  }, [])

  return (
    <div className={iconsStyles.iconContainer}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="84"
        fill="none"
        viewBox="0 0 105 114"
      >
        <Part
          toggle={toggle}
          d="M69.2128 1.49428L103.7 0.536306L62.6575 39.1358L61.7385 40H63H87.0746L40.6877 77.1096L39.5746 78H41H62.5782L2.37955 111.599L26.872 84.3341L27.6213 83.5H26.5H11.7071L48.3536 46.8536L49.1815 46.0256L48.0109 46.0001L26.1492 45.5249L49.3572 21.3499L49.3607 21.3463L69.2128 1.49428Z"
          color="black"
          stroke="black"
        />
      </svg>
      <h3 className={iconsStyles.caption}>Lighting Fast</h3>
      <div className={iconsStyles.text}>
        Maecenas nisl sem, molestie sit amet felis ut, viverra euismod odio.
        Nunc velit massa, aliquet vel tristique at, posuere ac risus.
      </div>
    </div>
  )
}
export default Icons
