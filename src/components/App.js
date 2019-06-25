import React from "react";
import CardNumber from "./CardNumber";
import Basic from "./Basic";
import Contacts from "./Contacts";
import Avatar from "./Avatar";
import Finish from "./Finish";
import {validateEmail, validateMobile} from "./Helpers/ContactValidators"
import ControlButtons from "./ControlButtons";
import countries from "../data/countries";

export default class App extends React.Component {

    constructor() {
        super();

        this.state = {
            values: {
                firstname: "",
                lastname: "",
                password: "",
                repeatPassword: "",
                gender: "male",

                email: "",
                mobile: "",
                country: countries[0].id,
                city: "",

                avatar: null,
            },
            errors: {
                firstname: false,
                lastname: false,
                password: false,
                repeatPassword: false,

                email: false,
                mobile: false,
                country: false,
                city: false,

                avatar: false,
            },

            currentCard: 1,
        };
    }

    onChange = event => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState(prevState => {
            let state = {
                ...prevState,
            };
            state.values[name] = value;
            return state;
        })
    };

    reset = () => {
        this.setState({
            currentCard: 1,
            values: {
                firstname: "",
                lastname: "",
                password: "",
                repeatPassword: "",
                gender: "male",

                email: "",
                mobile: "",
                country: countries[0].id,
                city: "",

                avatar: "https://reactwarriors.github.io/reactwarriors-stage-2/static/media/default-avatar.59337bae.png",
                loaded: true,
            },
        });
    };

    submit = () => {
        let errors = this.getErrorsByValue();
        this.setState({
            errors: errors
        });

        if (Object.keys(errors).length === 0) {
            this.changeCurrentCard(+1)
        }
    };

    getErrorsByValue(){
        let errors = {};
        switch (this.state.currentCard) {
            case 1:
                errors = this.validateBasic();
                break;
            case 2:
                errors = this.validateContacts();
                break;
            case 3:
                errors = this.validateAvatar();
                break;
        }
        return errors;
    };

    validateBasic = () => {
        const errors = {};
        let values = this.state.values;
        if (!values.firstname) {
            errors.firstname = "Required";
        } else if (values.firstname.length < 5) {
            errors.firstname = "Must be 5 characters or more";
        }

        if (!values.lastname) {
            errors.lastname = "Required";
        } else if (values.lastname.length < 5) {
            errors.lastname = "Must be 5 characters or more";
        }

        if (!values.password) {
            errors.password = "Required";
        } else if (values.password < 3) {
            errors.password = "Must be 3 characters or more";
        }

        if (values.password !== values.repeatPassword) {
            errors.repeatPassword = "Must be equal password";
        }

        return errors
    };

    validateContacts = function () {
        const errors = {};
        let values = this.state.values;
        let emailValidation = validateEmail(values.email);
        if (!values.email) {
            errors.email = "Required";
        } else if (!emailValidation) {
            errors.email = "Invalid email address";
        }

        let mobileValidation = validateMobile(values.mobile);
        if (!values.mobile) {
            errors.mobile = "Required";
        } else if (!mobileValidation) {
            errors.mobile = "Invalid mobile";
        }

        if (!values.city) {
            errors.city = "Required";
        }

        return errors
    };

    validateAvatar = function () {
        const errors = {};
        let values = this.state.values;
        if (!values.avatar) {
            errors.avatar = "Required";
        }

        return errors
    };

    changeCurrentCard = (value) => {
        this.setState({
            currentCard: this.state.currentCard + value
        });
    };

    render = () => {
        return (
            <div className="form-container card">
                <div className="card">
                    <div className="card-header">
                        <div className="container">
                            <div className="row justify-content-md-center">
                                {[1, 2, 3, 4].map((number) => <CardNumber
                                    key={number}
                                    number={number}
                                    position={this.state.currentCard}/>)}
                            </div>
                        </div>
                    </div>
                    <div className="card-block">
                        {this.state.currentCard === 1 &&
                        (<Basic
                            values={this.state.values}
                            errors={this.state.errors}
                            onChange={this.onChange}/>)}

                        {this.state.currentCard === 2 &&
                        (<Contacts
                            currentCard={this.state.currentCard}
                            values={this.state.values}
                            errors={this.state.errors}
                            onChange={this.onChange}/>)}

                        {this.state.currentCard === 3 &&
                        (<Avatar
                            values={this.state.values}
                            errors={this.state.errors}
                            onChange={this.onChange}/>)}

                        {this.state.currentCard === 4 &&
                        (<Finish values={this.state.values}/>)}
                    </div>
                    <ControlButtons
                        currentCard={this.state.currentCard}
                        changeCurrentCard={this.changeCurrentCard}
                        reset={this.reset}
                        submit={this.submit}
                    />
                </div>
            </div>
        );
    }
}
