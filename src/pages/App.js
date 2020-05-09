import React from "react";
import "../assets/css/style.css";
import {
  DATA_TABLE_VALUE,
  DATA_TABLE,
  STRINGS,
  MONTHLY_RENTAL_AMOUNT_OPTIONS,
  ZIPCODE_OPTIONS,
  CUSTOMER_AGE_OPTIONS,
  PRODUCT_NAME_OPTIONS,
  RENTAL_TENURE_OPTIONS,
  COLORS
} from "../utils/constants";
import FieldComponent from '../component/FieldComponent'
import Select from 'react-select';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import MaterialTable from 'material-table';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundcolor: COLORS.TRANSPARENT,
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
    function createData(name, calories, fat, carbs, protein) {
      return { name, calories, fat, carbs, protein };
    }
    this.rows = [
      createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
      createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
      createData('Eclair', 262, 16.0, 24, 6.0),
      createData('Cupcake', 305, 3.7, 67, 4.3),
      createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];
  }

  listenScrollEvent = (e) => {
    if (window.scrollY > 100) {
      this.setState({ backgroundColor: COLORS.OVERLAY });
    } else {
      this.setState({ backgroundColor: COLORS.TRANSPARENT });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  handleChangeRental = (selectedMonthlyRentalAmountOption) => {
    this.setState({ selectedMonthlyRentalAmountOption });
  };

  handleChangeZipcode = (selectedZipcodeOption) => {
    this.setState({ selectedZipcodeOption });
  };

  handleChangeAge = (selectedAgeOption) => {
    this.setState({ selectedAgeOption });
  };

  handleChangeProduct = (selectedProductOption) => {
    this.setState({ selectedProductOption });
  };

  handleChangeTenure = (selectedTenureOption) => {
    this.setState({ selectedTenureOption });
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

  submitRule() {
    console.log(
      "..Amount", this.state.selectedMonthlyRentalAmountOption.value)
    console.log("..Age", this.state.selectedAgeOption.value)
    console.log("..ZipCode", this.state.selectedZipcodeOption.value)
    console.log("..Product Name", this.state.selectedProductOption.value)
    console.log("..Rental Tenure", this.state.selectedTenureOption.value)

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
                  <div className="formBorder pb-5 px-5">
                    <form className="w-100 text-center mt-4">
                      <div className="form-group">
                        <FieldComponent
                          heading={STRINGS.MONTHLY_RENTAL_AMOUNT}
                          value={this.state.selectedMonthlyRentalAmountOption}
                          onChange={this.handleChangeRental.bind(this)}
                          options={MONTHLY_RENTAL_AMOUNT_OPTIONS}
                        />
                        <FieldComponent
                          heading={STRINGS.CUSTOMER_AGE}
                          value={this.state.selectedAgeOption}
                          onChange={this.handleChangeAge.bind(this)}
                          options={CUSTOMER_AGE_OPTIONS}
                        />

                        <FieldComponent
                          heading={STRINGS.ZIPCODE}
                          value={this.state.selectedZipcodeOption}
                          onChange={this.handleChangeZipcode.bind(this)}
                          options={ZIPCODE_OPTIONS}
                        />

                        <FieldComponent
                          heading={STRINGS.PRODUCT_NAME}
                          value={this.state.selectedProductOption}
                          onChange={this.handleChangeProduct.bind(this)}
                          options={PRODUCT_NAME_OPTIONS}
                        />

                        <FieldComponent
                          heading={STRINGS.RENTAL_TENURE}
                          value={this.state.selectedTenureOption}
                          onChange={this.handleChangeTenure.bind(this)}
                          options={RENTAL_TENURE_OPTIONS}
                        />
                      </div>

                    </form>
                    <button onClick={() => {
                      this.submitRule()
                    }} className="w-100 btn btn-primary mt-3">Submit
                      </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div ref={this.profileDiv} className="div3">
          <div className="bbg">
            <div className="container h-100">
              <div className="row align-items-center h-100">
                <div className="col-11 col-sm-11 col-md-11 col-lg-11 mx-auto py-5">
                  <MaterialTable
                    options={{
                      pageSizeOptions: [5],
                      search: false,
                      padding: ('dense')
                    }
                    }
                    columns={DATA_TABLE}
                    data={DATA_TABLE_VALUE}
                    title="Rules"
                  // editable={{
                  //   onRowAdd: (newData) =>
                  //     new Promise((resolve) => {
                  //       setTimeout(() => {
                  //         resolve();
                  //         this.handleClick(1)
                  //       }, 600);
                  //     }),
                  //   onRowUpdate: (newData, oldData) =>
                  //     new Promise((resolve) => {
                  //       setTimeout(() => {
                  //         resolve();
                  //         if (oldData) {
                  //           this.setState((prevState) => {
                  //             const data = [...prevState.data];
                  //             data[data.indexOf(oldData)] = newData;
                  //             return { ...prevState, data };
                  //           });
                  //         }
                  //       }, 600);
                  //     }),
                  //   onRowDelete: (oldData) =>
                  //     new Promise((resolve) => {
                  //       setTimeout(() => {
                  //         resolve();
                  //         this.setState((prevState) => {
                  //           const data = [...prevState.data];
                  //           data.splice(data.indexOf(oldData), 1);
                  //           return { ...prevState, data };
                  //         });
                  //       }, 600);
                  //     }),
                  // }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}
