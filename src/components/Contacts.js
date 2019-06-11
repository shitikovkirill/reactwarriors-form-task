import React from "react";
import Field from "./Common/Field";
import Select from "./Common/Select";
import countries from "../data/countries";
import cities from "../data/cities";

let new_cities = Object.keys(cities).map(function (key) {
    cities[key].id = Number(key);
    return cities[key];
});

export default class Contacts extends React.Component {

    getCities = () => {
        return new_cities.filter(sity => sity.country == this.props.values.country);
    };

    render() {
        let values = this.props.values;
        let errors = this.props.errors;
        return (
            <div className="form card-body">
                <Field
                    id="email"
                    labelText="Email"
                    type="text"
                    placeholder="Enter email"
                    name="email"
                    value={values.email}
                    onChange={this.props.onChange}
                    error={errors.email}
                />
                <Field
                    id="mobile"
                    labelText="Mobile"
                    type="text"
                    placeholder="Enter mobile"
                    name="mobile"
                    value={values.mobile}
                    onChange={this.props.onChange}
                    error={errors.mobile}
                />
                <Select
                    id="country"
                    labelText="Country"
                    name="country"
                    value={values.country}
                    onChange={this.props.onChange}
                    options={countries}
                />
                <Select
                    id="city"
                    labelText="City"
                    name="city"
                    value={values.city}
                    onChange={this.props.onChange}
                    options={this.getCities()}
                    firstItem="Select city"
                    error={errors.city}
                />
            </div>
        )
    }
}