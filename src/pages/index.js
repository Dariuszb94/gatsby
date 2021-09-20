import * as React from "react"
import { useStaticQuery, graphql, Link as GatsbyLink } from "gatsby"
import { Container, Stack, Box, Heading, Text, Link } from "@chakra-ui/react"
import { Header } from "../layout/header"
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
    <Container maxW="xl" centerContent>
      <Header />
      <Stack spacing={8}>
        {allWpPost.nodes.map(({ id, title, excerpt, uri }) => (
          <Box key={id} p={5} shadow="md" borderWidth="1px">
            <Heading as={`h2`}>{title}</Heading>
            <Text as="div" mt={4}>
              <div dangerouslySetInnerHTML={{ __html: excerpt }} />
            </Text>
            <Link as={GatsbyLink} to={uri}>
              Read More {">>"}
            </Link>
          </Box>
        ))}
      </Stack>
    </Container>
  )
}

export default HomePage
