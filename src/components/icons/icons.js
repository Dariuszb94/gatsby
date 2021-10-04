import React from "react"
import Star from "./star"
import { useInView } from "react-intersection-observer"
import * as iconsStyles from "./icons.module.css"

const Icons = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  })
  return (
    <section ref={ref} className={iconsStyles.iconsGrid}>
      {inView && (
        <>
          <Star />
          <Star />
          <Star />
        </>
      )}
    </section>
  )
}

export default Icons
