import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWineGlassAlt, faHome } from "@fortawesome/free-solid-svg-icons"
import Carousel from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"
import { isMobile } from "react-device-detect"
import Style from "./styles/about.module.css"
import DrinkImg from "../../images/drink.svg"
import HappyImg from "../../images/winter.svg"
import WorldImg from "../../images/universe.svg"

const renderBtns = () => {
  let btnStyle1 = `btn btn-lg ${Style.button} ${Style.btnOne} mr-2`,
    btnStyle2 = `btn btn-lg ${Style.button} ${Style.btnTwo}`,
    btnText = `mr-2 ${Style.buttonText}`
  return (
    <div className={Style.btnContainer}>
      <Link to="/pricing">
        <button className={btnStyle1}>
          <span className={btnText}>See Our Plans</span>
          <FontAwesomeIcon
            className={Style.fontAwesome}
            icon={faWineGlassAlt}
            color="#dfddc7"
            width="18"
          />
        </button>
      </Link>
      <Link to="/">
        <button className={btnStyle2}>
          <span className={btnText}>Back To Home</span>
          <FontAwesomeIcon
            className={Style.fontAwesome}
            icon={faHome}
            color="#dfddc7"
            width="18"
          />
        </button>
      </Link>
    </div>
  )
}

const MainContent = () => {
  let mainContainer = `${Style.container}`
  let innerContainer = `container-fluid fade-in-bck ${Style.inner}`
  return (
    <div className={mainContainer}>
      <div className={Style.top}>
        <h5 className={Style.head}>{isMobile ? "We Are" : "About Us"}</h5>
      </div>

      <div className={innerContainer}>
        <Carousel autoPlay={7000} animationSpeed={1500} infinite arrows>
          <div className="row">
            <div className="col-md-6">
              <h4 className={Style.headers}>Distributed</h4>
              <p className={Style.content}>
                Brew is the largest coffee vending company across the country
                with over 150 branches
              </p>
              {!isMobile ? (
                <div className={Style.desktopBtn}>{renderBtns()}</div>
              ) : (
                <React.Fragment></React.Fragment>
              )}
            </div>
            <div className="col-md-6">
              <img src={WorldImg} className={Style.images} alt="Country wide" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <h4 className={Style.headers}>Considerate</h4>
              <p className={Style.content}>
                Our riders deliver coffee to your place of work or current
                location at no fee whatsoever
              </p>
              {!isMobile ? (
                <div className={Style.desktopBtn}>{renderBtns()}</div>
              ) : (
                <React.Fragment></React.Fragment>
              )}
            </div>
            <div className="col-md-6">
              <img src={DrinkImg} className={Style.images} alt="Organized" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <h4 className={Style.headers}>Thoughtful</h4>
              <p className={Style.content}>
                By bringing your coffee right to your office doorstep, we let
                you focus on your work
              </p>
              {!isMobile ? (
                <div className={Style.desktopBtn}>{renderBtns()}</div>
              ) : (
                <React.Fragment></React.Fragment>
              )}
            </div>
            <div className="col-md-6">
              <img src={HappyImg} className={Style.images} alt="Satisfying" />
            </div>
          </div>
        </Carousel>
      </div>
      {isMobile ? (
        <div className={Style.bottom}>{renderBtns()}</div>
      ) : (
        <React.Fragment></React.Fragment>
      )}
    </div>
  )
}

export default MainContent

/*
background-color: #7b59ff;
*/
