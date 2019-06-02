import React from "react";

const CardNumber = props => {
    const {
        number,
        position
    } = props;
    let status = number === position ? 'alert-danger' : 'alert-warning';
    return (
        <div className={status + " alert text-center col col-2 m-2"} role="alert">
            {number}
        </div>
    );
};

export default CardNumber;