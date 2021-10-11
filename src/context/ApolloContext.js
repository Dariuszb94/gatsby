import ApolloClient from "apollo-boost"

export const client = new ApolloClient({
  uri: `https://wp2.na.stronazen.pl/graphql`,
})
