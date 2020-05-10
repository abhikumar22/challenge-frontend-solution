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
    };
    this.landingDiv = React.createRef();
    this.homeDiv = React.createRef();
    this.profileDiv = React.createRef();
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
    if (this.state.selectedMonthlyRentalAmountOption === null &&
      this.state.selectedAgeOption === null &&
      this.state.selectedZipcodeOption === null &&
      this.state.selectedProductOption === null &&
      this.state.selectedTenureOption === null) {
      alert("Please Select atleast one rule");
    } else {
      const body = {
        rentalAmount: this.state.selectedMonthlyRentalAmountOption === null ? null : this.state.selectedMonthlyRentalAmountOption.value,
        customerAge: this.state.selectedAgeOption === null ? null : this.state.selectedAgeOption.value,
        zipCode: this.state.selectedZipcodeOption === null ? null : this.state.selectedZipcodeOption.value,
        productName: this.state.selectedProductOption === null ? null : this.state.selectedProductOption.value,
        rentalTenure: this.state.selectedTenureOption === null ? null : this.state.selectedTenureOption.value,
      };
      // here we have to do a fetch call( React API Call ) to Add a New rule into the system, 
      // so the above body with the params is send as POST data
      alert("Body of POST call for adding a new Rule\n" + JSON.stringify(body));
      window.location.reload();
    }
  }

  updateRule() {
    const body = {
      rentalAmount: this.state.selectedMonthlyRentalAmountOption.value,
      customerAge: this.state.selectedAgeOption.value,
      zipCode: this.state.selectedZipcodeOption.value,
      productName: this.state.selectedProductOption.value,
      rentalTenure: this.state.selectedTenureOption.value,
    };
    // here we have to do a fetch call( React API Call ) to update the particular Rule, 
    // so the above body with the params is send as POST data
    alert(
      "Body of POST call for Editing an existing rule\n" + JSON.stringify(body)
    );
    window.location.reload();
  }

  deleteRule(data) {
    // here we have to do a fetch call( React API Call ) to delete a Rule, 
    // so the body displayed with the params is send as POST data to update the records in the DB
    alert(STRINGS.DELETE_RULE_MESSAGE + ".." + JSON.stringify(data));
  }

  setDataOnEdit(editedData) {
    this.setState({
      selectedMonthlyRentalAmountOption: editedData.monthly_rent_low === null ? null : getSelectedValue(
        MONTHLY_RENTAL_AMOUNT_OPTIONS,
        editedData.monthly_rent_low,
        FIELD_TYPE.ARRAY
      ),
      selectedAgeOption: editedData.age_low === null ? null : getSelectedValue(
        CUSTOMER_AGE_OPTIONS,
        editedData.age_low,
        FIELD_TYPE.ARRAY
      ),
      selectedZipcodeOption: editedData.zip === null ? null : getSelectedValue(
        ZIPCODE_OPTIONS,
        editedData.zip,
        FIELD_TYPE.NUMBER
      ),
      selectedProductOption: editedData.product === null ? null : getSelectedValue(
        PRODUCT_NAME_OPTIONS,
        editedData.product,
        FIELD_TYPE.NUMBER
      ),
      selectedTenureOption: editedData.rental_low === null ? null : getSelectedValue(
        RENTAL_TENURE_OPTIONS,
        editedData.rental_low,
        FIELD_TYPE.ARRAY
      ),
    });
  }

  render() {
    return (
      <div ref={this.landingDiv} className="first">
        <div className="overlayBackground">
          <nav
            className="navbar navbar-expand-lg navbar-dark fixed-top py-2"
            style={{ backgroundColor: COLORS.OVERLAY }}
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
                  data-toggle="collapse" data-target=".navbar-collapse.show"
                  className="nav-item active cursorPointer mr-5 "
                  onClick={() => {
                    this.handleClick(0);
                  }}
                >
                  <h5 className="nav-link">{STRINGS.NAV_HOME}</h5>
                </li>
                <li
                  data-toggle="collapse" data-target=".navbar-collapse.show"
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

          <div className="overlayBackground text-black">
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
                      className="w-100 btn mt-3"
                      style={{ backgroundColor: COLORS.lIME }}
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
        <div ref={this.homeDiv}>
          <MaterialTable
            style={{}}
            actions={[
              {
                // iconProps:[{marginLeft:"100px"}},
                tooltip: STRINGS.DELETE_RULE,
                icon: STRINGS.DELETE,
                onClick: (evt, data) => {
                  this.deleteRule(data)
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
              pageSizeOptions: [10],
              pageSize: 7,
              search: false,
              tableLayout: "auto"
            }}
            columns={DATA_TABLE}
            data={DATA_TABLE_VALUE}
            title={STRINGS.RULE}
          />
        </div>
      </div>
    );
  }
}
