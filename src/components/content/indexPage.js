import React, { Component } from "react"
import { Link } from "gatsby"
import Typist from "react-typist"
import Style from "./styles/index.module.css"
import CoffeeImg from "../../images/coffee.svg"
import "../../../node_modules/react-typist/dist/Typist.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMugHot } from "@fortawesome/free-solid-svg-icons"
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons"

const Content = () => {
  let typeText = `badge badge-warning ${Style.mainHeader} ${Style.typerStyle}`
  let leftStyles = `col-md-6 col-sm-12 fade-in-left ${Style.left}`
  let btnStyle1 = `btn btn-lg ${Style.button} mr-2 mb-2`
  let btnStyle2 = `btn btn-lg ${Style.button}`
  let btnText = `mr-2 ${Style.buttonText}`
  let container = `container-fluid ${Style.container}`
  return (
    <React.Fragment>
      <div className={container}>
        <Typist
          avgTypingDelay={65}
          startDelay={1200}
          cursor={{ show: false, blink: false, hideWhenDone: true }}
          className={Style.typer}
        >
          <p className={typeText}>Running late for work?</p>
          <Typist.Backspace count={22} delay={255} />
          <Typist.Delay ms={800} />
          <p className={typeText}>Forgot your morning coffee?</p>
          <Typist.Backspace count={27} delay={260} />
          <Typist.Delay ms={800} />
          <p className={typeText}>
            Welcome to <span style={{ fontWeight: "bold" }}>Brew</span>{" "}
            <Typist.Delay ms={50} /> 🥤
          </p>
        </Typist>
        <div className="row">
          <div className={leftStyles}>
            <h3 className={Style.tagline}>Stir. Pack. Serve.</h3>
            <h2 className={Style.tagTwo}>Experience ultimate fudginess</h2>
            <h4 className={Style.contentText}>
              Let's face it - we all run late once in a while, making us not
              have that warm cup of morning coffee that we so desire. Why let
              that get in your way? We prepare and package the best coffee in
              Kenya and deliver it for <strong>free</strong>!
            </h4>
            <br />
            <br />
            <Link to="/login">
              <button className={btnStyle1}>
                <span className={btnText}>Make An Order</span>
                <FontAwesomeIcon
                  className={Style.fontAwesome}
                  icon={faMugHot}
                  color="#dfddc7"
                  width="18"
                />
              </button>
            </Link>
            <Link to="/services">
              <button className={btnStyle2}>
                <span className={btnText}>See Our Works</span>
                <FontAwesomeIcon
                  className={Style.fontAwesome}
                  icon={faArrowAltCircleRight}
                  color="#dfddc7"
                  width="18"
                />
              </button>
            </Link>
          </div>
          <div className="col-md-6 col-sm-12 fade-in-right">
            <img className={Style.coffeeImg} src={CoffeeImg} alt="Coffee Cup" />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

class MainContent extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return <div>{Content()}</div>
  }
}

export default MainContent
