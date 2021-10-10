import React from "react"
import * as buttonStyles from "./button.module.css"
const button = () => {
  return (
    <section className={buttonStyles.container}>
      <h2 className={buttonStyles.header}>Check this out, too!</h2>
      <div className={buttonStyles.text}>
        Maecenas nisl sem, molestie sit amet felis ut, viverra euismod odio.
        Nunc velit massa, aliquet vel tristique at, posuere ac risus.
      </div>
      <a href="#" className={buttonStyles.neonButton}>
        Click here
      </a>
    </section>
  )
}

export default button
