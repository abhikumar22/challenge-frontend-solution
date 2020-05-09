import React from "react";
import "../assets/css/style.css";
import { STRINGS } from "../utils/constants";
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundcolor: "transparent",
      selectedOption: null,
    };
    this.landingDiv = React.createRef();
    this.homeDiv = React.createRef();
    this.profileDiv = React.createRef();
  }

  handleChange = selectedOption => {
    this.setState(
      { selectedOption },
      () => console.log(`Option selected:`, this.state.selectedOption)
    );
  };

  handleClick(type) {
    console.log(type);
    if (type === 0) {
      if (this.landingDiv.current) {
        this.landingDiv.current.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }
    } else if (type === 1) {
      if (this.homeDiv.current) {
        this.homeDiv.current.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }
    } else {
      if (this.profileDiv.current) {
        this.profileDiv.current.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }
    }
  }
  listenScrollEvent = (e) => {
    if (window.scrollY > 100) {
      console.log("> 400");
      this.setState({ backgroundColor: "rgba(0, 0, 0, 0.8)" });
    } else {
      console.log("else");
      this.setState({ backgroundColor: "transparent" });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }
  render() {
    return (
      <div ref={this.landingDiv} className="first">
        <div className="bbg">
          <nav
            className="navbar navbar-expand-lg navbar-dark fixed-top py-2"
            style={{ backgroundColor: this.state.backgroundColor }}
          >
            <h1
              onClick={() => {
                this.handleClick(0);
              }}
              className="text-white cursorPointer"
            >
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
                <li
                  className="nav-item active cursorPointer mr-5"
                  onClick={() => {
                    this.handleClick(1);
                  }}
                >
                  <h4 className="nav-link">{STRINGS.NAV_HOME}</h4>
                </li>
                <li
                  className="nav-item active cursorPointer mr-0"
                  onClick={() => {
                    this.handleClick(2);
                  }}
                >
                  <h4 className="nav-link">{STRINGS.NAV_PROFILE}</h4>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div ref={this.homeDiv} className="div2">
          <div className="bbg text-black">
            <div className="container h-100">
              <div className="row align-items-center h-100">
                <div className="col-10 col-sm-10 col-md-8 col-lg-6 mx-auto">
                  <div className="formBorder py-5 px-5">
                    <form className="w-100 text-center">
                      <div className="form-group">
                        <p>Monthly Rental Amount( $ ) :</p>
                        <Select
                          value={this.state.selectedOption}
                          onChange={this.handleChange}
                          options={options}
                        />
                        <p>Customer Age ( Years ) :</p>
                        <p>Zipcode :</p>
                        <p>Product Name :</p>
                        <p>Rental Tenure :</p>
                      </div>
                      <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div ref={this.profileDiv} className="div3">
          <div className="bbg"></div>
        </div>
      </div>
    );
  }
}
