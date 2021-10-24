import * as logoStyles from "./logo.module.css"
import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Logo = () => {
  return (
    <StaticImage
      className={logoStyles.logo}
      src="../../images/demo-logo.png"
      alt="Demo Logo"
      width={50}
      height={57}
    />
  )
}

export default Logo
