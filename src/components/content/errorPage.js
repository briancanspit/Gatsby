import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome } from "@fortawesome/free-solid-svg-icons"
import ErrorImg from "../../images/404.svg"
import Style from "./styles/error.module.css"

const MainContent = () => {
  let btnStyle1 = `btn btn-lg ${Style.button}`,
    btnText = `mr-2 ${Style.buttonText}`,
    header = `badge badge-warning ${Style.header} ${Style.center}`
  return (
    <div className="fade-in-bck">
      <div className="row justify-content-center">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <h2 className={header}>Page not found</h2>
          <img src={ErrorImg} width="100%" height="100%" alt="Page not found" />
          <Link to="/" className={Style.center}>
            <button className={btnStyle1}>
              <span className={btnText}>Return To Home Page</span>
              <FontAwesomeIcon
                className={Style.fontAwesome}
                icon={faHome}
                color="#dfddc7"
                width="18"
              />
            </button>
          </Link>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  )
}

export default MainContent
