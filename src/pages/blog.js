import React from "react"
import Seo from "../layout/seo"
import Header from "../layout/header/header"
import Footer from "../layout/footer/footer"
import Grid from "../components/blog/grid/grid"
const Blog = () => {
  return (
    <>
      <Seo title="Blog" />
      <Header />

      <main>
        <Grid />
        <Footer />
      </main>
    </>
  )
}

export default Blog
