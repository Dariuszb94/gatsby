import * as React from "react"
import { useState } from "react"
import gql from "graphql-tag"
import { useStaticQuery, graphq } from "gatsby"
import { Mutation } from "react-apollo"
import { Header } from "../layout/header"
import * as indexStyles from "./index.module.css"
import "@fontsource/roboto"
import Slider from "../components/slider/slider"
import Icons from "../components/icons/icons"
import Button from "../components/button/button"
import Footer from "../components/footer/footer"

const HomePage = () => {
  const [firstNameValue, setFirstNameValue] = useState("")
  const [lastNameValue, setLastNameValue] = useState("")
  const [favoriteFoodValue, setFavoriteFoodValue] = useState("")
  const [messageValue, setMessageValue] = useState("")
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
  const CONTACT_MUTATION = gql`
    mutation CreateSubmissionMutation(
      $clientMutationId: String!
      $name: String!
      $number: String!
      $mail: String!
      $message: String!
    ) {
      createSubmission(
        input: {
          clientMutationId: $clientMutationId
          name: $name
          number: $number
          mail: $mail
          message: $message
        }
      ) {
        success
        data
      }
    }
  `
  return (
    <main className={indexStyles.container}>
      <Header />
      <Slider />
      <Icons />
      <Button />
      <Footer />
      {/* <Mutation mutation={CONTACT_MUTATION}>
        {(createSubmission, { loading, error, data }) => (
          <React.Fragment>
            <form
              onSubmit={async event => {
                event.preventDefault()
                createSubmission({
                  variables: {
                    clientMutationId: "example",
                    name: firstNameValue,
                    number: lastNameValue,
                    mail: favoriteFoodValue,
                    message: messageValue,
                  },
                })
              }}
            >
              <label htmlFor="firstNameInput">First Name: </label>
              <input
                id="firstNameInput"
                value={firstNameValue}
                onChange={event => {
                  setFirstNameValue(event.target.value)
                }}
              />

              <br />
              <br />

              <label htmlFor="lastNameInput">Last Name: </label>
              <input
                id="lastNameInput"
                value={lastNameValue}
                onChange={event => {
                  setLastNameValue(event.target.value)
                }}
              />

              <br />
              <br />

              <label htmlFor="favoriteFoodInput">Favorite Food: </label>
              <select
                id="favoriteFoodNameInput"
                value={favoriteFoodValue}
                onChange={event => {
                  setFavoriteFoodValue(event.target.value)
                }}
              >
                <option>Select one...</option>
                <option>Ribs</option>
                <option>Pho</option>
                <option>Beef Jerky</option>
              </select>

              <br />
              <br />

              <label htmlFor="messageInput">Message: </label>
              <textarea
                id="messageInput"
                value={messageValue}
                onChange={event => {
                  setMessageValue(event.target.value)
                }}
              ></textarea>

              <br />
              <br />

              <button type="submit">Send it!</button>
            </form>

            <div style={{ padding: "20px" }}>
              {loading && <p>Loading...</p>}
              {error && (
                <p>An unknown error has occured, please try again later...</p>
              )}
              {data && <p>yeah boi</p>}
            </div>
          </React.Fragment>
        )}
      </Mutation> */}
    </main>
  )
}

export default HomePage
