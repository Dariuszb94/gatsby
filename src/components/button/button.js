import React from "react"
import * as buttonStyles from "./button.module.css"
const button = () => {
  return (
    <section className={buttonStyles.container}>
      <h2 className={buttonStyles.header}>Check this out, too!</h2>
      <a href="#" className={buttonStyles.neonButton}>
        Neon
      </a>
    </section>
  )
}

export default button
