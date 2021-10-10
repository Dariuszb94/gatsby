import React from "react"
import * as buttonStyles from "./button.module.scss"
const button = () => {
  return (
    <section className={buttonStyles.container}>
      <div className={buttonStyles.containerInner}>
        <h2 className={buttonStyles.header}>Check this out, too!</h2>
        <div className={buttonStyles.text}>
          Maecenas nisl sem, molestie sit amet felis ut, viverra euismod odio.
          Nunc velit massa, aliquet vel tristique at, posuere ac risus.
        </div>
        {/* <a href="#" className={buttonStyles.neonButton}>
          Click here
        </a> */}
      </div>
    </section>
  )
}

export default button
