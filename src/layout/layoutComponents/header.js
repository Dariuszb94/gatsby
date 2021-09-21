import React from "react"
import { useStaticQuery, graphql, Link as GatsbyLink } from "gatsby"
export const Header = () => {
  const data = useStaticQuery(graphql`
    {
      wpMenu(name: { eq: "Main Navigation" }) {
        menuItems {
          nodes {
            url
            label
          }
        }
      }
    }
  `)

  console.log(data.wpMenu?.menuItems.nodes)
  return (
    <section>
      aaaaaa
      <nav>
        <ul>
          {data.wpMenu?.menuItems.nodes.map(item => {
            return (
              <li>
                <a href={item.url}>{item.label}</a>
              </li>
            )
          })}
        </ul>
      </nav>
    </section>
  )
}
