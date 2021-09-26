import React from "react"
import { useStaticQuery, graphql, Link as GatsbyLink } from "gatsby"
import Logo from "./logo"
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
      <svg
        className={headerStyles.wave}
        viewBox="0 0 99 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M99 7H0V1.09464C2.10651 1.10905 4.22061 1.05582 6.2749 0.934859L19.3986 0.162085C23.0688 -0.0540282 26.9312 -0.0540282 30.6013 0.162085L43.7251 0.934859C45.4544 1.03669 47.2261 1.09052 49 1.0964V1.09464C49.1667 1.09578 49.3334 1.0965 49.5001 1.09679C49.6668 1.0965 49.8334 1.09578 50 1.09464V1.0964C51.7739 1.09052 53.5456 1.03669 55.2749 0.934859L68.3986 0.162083C72.0688 -0.0540277 75.9312 -0.0540277 79.6014 0.162083L92.7251 0.93486C94.7794 1.05583 96.8935 1.10906 99 1.09464V7Z"
          fill="#C4C4C4"
        />
      </svg>

      <div className={headerStyles.content}>
        <a href="/">
          <Logo />
        </a>
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
      </div>
    </header>
  )
}
