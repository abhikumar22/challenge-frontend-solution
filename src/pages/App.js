import React from "react";
import "../assets/css/style.css";
import {
  FIELD_TYPE,
  DATA_TABLE_VALUE,
  DATA_TABLE,
  STRINGS,
  MONTHLY_RENTAL_AMOUNT_OPTIONS,
  ZIPCODE_OPTIONS,
  CUSTOMER_AGE_OPTIONS,
  PRODUCT_NAME_OPTIONS,
  RENTAL_TENURE_OPTIONS,
  COLORS,
} from "../utils/constants";
import FieldComponent from "../component/FieldComponent";
import MaterialTable from "material-table";
import { getSelectedValue } from "../utils/HelperFunctions";

import { SemipolarLoading } from "react-loadingg";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundcolor: COLORS.OVERLAY,
      selectedMonthlyRentalAmountOption: null,
      selectedZipcodeOption: null,
      selectedAgeOption: null,
      selectedTenureOption: null,
      selectedProductOption: null,
      editedData: null,
      loading:true,
    };
    this.landingDiv = React.createRef();
    this.homeDiv = React.createRef();
    this.profileDiv = React.createRef();
  }

  // listenScrollEvent = (e) => {
  //   this.setState({
  //     backgroundColor:
  //       window.scrollY > 100 ? COLORS.OVERLAY : COLORS.TRANSPARENT,
  //   });
  // };

  componentDidMount() {
    this.setState({loading:false})
    // window.addEventListener("scroll", this.listenScrollEvent);
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
    const body = {
      rentalAmount: this.state.selectedMonthlyRentalAmountOption.value,
      customerAge: this.state.selectedAgeOption.value,
      zipCode: this.state.selectedZipcodeOption.value,
      productName: this.state.selectedProductOption.value,
      rentalTenure: this.state.selectedTenureOption.value,
    };
    // console.log("body",body)
    alert("Body of POST call for adding a new Rule\n" + JSON.stringify(body));
    window.location.reload();
  }

  updateRule() {
    const body = {
      rentalAmount: this.state.selectedMonthlyRentalAmountOption.value,
      customerAge: this.state.selectedAgeOption.value,
      zipCode: this.state.selectedZipcodeOption.value,
      productName: this.state.selectedProductOption.value,
      rentalTenure: this.state.selectedTenureOption.value,
    };
    // console.log("body",body)
    alert(
      "Body of POST call for Editing an existing rule\n" + JSON.stringify(body)
    );
    window.location.reload();
  }

  setDataOnEdit(editedData) {
    this.setState({
      selectedMonthlyRentalAmountOption: getSelectedValue(
        MONTHLY_RENTAL_AMOUNT_OPTIONS,
        editedData.monthly_rent_low,
        FIELD_TYPE.ARRAY
      ),
      selectedAgeOption: getSelectedValue(
        CUSTOMER_AGE_OPTIONS,
        editedData.age_rent_low,
        FIELD_TYPE.ARRAY
      ),
      selectedZipcodeOption: getSelectedValue(
        ZIPCODE_OPTIONS,
        editedData.zip,
        FIELD_TYPE.NUMBER
      ),
      selectedProductOption: getSelectedValue(
        PRODUCT_NAME_OPTIONS,
        editedData.product,
        FIELD_TYPE.NUMBER
      ),
      selectedTenureOption: getSelectedValue(
        RENTAL_TENURE_OPTIONS,
        editedData.rental_low,
        FIELD_TYPE.ARRAY
      ),
    });
  }

  render() {
    return (
      <div>
     {!this.state.loading? <div ref={this.landingDiv} className="first">
        <div className="bbg">
          <nav
            className="navbar navbar-expand-lg navbar-dark fixed-top py-2"
            style={{ backgroundColor:COLORS.OVERLAY }}
          >
            <h2
              onClick={() => {
                this.handleClick(0);
              }}
              className="text-white cursorPointer"
            >
              <strong>{STRINGS.NAV_TITLE}</strong>
            </h2>
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
                    this.handleClick(0);
                  }}
                >
                  <h5 className="nav-link">{STRINGS.NAV_HOME}</h5>
                </li>
                <li
                  className="nav-item active cursorPointer mr-0"
                  onClick={() => {
                    this.handleClick(1);
                  }}
                >
                  <h5 className="nav-link">{STRINGS.NAV_PROFILE}</h5>
                </li>
              </ul>
            </div>
          </nav>

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
                    <button
                      onClick={() => {
                        if (this.state.editedData === null) {
                          this.submitRule();
                        } else {
                          this.updateRule();
                        }
                      }}
                      className="w-100 btn btn-primary mt-3"
                    >
                      {this.state.editedData === null
                        ? STRINGS.SUBMIT
                        : STRINGS.UPDATE}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div ref={this.homeDiv} className="div2">
          <div className="bbg">
            <div className="container h-100">
              <div className="row align-items-center h-100">
                <div className="col-11 col-sm-11 col-md-11 col-lg-12 mx-auto py-5">
                  <MaterialTable
                    actions={[
                      {
                        // iconProps:[{marginLeft:"100px"}},
                        tooltip: STRINGS.DELETE_RULE,
                        icon: STRINGS.DELETE,
                        onClick: (evt, data) => {
                          alert(STRINGS.DELETE_RULE_MESSAGE);
                        },
                      },
                      {
                        tooltip: STRINGS.EDIT_RULE,
                        icon: STRINGS.EDIT,
                        onClick: (evt, data) => {
                          this.setState({ editedData: data }, () => {
                            this.setDataOnEdit(this.state.editedData);
                            this.handleClick(0);
                          });
                        },
                      },
                    ]}
                    options={{
                      showEmptyDataSourceMessage: true,
                      pageSizeOptions: [5],
                      search: false,
                      padding: STRINGS.DENSE,
                    }}
                    columns={DATA_TABLE}
                    data={DATA_TABLE_VALUE}
                    title={STRINGS.RULE}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     :
     <div>
       <SemipolarLoading color={"yellow"} />
     </div>
     } </div>
    );
  }
}
