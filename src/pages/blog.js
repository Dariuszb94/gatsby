import React from "react"
import Seo from "../layout/seo"

import Header from "../layout/header/header"
import Footer from "../layout/footer/footer"

const Blog = () => {
  return (
    <>
      <Seo title="Blog" />
      <main>
        <Header />
        <Footer />
      </main>
    </>
  )
}

export default Blog
