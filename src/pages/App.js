import React from "react";
import "../assets/css/style.css";
import { STRINGS } from "../utils/constants";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundcolor:'transparent'
    };
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
  listenScrollEvent = e => {
    if (window.scrollY > 100) {
      console.log("> 400")
      this.setState({backgroundColor: 'rgba(0, 0, 0, 0.8)'})
    } else {
      console.log("else")
      this.setState({backgroundColor: 'transparent'})
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }
  render() {
    return (
      <div ref={this.landingDiv} className="first">
        <div className="bbg">
          <nav className="navbar navbar-expand-lg navbar-dark fixed-top py-2" style={{backgroundColor:this.state.backgroundColor}}>
            <h1 onClick={() => { this.handleClick(0) }} className="text-white cursorPointer">
            <strong>{STRINGS.NAV_TITLE}</strong>  
              </h1>
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
                <li className="nav-item active cursorPointer mr-0" onClick={() => { this.handleClick(2) }}>
                  <h4 className="nav-link">{STRINGS.NAV_PROFILE}</h4>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div ref={this.homeDiv} className="div2">
        <div className="bbg"></div>
        </div>
        <div ref={this.profileDiv} className="div3">
        <div className="bbg"></div>

        </div>
      </div>
    );
  }
}
