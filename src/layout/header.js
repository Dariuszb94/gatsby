import React from "react"
import { useStaticQuery, graphql, Link as GatsbyLink } from "gatsby"
import * as headerStyles from "./header.module.css"

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

  return (
    <header className={headerStyles.container}>
      <nav>
        <ul className={headerStyles.menu}>
          {data.wpMenu?.menuItems.nodes.map(item => {
            return (
              <li className={headerStyles.element}>
                <a className={headerStyles.link} href={item.url}>
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
