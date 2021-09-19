import * as React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Container, Stack, Box, Heading, Text, Link } from "@chakra-ui/react"

const HomePage = () => {
  // const data = useStaticQuery(graphql`
  //   {
  //     allWpPost {
  //       nodes {
  //         id
  //         title
  //         excerpt
  //         uri
  //       }
  //     }
  //   }
  // `)

  // const { allWpPost } = data

  return (
    <Container maxW="xl" centerContent>
      <Heading as={`h1`} m={4}>
        #100DaysOfGatsby
      </Heading>
      <Stack spacing={8}>
        {/* {allWpPost.nodes.map(({ id, title, excerpt, uri }) => ( */}
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading as={`h2`}>Hello world</Heading>
          <Text as="div" mt={4}>
            <div dangerouslySetInnerHTML={{ __html: "<p>Excerpt</p>" }} />
          </Text>
          <Link as={GatsbyLink} to="#">
            Read More
          </Link>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading as={`h2`}>Hello world</Heading>
          <Text as="div" mt={4}>
            <div dangerouslySetInnerHTML={{ __html: "<p>Excerpt</p>" }} />
          </Text>
          <Link as={GatsbyLink} to="#">
            Read More
          </Link>
        </Box>
        {/* ))} */}
      </Stack>
    </Container>
  )
}

export default HomePage
