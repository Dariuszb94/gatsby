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
                      event.preventDefault()
                      if (mail)
                        createSubmission({
                          variables: {
                            clientMutationId: "example",
                            name: name,
                            number: number,
                            mail: mail,
                            message: message,
                          },
                        })
                      else {
                        setWrongEmail(true)
                      }
                    }}
                  >
                    <input
                      value={name}
                      onChange={event => {
                        setName(event.target.value)
                      }}
                      placeholder="Your name"
                    />
                    <input
                      value={number}
                      onChange={event => {
                        setNumber(event.target.value)
                      }}
                      placeholder="Your number"
                    />
                    <input
                      id="favoriteFoodNameInput"
                      value={mail}
                      onChange={event => {
                        setMail(event.target.value)
                      }}
                      className={wrongEmail ? footerStyles.wrongEmail : null}
                      placeholder="Your mail (required)"
                    />
                    <textarea
                      id="messageInput"
                      value={message}
                      onChange={event => {
                        setMessage(event.target.value)
                      }}
                      placeholder="Your Message"
                    ></textarea>
                    <button type="submit" className={footerStyles.neonButton}>
                      Send it!
                    </button>
                  </form>
                  <div className={footerStyles.afterSend}>
                    {loading && (
                      <div className={footerStyles.ldsHourglass}></div>
                    )}
                    {error && (
                      <p className={footerStyles.error}>
                        An unknown error has occured, please try again later...
                      </p>
                    )}
                    {data && <p className={footerStyles.success}>Sent</p>}
                  </div>
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
