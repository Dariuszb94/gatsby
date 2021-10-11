import * as React from "react"
import { useState } from "react"
import * as footerStyles from "./footer.module.scss"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"
import { useStaticQuery, graphq } from "gatsby"
import { Header } from "../layout/header"
import * as indexStyles from "./index.module.css"
import "@fontsource/roboto"
import Slider from "../components/slider/slider"
import Icons from "../components/icons/icons"
import Button from "../components/button/button"
import Footer from "../components/footer/footer"
const isBrowser = typeof window !== "undefined"
const HomePage = () => {
  const [name, setName] = useState("")
  const [number, setNumber] = useState("")
  const [mail, setMail] = useState("")
  const [wrongEmail, setWrongEmail] = useState(false)
  const [message, setMessage] = useState("")
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
    <main className={indexStyles.container}>
      <Header />
      <Slider />
      <Icons />
      {isBrowser && (
        <Mutation mutation={CONTACT_MUTATION}>
          <form
            className={footerStyles.form}
            onSubmit={async event => {
              // if (
              //   /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
              //     mail
              //   )
              // ) {
              event.preventDefault()
              //setWrongEmail(false)
              createSubmission({
                variables: {
                  clientMutationId: "example",
                  name: name,
                  number: number,
                  mail: mail,
                  message: message,
                },
              })
              // } else {
              //   setWrongEmail(true)
              // }
            }}
          >
            <input
              value={name}
              onChange={event => {
                setName(event.target.value)
              }}
              className={footerStyles.input}
              placeholder="Your name"
            />
            <input
              value={number}
              onChange={event => {
                setNumber(event.target.value)
              }}
              className={footerStyles.input}
              placeholder="Your number"
            />
            <input
              id="mail"
              value={mail}
              onChange={event => {
                setMail(event.target.value)
              }}
              className={
                wrongEmail ? footerStyles.wrongEmail : footerStyles.input
              }
              placeholder="Your mail (required)"
            />
            <textarea
              id="messageInput"
              value={message}
              onChange={event => {
                setMessage(event.target.value)
              }}
              className={footerStyles.input}
              placeholder="Your Message"
            ></textarea>
            <button
              type="submit"
              className={
                !data
                  ? footerStyles.neonButton
                  : error
                  ? footerStyles.neonButtonError
                  : footerStyles.neonButtonSent
              }
            >
              {!data ? "Send it!" : error ? "Try again!" : "Sent"}
            </button>
          </form>
        </Mutation>
      )}
      <Button />
      <Footer />
    </main>
  )
}

export default HomePage
