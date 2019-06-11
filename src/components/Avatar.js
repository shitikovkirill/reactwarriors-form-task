import React from "react";

export default class Avatar extends React.Component {
    render() {
        let {values, errors} = this.props;
        return (
            <div className="form card-body">
                <img src={values.avatar} className="img-fluid" alt="Responsive image"/>
                <div className="form-group">
                    <label htmlFor="avatar" className="custom-file-label invalid">Avatar</label>
                    <input
                        type="file"
                        className="form-control-file"
                        id="avatar"
                        name="avatar"
                        onChange={this.props.onChangeAvatar}
                    />
                </div>
                {errors.avatar ? <div className="invalid-feedback">{errors.avatar}</div> : null}
            </div>
        );
    }
}