import React from "react";

export default class Avatar extends React.Component {
    constructor() {
        super();

        this.state = {
            avatar: "https://reactwarriors.github.io/reactwarriors-stage-2/static/media/default-avatar.59337bae.png",
            loaded: false,
            errors: {
                avatar: false,
            }
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        this.props.setClick(this.onSubmit);
    }

    onChangeAvatar = event => {
        const reader = new FileReader();
        reader.onload = event => {
            this.setState({
                avatar: event.target.result,
                loaded: true
            });
        };

        reader.readAsDataURL(event.target.files[0]);
    };

    onSubmit = function () {
        const errors = {};

        if (!this.state.loaded) {
            errors.avatar = "Required";
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
                avatar:
                    {
                        avatar: this.state.avatar,
                    }
            };
        }
    };

    render() {

        return (
            <div className="form card-body">
                <img src={this.state.avatar} className="img-fluid" alt="Responsive image"/>
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
                {this.state.errors.avatar ? <div className="invalid-feedback">{this.state.errors.avatar}</div> : null}
            </div>
        );
    }
}