import * as React from "react"
import Header from "../layout/header/header"
import * as indexStyles from "./index.module.css"
import { Helmet } from "react-helmet/es/Helmet"
import "@fontsource/roboto"
import Slider from "../components/home/slider/slider"
import Icons from "../components/home/icons/icons"
import Button from "../components/home/button/button"
import Footer from "../layout/footer/footer"
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
    <>
      <Helmet>
        <meta name="description" content="blog" />
      </Helmet>
      <main className={indexStyles.container}>
        <Header />
        <Slider />
        <Icons />
        <Button />
        <Footer />
      </main>
    </>
  )
}

export default HomePage
