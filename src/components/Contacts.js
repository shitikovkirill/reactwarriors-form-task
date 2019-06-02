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
    constructor() {
        super();

        this.state = {
            email: "",
            mobile: "",
            country: countries[0].id,
            city: "",
            errors: {
                email: false,
                mobile: false,
                country: false,
                city: false,
            }
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    getCities = () => {
        return new_cities.filter(sity => sity.country == this.state.country);
    };

    componentDidMount() {
        this.props.setClick(this.onSubmit);
    }

    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    validateEmail = function (email) {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    validateMobile = function (mobile) {
        let re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        return re.test(mobile);
    };

    onSubmit = function () {
        const errors = {};

        let emailValidation = this.validateEmail(this.state.email);
        if (!this.state.email) {
            errors.email = "Required";
        } else if (!emailValidation) {
            errors.email = "Invalid email address";
        }

        let mobileValidation = this.validateMobile(this.state.mobile);
        if (!this.state.mobile) {
            errors.mobile = "Required";
        } else if (!mobileValidation) {
            errors.mobile = "Invalid mobile";
        }

        if (!this.state.city) {
            errors.city = "Required";
        }

        if (Object.keys(errors).length > 0) {
            // error
            this.setState({
                errors: errors
            });
        } else {
            this.setState({
                errors: {}
            });

            return {
                contacts:
                    {
                        email: this.state.email,
                        mobile: this.state.mobile,
                        country: this.state.country,
                        city: this.state.city,
                    }
            };
        }
    };

    render() {
        return (
            <div className="form card-body">
                <Field
                    id="email"
                    labelText="Email"
                    type="text"
                    placeholder="Enter email"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    error={this.state.errors.email}
                />
                <Field
                    id="mobile"
                    labelText="Mobile"
                    type="text"
                    placeholder="Enter mobile"
                    name="mobile"
                    value={this.state.mobile}
                    onChange={this.onChange}
                    error={this.state.errors.mobile}
                />
                <Select
                    id="country"
                    labelText="Country"
                    name="country"
                    value={this.state.country}
                    onChange={this.onChange}
                    options={countries}
                />
                <Select
                    id="city"
                    labelText="City"
                    name="city"
                    value={this.state.city}
                    onChange={this.onChange}
                    options={this.getCities()}
                    firstItem="Select city"
                    error={this.state.errors.city}
                />
            </div>
        )
    }
}