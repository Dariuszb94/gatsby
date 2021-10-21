import React from "react"
import * as styles from "./grid.module.css"
import { useStaticQuery, graphql } from "gatsby"
import { Link as GatsbyLink } from "gatsby"

const Grid = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPost {
        edges {
          node {
            featuredImage {
              node {
                altText
                sourceUrl
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
      <ul>
        {data.allWpPost?.edges.map(item => {
          return (
            <GatsbyLink className={styles.link} to={`/${item.node.slug}`}>
              {item.node.title}
            </GatsbyLink>
          )
        })}
      </ul>
    </section>
  )
}

export default Grid
