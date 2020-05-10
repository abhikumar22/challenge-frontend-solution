import React from "react";
import Select from 'react-select';

// Common Component for field Name & Dropdown in add rule box

export default class FieldComponent extends React.Component {
    render() {
        return (
            <div className="py-1 row justify-content-center">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                    <p><strong>{this.props.heading}</strong></p>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                    <Select
                        defaultValue={this.props.defaultValue}
                        value={this.props.value}
                        onChange={this.props.onChange}
                        options={this.props.options}
                        isClearable={true}
                        isSearchable={false}
                    />
                </div>
            </div>);
    }
}