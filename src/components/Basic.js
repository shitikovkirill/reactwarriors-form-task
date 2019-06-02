import React from "react";
import Field from "./Common/Field";

export default class Basic extends React.Component {
    constructor() {
        super();

        this.state = {
            firstname: "",
            lastname: "",
            password: "",
            repeatPassword: "",
            gender: "male",
            errors: {
                firstname: false,
                lastname: false,
                password: false,
                repeatPassword: false,
            }
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        this.props.setClick(this.onSubmit);
    }

    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    onSubmit = function () {
        const errors = {};
        if (!this.state.firstname) {
            errors.firstname = "Required";
        } else if (this.state.firstname.length < 5) {
            errors.firstname = "Must be 5 characters or more";
        }

        if (!this.state.lastname) {
            errors.lastname = "Required";
        } else if (this.state.lastname.length < 5) {
            errors.lastname = "Must be 5 characters or more";
        }

        if (!this.state.password) {
            errors.password = "Required";
        } else if (this.state.password < 3) {
            errors.password = "Must be 3 characters or more";
        }

        if (this.state.password !== this.state.repeatPassword) {
            errors.repeatPassword = "Must be equal password";
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
                basic: {
                    firstname: this.state.firstname,
                    lastname: this.state.lastname,
                    password: this.state.password,
                    gender: this.state.gender
                }
            };
        }
    };

    render() {
        return (
            <div className="form card-body">
                <Field
                    id="firstname"
                    labelText="Firstname"
                    type="text"
                    placeholder="Enter firstname"
                    name="firstname"
                    value={this.state.firstname}
                    onChange={this.onChange}
                    error={this.state.errors.firstname}
                />
                <Field
                    id="lastname"
                    labelText="Lastname"
                    type="text"
                    placeholder="Enter Lastname"
                    name="lastname"
                    value={this.state.lastname}
                    onChange={this.onChange}
                    error={this.state.errors.lastname}
                />
                <Field
                    id="password"
                    labelText="Password"
                    type="password"
                    placeholder="Enter password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                    error={this.state.errors.password}
                />
                <Field
                    id="repeatPassword"
                    labelText="Repeat password"
                    type="password"
                    placeholder="Enter repeat password"
                    name="repeatPassword"
                    value={this.state.repeatPassword}
                    onChange={this.onChange}
                    error={this.state.errors.repeatPassword}
                />
                <fieldset className="form-group">
                    <div>Gender</div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="male"
                            name="gender"
                            value="male"
                            checked={this.state.gender === "male"}
                            onChange={this.onChange}
                        />
                        <label className="form-check-label" htmlFor="male">
                            Male
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="female"
                            name="gender"
                            value="female"
                            checked={this.state.gender === "female"}
                            onChange={this.onChange}
                        />
                        <label className="form-check-label" htmlFor="female">
                            Female
                        </label>
                    </div>
                </fieldset>
            </div>
        );
    }
}
