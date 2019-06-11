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

                avatar: "https://reactwarriors.github.io/reactwarriors-stage-2/static/media/default-avatar.59337bae.png",
                loaded: true,
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
        let values = {...this.state.values};
        values[event.target.name] = event.target.value;
        this.setState({values});
    };

    onChangeAvatar = event => {
        const reader = new FileReader();
        reader.onload = event => {
            let values = {...this.state.values};
            values['avatar'] = event.target.result;
            values['loaded'] = true;
            this.setState({values});
        };

        reader.readAsDataURL(event.target.files[0]);
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
        switch(this.state.currentCard) {
            case 1:
                if (this.validateBasic()) {
                    this.changeCurrentCard(+1)
                }
                break;
            case 2:
                if (this.validateContacts()) {
                    this.changeCurrentCard(+1)
                }
                break;
            case 3:
                if (this.validateAvatar()) {
                    this.changeCurrentCard(+1)
                }
                break;
        }
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

        this.setState({
            errors: errors
        });

        return Object.keys(errors).length === 0
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

        this.setState({
            errors: errors
        });

        return Object.keys(errors).length === 0
    };

    validateAvatar = function () {
        const errors = {};
        let values = this.state.values;
        if (!values.loaded) {
            errors.avatar = "Required";
        }

        this.setState({
            errors: errors
        });

        return Object.keys(errors).length === 0
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
                                {[1,2,3,4].map((number) => <CardNumber
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
                            onChangeAvatar={this.onChangeAvatar}/>)}

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
