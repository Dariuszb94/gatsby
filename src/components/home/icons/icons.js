import React from "react"
import Star from "./star"
import RWD from "./rwd"
import Speed from "./speed"

import { useInView } from "react-intersection-observer"
import * as iconsStyles from "./icons.module.css"

const Icons = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  })
  return (
    <section ref={ref} className={iconsStyles.iconsGrid}>
      <h2 className={iconsStyles.header}>Check this out!</h2>
      <div className={iconsStyles.iconsGridInner}>
        <Star inView={inView} />
        <RWD inView={inView} />
        <Speed inView={inView} />
      </div>
    </section>
  )
}

export default Icons
