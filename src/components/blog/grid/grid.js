import React from "react"
import * as styles from "./grid.module.css"
import { useStaticQuery, graphql } from "gatsby"
import { Link as GatsbyLink } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Grid = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPost {
        edges {
          node {
            featuredImage {
              node {
                sourceUrl
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(
                      formats: [AUTO, WEBP, AVIF]
                      placeholder: DOMINANT_COLOR
                      width: 200
                    )
                  }
                }
              }
            }
            slug
            title
          }
        }
      }
    }
  `)
  return (
    <section className={styles.container}>
      <div className={styles.containerInner}>
        <ul className={styles.grid}>
          {data.allWpPost?.edges.map(item => {
            return (
              <li className={styles.tile}>
                <GatsbyLink className={styles.link} to={`/${item.node.slug}`}>
                  <GatsbyImage
                    image={getImage(item.node.featuredImage.node.localFile)}
                    alt={item.node.featuredImage.node.altText}
                    className={styles.bg}
                  />
                  <h2 className={styles.title}>{item.node.title}</h2>
                </GatsbyLink>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Grid
