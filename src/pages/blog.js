import React from "react"
import { Helmet } from "react-helmet/es/Helmet"

import Header from "../layout/header/header"
import Footer from "../layout/footer/footer"

const Blog = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content="blog" />
      </Helmet>
      <main>
        <Header />
        <Footer />
      </main>
    </>
  )
}

export default Blog
