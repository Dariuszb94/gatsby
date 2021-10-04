import * as React from "react"
import { useStaticQuery, graphql, Link as GatsbyLink } from "gatsby"
import { Header } from "../layout/header"
import * as indexStyles from "./index.module.css"
import "@fontsource/roboto" // Defaults to weight 400.
import Slider from "../components/slider/slider"

const HomePage = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPost {
        nodes {
          id
          title
          excerpt
          uri
        }
      }
    }
  `)

  const { allWpPost } = data

  return (
    <main className={indexStyles.container}>
      <Header />
      <Slider />
      <section>
        {allWpPost.nodes.map(({ id, title, excerpt, uri }) => (
          <article key={id}>
            <h1>{title}</h1>
            <div>
              <div dangerouslySetInnerHTML={{ __html: excerpt }} />
            </div>
            <GatsbyLink to={uri}>Read More {">>"}</GatsbyLink>
          </article>
        ))}
      </section>
    </main>
  )
}

export default HomePage
