import React from "react"
import { useState } from "react"
import * as footerStyles from "./footer.module.scss"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"
import Logo from "../../layout/header/logo"
const isBrowser = typeof window !== "undefined"
const Footer = () => {
  const [name, setName] = useState("")
  const [number, setNumber] = useState("")
  const [mail, setMail] = useState("")
  const [checked, setChecked] = useState("")
  const [wrongEmail, setWrongEmail] = useState(false)
  const [checkedWrong, setCheckedWrong] = useState(false)
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
        <div className={footerStyles.column}>
          <h3 className={footerStyles.header}>Demo</h3>
          <Logo className={footerStyles.logo} />

          <div className={footerStyles.text}>
            2300 Traverwood Dr.
            <br />
            Ann Arbor, MI 48105
            <br />
            Stany Zjednoczone
            <br />
            Telefon: +1 734-332-6500
          </div>
        </div>
        <div className={footerStyles.column}>
          <h3 className={footerStyles.header}>Links</h3>
          <ul>
            <li className={footerStyles.link}>Link1</li>
            <li className={footerStyles.link}>Link2</li>
            <li className={footerStyles.link}>Link3</li>
          </ul>
        </div>
        <div className={footerStyles.column}>
          <h3 className={footerStyles.header}>Contact us!</h3>
          {isBrowser && (
            <Mutation mutation={CONTACT_MUTATION}>
              {(createSubmission, { loading, error, data }) => (
                <React.Fragment>
                  <form
                    className={footerStyles.form}
                    onSubmit={async event => {
                      event.preventDefault()
                      if (
                        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                          mail
                        ) &&
                        checked
                      ) {
                        setWrongEmail(false)
                        setCheckedWrong(false)
                        createSubmission({
                          variables: {
                            clientMutationId: "example",
                            name: name,
                            number: number,
                            mail: mail,
                            message: message,
                          },
                        })
                      } else {
                        if (
                          !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                            mail
                          )
                        )
                          setWrongEmail(true)
                        if (!checked) setCheckedWrong(true)
                      }
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
                        setWrongEmail(false)
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
                    <label
                      className={
                        !checkedWrong
                          ? footerStyles.checkbox
                          : footerStyles.checkboxWrong
                      }
                    >
                      <span className={footerStyles.checkboxInput}>
                        <input
                          type="checkbox"
                          name="checkbox"
                          checked={checked}
                          onChange={() => {
                            setChecked(prev => !prev)
                            setCheckedWrong(false)
                          }}
                        />
                        <span className={footerStyles.checkboxControl}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            focusable="false"
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              stroke-width="3"
                              d="M1.73 12.91l6.37 6.37L22.79 4.59"
                            />
                          </svg>
                        </span>
                      </span>
                      <span className={footerStyles.radioLabel}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vivamus feugiat suscipit velit non euismod. Mauris
                        lacinia mauris ac semper maximus.
                      </span>
                    </label>
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
                      {!data && !loading
                        ? "Send it!"
                        : error && !loading
                        ? "Try again!"
                        : !loading
                        ? "Sent"
                        : null}
                      {loading ? (
                        <div className={footerStyles.afterSend}>
                          {loading && (
                            <div className={footerStyles.ldsHourglass}></div>
                          )}
                        </div>
                      ) : null}
                    </button>
                  </form>
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
