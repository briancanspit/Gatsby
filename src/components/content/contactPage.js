import React, { Component } from "react"
import { Map, GoogleApiWrapper, Marker } from "google-maps-react"
import Styles from "./styles/contact.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"

//add loader to maps to display while fetching
const LoadingContainer = () => (
  <div className={Styles.preloader}>
    <img src={require("../../images/preloader.svg")} alt="Preloader" />
  </div>
)

class MainContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isPopoverOpen: false,
      submitted: false,
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    }
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value,
    })
  }

  handleHover = () => {
    this.setState({
      isPopoverOpen: !this.state.isPopoverOpen,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({
      submitted: true,
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    })
    setTimeout(() => {
      this.setState({
        submitted: false,
      })
    }, 3000)
  }

  handleMessage = () => {
    let success = `alert ${Styles.success}`
    let info = `alert alert-info ${Styles.info}`
    if (this.state.submitted) {
      return <span className={success}>Your message was sent!</span>
    }
    if (this.state.firstName.length > 0) {
      return (
        <span className={info}>
          Thanks,{" "}
          {`${this.state.firstName.charAt(0).toUpperCase() + this.state.firstName.slice(1)}`}!
        </span>
      )
    } else {
      return null
    }
  }

  render() {
    const mapStyles = { width: "100%", height: "90%" }
    let mapDiv = `col-md-7 col-sm-12 ${Styles.mapDiv}`
    let card = `card mb-3 ${Styles.card}`
    let cardTitle = `card-title text-center ${Styles.cardTitle}`
    let submitBtn = ` btn btn-block ${Styles.submitButton} mb-2`
    let container = `fade-in-bck ${Styles.container}`
    return (
      <div className={container}>
        <div className={card}>
          <div className="row no-gutters">
            <div className="col-md-5 col-sm-12">
              <div className="card-body">
                <h5 className={cardTitle}>Talk to us today</h5>
                <div className="text-center mt-3 mb-3">
                  <p className="badge badge-info mr-2" style={{ fontSize: 14 }}>
                    We love ideas
                  </p>
                  <p
                    className="badge badge-warning mr-2"
                    style={{ fontSize: 14 }}
                  >
                    We listen
                  </p>
                  <p
                    className="badge badge-success mr-2"
                    style={{ fontSize: 14 }}
                  >
                    We value you
                  </p>
                </div>
                <div className="mb-4 mt-0 text-center">
                  {this.handleMessage()}
                </div>
                <form onSubmit={this.handleSubmit} method="post">
                  <div className="row mb-3">
                    <div className="col">
                      <input
                        type="text"
                        name="firstName"
                        value={this.state.firstName}
                        className="form-control"
                        placeholder="First Name"
                        maxLength="10"
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        name="lastName"
                        value={this.state.lastName}
                        className="form-control"
                        placeholder="Last Name"
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      value={this.state.email}
                      className="form-control"
                      placeholder="Email Address"
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      value={this.state.message}
                      className="form-control"
                      placeholder="Your Message"
                      onChange={this.handleChange}
                      rows="7"
                      required
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button type="submit" className={submitBtn}>
                      <span className="mr-2">Send Message</span>
                      <FontAwesomeIcon
                        className={Styles.fontAwesome}
                        icon={faPaperPlane}
                      />
                    </button>
                  </div>
                </form>
                <p className="card-text">
                  <small className="text-muted">We will soon be in touch</small>
                </p>
              </div>
            </div>
            <div className={mapDiv}>
              {this.state.isPopoverOpen ? (
                <span className="alert alert-success mb-4">
                  Haile Selassie Ave
                </span>
              ) : (
                <span className="alert alert-warning mb-4">
                  Here's our location
                </span>
              )}
              <div onMouseOver={this.handleHover} onMouseOut={this.handleHover}>
                <Map
                  google={this.props.google}
                  zoom={14}
                  style={mapStyles}
                  initialCenter={{ lat: -1.2921, lng: 36.8219 }}
                  className="mt-4"
                >
                  <Marker
                    title={"Zoom in for our main office street address"}
                    name={"BREW"}
                    position={{ lat: -1.2921, lng: 36.8219 }}
                  />
                </Map>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.GATSBY_GOOGLE_MAPS_API_KEY,
  LoadingContainer: LoadingContainer,
})(MainContent)
