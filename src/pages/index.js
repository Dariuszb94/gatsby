import * as React from "react"
import { useStaticQuery, graphq } from "gatsby"
import { Header } from "../layout/header"
import * as indexStyles from "./index.module.css"
import "@fontsource/roboto" // Defaults to weight 400.
import Slider from "../components/slider/slider"
import Icons from "../components/icons/icons"
const HomePage = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPost {
        nodes {
          id
          title
          excerpt
          uri
        }
      }
    }
  `)

  const { allWpPost } = data

  return (
    <main className={indexStyles.container}>
      <Header />
      <Slider />
      <Icons />
      <section></section>
    </main>
  )
}

export default HomePage
