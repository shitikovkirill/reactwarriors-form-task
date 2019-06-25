import React from "react";

export default class Avatar extends React.Component {

    onChangeAvatar = event => {
        const reader = new FileReader();
        reader.onload = event => {
            this.props.onChange({
                target: {
                    name: 'avatar',
                    value: event.target.result
                }
            });
            this.setState({loaded: true});
        };

        reader.readAsDataURL(event.target.files[0]);
    };

    render() {
        let {values, errors} = this.props;
        return (
            <div className="form card-body">
                <img src={values.avatar?values.avatar: "/img/default-avatar.png"} className="img-fluid" alt="Responsive image"/>
                <div className="form-group">
                    <label htmlFor="avatar" className="custom-file-label invalid">Avatar</label>
                    <input
                        type="file"
                        className="form-control-file"
                        id="avatar"
                        name="avatar"
                        onChange={this.onChangeAvatar}
                    />
                </div>
                {errors.avatar ? <div className="invalid-feedback">{errors.avatar}</div> : null}
            </div>
        );
    }
}