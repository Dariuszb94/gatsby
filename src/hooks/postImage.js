import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { StaticImage } from "gatsby-plugin-image"

export const PostImage = ({ src, alt, width }) => {
  const allMedia = graphql`
    query {
      allWpMediaItem {
        edges {
          node {
            sourceUrl
            localFile {
              absolutePath
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `
  const { allWordpressWpMedia } = useStaticQuery(allMedia)
  const originalSource = src.replace(
    /^(http?s:\/\/.+?\/.+?)-(\d+x\d+)\.(.+?)$/g,
    "$1.$3"
  )
  const image = allWordpressWpMedia.edges.find(
    ({ node }) => node.source_url === originalSource
  )
  return image == null || image.node.localFile.childImageSharp == null ? (
    <img src={src} alt={alt} style={{ width: width ? width : "100%" }} />
  ) : (
    <StaticImage
      fluid={image.node.localFile.childImageSharp.fluid}
      alt={alt}
      style={{
        width: width ? width + "px" : "100%",
        maxWidth: "100%",
      }}
    />
  )
}
