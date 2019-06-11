import React from "react";
import Field from "./Common/Field";

const Basic = props => {
    let {values, errors} = props;
    return (
        <div className="form card-body">
            <Field
                id="firstname"
                labelText="Firstname"
                type="text"
                placeholder="Enter firstname"
                name="firstname"
                value={values.firstname}
                onChange={props.onChange}
                error={errors.firstname}
            />
            <Field
                id="lastname"
                labelText="Lastname"
                type="text"
                placeholder="Enter Lastname"
                name="lastname"
                value={values.lastname}
                onChange={props.onChange}
                error={errors.lastname}
            />
            <Field
                id="password"
                labelText="Password"
                type="password"
                placeholder="Enter password"
                name="password"
                value={values.password}
                onChange={props.onChange}
                error={errors.password}
            />
            <Field
                id="repeatPassword"
                labelText="Repeat password"
                type="password"
                placeholder="Enter repeat password"
                name="repeatPassword"
                value={values.repeatPassword}
                onChange={props.onChange}
                error={errors.repeatPassword}
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
                        checked={values.gender === "male"}
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
                        checked={values.gender === "female"}
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
