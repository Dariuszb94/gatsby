import React from "react"
import { graphql, Link as GatsbyLink } from "gatsby"
import { Helmet } from "react-helmet/es/Helmet"

const WpPost = ({ data }) => {
  const { wpPost } = data
  return (
    <>
      <Helmet>
        <meta name="description" content={wpPost?.seo?.metaDesc} />
      </Helmet>
      <div>
        <h1>{wpPost.title}</h1>
        <div>
          <div dangerouslySetInnerHTML={{ __html: wpPost.content }} />
        </div>
        <GatsbyLink to="/">{`<< Back to Blog`}</GatsbyLink>
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
