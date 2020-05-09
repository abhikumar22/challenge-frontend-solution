import React from "react";
import "../assets/css/style.css";
import { STRINGS } from "../utils/constants";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.landingDiv = React.createRef()
    this.homeDiv = React.createRef()
    this.profileDiv = React.createRef()
  }

  handleClick(type) {
    console.log(type)
    if (type === 0) {
      if (this.landingDiv.current) {
        this.landingDiv.current.scrollIntoView({
          behavior: "smooth",
          block: "nearest"
        })
      }
    }
    else if (type === 1) {
      if (this.homeDiv.current) {
        this.homeDiv.current.scrollIntoView({
          behavior: "smooth",
          block: "nearest"
        })
      }
    } else {
      if (this.profileDiv.current) {
        this.profileDiv.current.scrollIntoView({
          behavior: "smooth",
          block: "nearest"
        })
      }
    }

  }
  render() {
    return (
      <div ref={this.landingDiv} className="first">
        <div className="bbg">
          <nav className="navbar navbar-expand-lg navbar-dark fixed-top ml-3 py-4">
            <h1 onClick={() => { this.handleClick(0) }} className="text-white cursorPointer">{STRINGS.NAV_TITLE}</h1>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active cursorPointer mr-5" onClick={() => {
                  this.handleClick(1)
                }}>
                  <h4 className="nav-link">{STRINGS.NAV_HOME}</h4>
                </li>
                <li className="nav-item active cursorPointer mr-5" onClick={() => { this.handleClick(2) }}>
                  <h4 className="nav-link">{STRINGS.NAV_PROFILE}</h4>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div ref={this.homeDiv} style={{ height: "100vh", backgroundColor: "red" }}></div>
        <div ref={this.profileDiv} style={{ height: "100vh", backgroundColor: "green" }}></div>
      </div>
    );
  }
}
