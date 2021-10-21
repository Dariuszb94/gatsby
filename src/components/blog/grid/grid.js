import React from "react"
import * as styles from "./grid.module.css"
import { useStaticQuery, graphql } from "gatsby"

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
          return <li>{item.node.title}</li>
        })}
      </ul>
    </section>
  )
}

export default Grid
