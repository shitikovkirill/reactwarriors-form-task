import React from "react";
import Field from "./Common/Field";

const Basic = props => {
    return (
        <div className="form card-body">
            <Field
                id="firstname"
                labelText="Firstname"
                type="text"
                placeholder="Enter firstname"
                name="firstname"
                value={props.values.firstname}
                onChange={props.onChange}
                error={props.errors.firstname}
            />
            <Field
                id="lastname"
                labelText="Lastname"
                type="text"
                placeholder="Enter Lastname"
                name="lastname"
                value={props.values.lastname}
                onChange={props.onChange}
                error={props.errors.lastname}
            />
            <Field
                id="password"
                labelText="Password"
                type="password"
                placeholder="Enter password"
                name="password"
                value={props.values.password}
                onChange={props.onChange}
                error={props.errors.password}
            />
            <Field
                id="repeatPassword"
                labelText="Repeat password"
                type="password"
                placeholder="Enter repeat password"
                name="repeatPassword"
                value={props.values.repeatPassword}
                onChange={props.onChange}
                error={props.errors.repeatPassword}
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
                        checked={props.values.gender === "male"}
                        onChange={props.onChange}
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
                        checked={props.values.gender === "female"}
                        onChange={props.onChange}
                    />
                    <label className="form-check-label" htmlFor="female">
                        Female
                    </label>
                </div>
            </fieldset>
        </div>
    );
};

export default Basic;
