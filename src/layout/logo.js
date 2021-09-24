import { useSpring, animated } from "react-spring"
import { useState, useEffect } from "react"
import React from "react"

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

const Star = () => {
  const [toggle, setToggle] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setToggle(true)
    }, 0)
  }, [])

  return (
    <div className="icon-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="84"
        fill="none"
        viewBox="0 0 88 84"
      >
        <Part
          toggle={toggle}
          d="M44.951 2.16312L53.8256 29.4762C54.2272 30.7123 55.3791 31.5492 56.6788 31.5492H85.3975C86.3662 31.5492 86.769 32.7888 85.9852 33.3582L62.7513 50.2386C61.6999 51.0025 61.2599 52.3566 61.6615 53.5927L70.5361 80.9058C70.8354 81.8271 69.781 82.5932 68.9972 82.0238L45.7633 65.1434C44.7119 64.3795 43.2881 64.3795 42.2366 65.1434L19.0027 82.0238C18.219 82.5932 17.1645 81.8271 17.4639 80.9058L26.3385 53.5927C26.7401 52.3566 26.3001 51.0025 25.2486 50.2386L2.01474 33.3582C1.23103 32.7888 1.6338 31.5492 2.60253 31.5492H31.3212C32.6209 31.5492 33.7728 30.7123 34.1744 29.4762L43.0489 2.16312C43.3483 1.24181 44.6517 1.24181 44.951 2.16312Z"
          color="black"
          stroke="black"
        />
      </svg>
    </div>
  )
}
export default Star
