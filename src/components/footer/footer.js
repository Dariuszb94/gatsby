import React from "react"
import { useState } from "react"

import * as footerStyles from "./footer.module.scss"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"
const isBrowser = typeof window !== "undefined"

const Footer = () => {
  const [firstNameValue, setFirstNameValue] = useState("")
  const [lastNameValue, setLastNameValue] = useState("")
  const [favoriteFoodValue, setFavoriteFoodValue] = useState("")
  const [messageValue, setMessageValue] = useState("")
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
        <div className={footerStyles.formContainer}>
          <h3 className={footerStyles.header}>Contact us!</h3>
          {isBrowser && (
            <Mutation mutation={CONTACT_MUTATION}>
              {(createSubmission, { loading, error, data }) => (
                <React.Fragment>
                  <form
                    className={footerStyles.form}
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
                    <input
                      value={firstNameValue}
                      onChange={event => {
                        setFirstNameValue(event.target.value)
                      }}
                      placeholder="Your name"
                    />
                    <input
                      value={lastNameValue}
                      onChange={event => {
                        setLastNameValue(event.target.value)
                      }}
                      placeholder="Your number"
                    />
                    <input
                      id="favoriteFoodNameInput"
                      value={favoriteFoodValue}
                      onChange={event => {
                        setFavoriteFoodValue(event.target.value)
                      }}
                      placeholder="Your mail"
                    />
                    <textarea
                      id="messageInput"
                      value={messageValue}
                      onChange={event => {
                        setMessageValue(event.target.value)
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
