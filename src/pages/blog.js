import React from "react"
import Seo from "../layout/seo"
import Header from "../layout/header/header"
import Footer from "../layout/footer/footer"
import Grid from "../components/blog/grid/grid"
import Title from "../components/blog/title/title"
const Blog = () => {
  return (
    <>
      <Seo title="Blog" />
      <Header />

      <main>
        <Title />
        <Grid />
        <Footer />
      </main>
    </>
  )
}

export default Blog
