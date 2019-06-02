import React from "react";

const CardNumber = props => {
    const {
        number,
        position
    } = props;
    return (
        <div className={number === position ? 'alert alert-danger' : 'alert alert-warning'} role="alert">
            {number}
        </div>
    );
};

export default CardNumber;