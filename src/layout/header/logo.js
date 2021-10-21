import * as logoStyles from "./logo.module.css"
import React from "react"
import LogoImg from "../../images/demo-logo.png"
const Logo = () => {
  return (
    <img
      className={logoStyles.logo}
      src={LogoImg}
      width="50"
      height="57"
      alt="Demo Logo"
    />
  )
}

export default Logo
