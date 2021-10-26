import * as React from "react"
import Header from "../layout/header/header"
import * as indexStyles from "./index.module.css"
import "@fontsource/roboto"
import Slider from "../components/home/slider/slider"
import Icons from "../components/home/icons/icons"
import Button from "../components/home/button/button"
import Footer from "../layout/footer/footer"
import Seo from "../layout/seo"
const HomePage = () => {
  return (
    <>
      <Seo title="Home" />
      <Header />

      <main className={indexStyles.container}>
        <Slider />
        <Icons />
        <Button />
      </main>
      <Footer />
    </>
  )
}

export default HomePage
