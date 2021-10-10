import * as React from "react"
import { useStaticQuery, graphq } from "gatsby"
import { Header } from "../layout/header"
import * as indexStyles from "./index.module.css"
import "@fontsource/roboto"
import Slider from "../components/slider/slider"
import Icons from "../components/icons/icons"
import Button from "../components/button/button"
import Footer from "../components/footer/footer"

const HomePage = () => {
  // const data = useStaticQuery(graphql`
  //   {
  //     allWpPost {
  //       nodes {
  //         id
  //         title
  //         excerpt
  //         uri
  //       }
  //     }
  //   }
  // `)

  // const { allWpPost } = data

  return (
    <main className={indexStyles.container}>
      <Header />
      <Slider />
      <Icons />
      <Button />
      <Footer />
    </main>
  )
}

export default HomePage
