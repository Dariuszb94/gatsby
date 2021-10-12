import React from "react"
import { graphql, Link as GatsbyLink } from "gatsby"
import { Helmet } from "react-helmet/es/Helmet"
import { Header } from "../layout/header"
import * as styles from "./post.module.css"
import Footer from "../components/footer/footer"
import parse from "html-react-parser"
import PostImage from "../hooks/postImage"
const WpPost = ({ data }) => {
  const { wpPost } = data
  const getImage = node => {
    if (node.name === "img") {
      return node
    } else if (node.children != null) {
      for (let index = 0; index < node.children.length; index++) {
        let image = getImage(node.children[index])
        if (image != null) return image
      }
    }
  }

  const replaceMedia = node => {
    if (node.name === "p") {
      const image = getImage(node)
      if (image != null) {
        return (
          <PostImage
            src={image.attribs.src}
            alt={image.attribs.alt}
            width={image.attribs.width}
          />
        )
      }
    }
  }
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
            <div>{parse(wpPost.content, { replace: replaceMedia })}</div>

            <GatsbyLink to="/">{`<< Back to Blog`}</GatsbyLink>
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
