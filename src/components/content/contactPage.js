import React from "react"
import { Map, GoogleApiWrapper } from "google-maps-react"
import Styles from "./styles/contact.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"

const MainContent = props => {
  const mapStyles = {
    width: "100%",
    height: "100%",
  }
  let card = `card mb-3 ${Styles.card}`
  let cardTitle = `card-title text-center ${Styles.cardTitle}`
  let submitBtn = ` btn btn-block ${Styles.submitButton} mb-2`
  return (
    <div className={Styles.container}>
      <div className={card}>
        <div className="row no-gutters">
          <div className="col-md-5">
            <div className="card-body">
              <h5 className={cardTitle}>We'd love to hear from you</h5>
              <div className="text-center mt-3 mb-3">
                <p className="badge badge-info mr-2">We love ideas</p>
                <p className="badge badge-warning mr-2">We solve issues</p>
                <p className="badge badge-danger mr-2">We act fast</p>
                <p className="badge badge-success mr-2">We value you</p>
              </div>
              <form>
                <div className="row mb-3">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email Address"
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    class="form-control"
                    placeholder="Your Message"
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
          <div className="col-md-7">
            <Map
              google={props.google}
              zoom={8}
              style={mapStyles}
              initialCenter={{ lat: -1.2921, lng: 36.8219 }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GoogleApiWrapper({
  apiKey: process.env.GOOGLE_MAPS_API_KEY,
})(MainContent)
