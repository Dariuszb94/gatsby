import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Logo from "./logo"
import * as headerStyles from "./header.module.css"
import useCurrentWidth from "../../hooks/useCurrentWidth"
import { useState, useEffect, useCallback } from "react"
const Header = () => {
  const [mobile, setMobile] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const getKey = useCallback((str, idx) => encodeURI(`${str},${idx}`), [])

  let width = useCurrentWidth()
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
  useEffect(() => {
    width > 1000 ? setMobile(false) : setMobile(true)
  }, [width])
  return (
    <header className={headerStyles.container}>
      <svg
        className={headerStyles.wave}
        viewBox="0 0 99 5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M99 5H0V0.781884C2.10651 0.792181 4.22061 0.75416 6.2749 0.667756L19.3986 0.115775C23.0688 -0.0385916 26.9312 -0.0385916 30.6013 0.115775L43.7251 0.667756C45.4544 0.740492 47.2261 0.778943 49 0.783144V0.781884C49.1667 0.782699 49.3334 0.783211 49.5001 0.783421C49.6668 0.783211 49.8334 0.782699 50 0.781884V0.783143C51.7739 0.778942 53.5456 0.740492 55.2749 0.667756L61.8368 0.391765L68.3986 0.115774C72.0688 -0.0385912 75.9312 -0.0385912 79.6014 0.115774L92.7251 0.667757C94.7794 0.754161 96.8935 0.792183 99 0.781885V5Z"
          fill="rgba(0,0,0,0.1)"
        />
      </svg>

      <div className={headerStyles.content}>
        <a href="/">
          <Logo />
        </a>
        {mobile ? (
          <>
            <svg
              onClick={() => setShowMenu(prev => !prev)}
              className={
                showMenu ? headerStyles.burgerActive : headerStyles.burger
              }
              width="44"
              height="27"
              viewBox="0 0 44 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.00001 23.6008L41.4613 23.6008"
                stroke="black"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <path
                d="M3.00001 13.6008L41.4613 13.6008"
                stroke="black"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <path
                d="M3.00001 3.60082L41.4613 3.60083"
                stroke="black"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </svg>
            <nav
              className={
                showMenu
                  ? headerStyles.menuMobileContainer
                  : headerStyles.menuMobileContainerHidden
              }
            >
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
          </>
        ) : (
          <nav>
            <ul className={headerStyles.menu}>
              {data.wpMenu?.menuItems.nodes.map((item, index) => {
                return (
                  <li
                    key={getKey(item.label, index)}
                    className={headerStyles.element}
                  >
                    <a className={headerStyles.link} href={item.url}>
                      {item.label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
export default Header
