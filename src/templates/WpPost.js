import React from "react"
import { graphql, Link as GatsbyLink } from "gatsby"
import { Helmet } from "react-helmet/es/Helmet"
import { Header } from "../layout/header/header"
import * as styles from "./post.module.css"
import Footer from "../layout/footer/footer"
const WpPost = ({ data }) => {
  const { wpPost } = data
  return (
    <>
      <Helmet>
        <meta name="description" content={wpPost?.seo?.metaDesc} />
      </Helmet>
      <Header />
      <div>
        <main className={styles.container}>
          <div className={styles.containerInner}>
            <h1 className={styles.title}>{wpPost.title}</h1>
            <div>
              <div
                className={styles.text}
                dangerouslySetInnerHTML={{ __html: wpPost.content }}
              />
            </div>

            <GatsbyLink
              className={styles.link}
              to="/"
            >{`<< Back to Blog`}</GatsbyLink>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default WpPost

export const query = graphql`
  query PostById($id: String) {
    wpPost(id: { eq: $id }) {
      id
      uri
      title
      content
    }
  }
`
