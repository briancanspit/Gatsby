import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import Style from "../styles/footer.module.css"

const Footer = () => {
  let footer = `${Style.footer}`,
    icon = `${Style.fontAwesome} mr-3 mt-2`

  return (
    <div className={footer}>
      <a
        href="https://facebook.com/briancanspit"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className={icon} icon={faFacebook} />
      </a>

      <a
        href="https://github.com/briancanspit"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className={icon} icon={faGithub} />
      </a>
      <a
        href="https://www.linkedin.com/in/briancanspit"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className={icon} icon={faLinkedin} />
      </a>
      <a
        href="https://twitter.com/briancanspit"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className={icon} icon={faTwitter} />
      </a>
      <a
        href="https://instagram.com/liltrendi"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className={icon} icon={faInstagram} />
      </a>
    </div>
  )
}

export default Footer
