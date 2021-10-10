import React from "react"
import * as footerStyles from "./footer.module.css"
const footer = () => {
  return (
    <footer className={footerStyles.container}>
      <div className={footerStyles.containerInner}>
        <div>
          <h3 className={footerStyles.header}>Links</h3>
          <ul>
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
          <h3 className={footerStyles.header}>Links</h3>
          <ul>
            <li className={footerStyles.link}>Link1</li>
            <li className={footerStyles.link}>Link2</li>
            <li className={footerStyles.link}>Link3</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default footer
