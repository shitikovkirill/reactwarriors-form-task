import React from "react";

export default class Select extends React.Component {

    getOptionsItems = items => {
        let newItems = items.map(item => (
            <option key={item.id} value={item.id}>
                {item.name}
            </option>
        ));
        if (this.props.firstItem) {
            newItems.unshift(
                <option key="firstItem">
                    {this.props.firstItem}
                </option>
            );
        }
        return newItems;
    };

    render() {
        const {
            id,
            labelText,
            name,
            value,
            options,
            onChange,
            error
        } = this.props;
        return (
            <div className="form-group">
                <label htmlFor={id}>{labelText}</label>
                <select
                    className="form-control"
                    id={id}
                    name={name}
                    value={value}
                    onChange={onChange}
                >
                    {this.getOptionsItems(options)}
                </select>
                {error ? <div className="invalid-feedback">{error}</div> : null}
            </div>
        );
    }
}
