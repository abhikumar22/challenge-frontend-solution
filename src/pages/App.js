import React from "react";
import "../assets/css/style.css";
import {
  STRINGS,
  MONTHLY_RENTAL_AMOUNT_OPTIONS,
  ZIPCODE_OPTIONS,
  CUSTOMER_AGE_OPTIONS,
  PRODUCT_NAME_OPTIONS,
  RENTAL_TENURE_OPTIONS
} from "../utils/constants";
import Select from 'react-select';
import { Slider } from '@material-ui/core';



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundcolor: "transparent",
      selectedMonthlyRentalAmountOption: null,
      selectedZipcodeOption: null,
      selectedAgeOption: null,
      selectedTenureOption: null,
      selectedProductOption: null,
      newValue: []
    };
    this.landingDiv = React.createRef();
    this.homeDiv = React.createRef();
    this.profileDiv = React.createRef();
    this.monthlyRentalAmountOptions = [
      { value: 1, label: '0 - $1000' },
      { value: 2, label: '$1001 - $2000' },
      { value: 3, label: '$2001 - $3000' },
      { value: 4, label: '$3001 - $4000' },
      { value: 5, label: '$4001 - $5000' },
      { value: 6, label: 'more than 5001$' },
    ];
    this.zipcodeOptions = [
      { value: '35801', label: 'Alabama 35801' },
      { value: '99501', label: 'Alaska 99501' },
      { value: '85001', label: 'Arizona 85001' },
      { value: '94203', label: 'Arkansas 94203' },
      { value: '90001', label: 'California 90001' },

    ];
    this.customerAgeOptions = [
      { value: 1, label: 'less than 21' },
      { value: 2, label: 'greater than 21' },
    ];
    this.productsOptions = [
      { value: 1, label: 'TV' },
      { value: 2, label: 'Washing Machine' },
      { value: 3, label: 'Air Conditioner' },
    ];
    this.rentalTenureOptions = [
      { value: [0, 3], label: '0 - 3' },
      { value: [3, 6], label: '3 - 6' },
      { value: [6, -1], label: 'more than 6 months' },

    ];
  }


  handleChange = (event, newValue) => {
    this.setState({ newValue }, () => {
      // console.log("vall",newValue)
    });
  };


  handleChangeRental = (selectedMonthlyRentalAmountOption) => {
    this.setState(
      { selectedMonthlyRentalAmountOption },
      () => console.log(`Option selected:`, this.state.selectedMonthlyRentalAmountOption)
    );
  };
  handleChangeZipcode = (selectedZipcodeOption) => {
    this.setState(
      { selectedZipcodeOption },
      () => console.log(`Option selected:`, this.state.selectedZipcodeOption)
    );
  };

  handleChangeAge = (selectedAgeOption) => {
    this.setState(
      { selectedAgeOption },
      () => console.log(`Option selected:`, this.state.selectedAgeOption)
    );
  };

  handleChangeProduct = (selectedProductOption) => {
    this.setState(
      { selectedProductOption },
      () => console.log(`Option selected:`, this.state.selectedProductOption)
    );
  };

  handleChangeTenure = (selectedTenureOption) => {
    this.setState(
      { selectedTenureOption },
      () => console.log(`Option selected:`, this.state.selectedTenureOption)
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

                        <div className="py-1 row">
                          <div className="col-6">
                            <p>{STRINGS.MONTHLY_RENTAL_AMOUNT}</p>
                          </div>
                          <div className="col-6">
                            <Select
                              value={this.state.selectedMonthlyRentalAmountOption}
                              onChange={this.handleChangeRental}
                              options={MONTHLY_RENTAL_AMOUNT_OPTIONS}
                              isClearable={true}
                              isSearchable={false}
                            />
                          </div>
                        </div>
                        <p>{STRINGS.CUSTOMER_AGE}</p>
                        <Select
                          value={this.state.selectedAgeOption}
                          onChange={this.handleChangeAge}
                          options={this.customerAgeOptions}
                          isClearable={true}
                          isSearchable={false}
                        />
                        <p>{STRINGS.ZIPCODE}</p>
                        <Select
                          value={this.state.selectedZipcodeOption}
                          onChange={this.handleChangeZipcode}
                          options={this.zipcodeOptions}
                          isClearable={true}
                          isSearchable={true}
                        />
                        <p>{STRINGS.PRODUCT_NAME}</p>
                        <Select
                          value={this.state.selectedProductOption}
                          onChange={this.handleChangeProduct}
                          options={this.productsOptions}
                          isClearable={true}
                          isSearchable={true}
                        />
                        <p>{STRINGS.RENTAL_TENURE}</p>
                        <Select
                          value={this.state.selectedTenureOption}
                          onChange={this.handleChangeTenure}
                          options={this.rentalTenureOptions}
                          isClearable={true}
                          isSearchable={false}
                        />
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
