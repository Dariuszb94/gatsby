import React from "react"
import { useState } from "react"

import * as footerStyles from "./footer.module.scss"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"
const isBrowser = typeof window !== "undefined"

const Footer = () => {
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
  return (
    <footer className={footerStyles.container}>
      <div className={footerStyles.containerInner}>
        <div>
          <h3 className={footerStyles.header}>Links</h3>
          <ul className={footerStyles.links}>
            <li className={footerStyles.link}>Link1</li>
            <li className={footerStyles.link}>Link2</li>
            <li className={footerStyles.link}>Link3</li>
          </ul>
        </div>
        <div>
          <h3 className={footerStyles.header}>Links</h3>
          <ul>
            <li className={footerStyles.link}>Link1</li>
            <li className={footerStyles.link}>Link2</li>
            <li className={footerStyles.link}>Link3</li>
          </ul>
        </div>
        <div>
          <h3 className={footerStyles.header}>Contact us!</h3>
          {isBrowser && (
            <Mutation mutation={CONTACT_MUTATION}>
              {(createSubmission, { loading, error, data }) => (
                <React.Fragment>
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
                        wrongEmail
                          ? footerStyles.wrongEmail
                          : footerStyles.input
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
                  {/* <div className={footerStyles.afterSend}>
                     {loading && (
                      <div className={footerStyles.ldsHourglass}></div>
                    )}
                  </div> */}
                </React.Fragment>
              )}
            </Mutation>
          )}
        </div>
      </div>
    </footer>
  )
}

export default Footer
