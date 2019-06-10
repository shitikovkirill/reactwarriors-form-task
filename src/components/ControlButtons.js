import React from "react";

const ControlButtons = props => {
    return (
        <div className="card-footer text-center">
            {props.currentCard === 4 && (
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => {
                            props.reset();
                        }}
                    >
                        Reset
                    </button>
                </div>)
            }
            {props.currentCard < 4 && (
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button
                        type="button"
                        className="btn btn-secondary"
                        disabled={props.currentCard <= 1}
                        onClick={() => {
                            props.changeCurrentCard(-1)
                        }}
                    >
                        Previous
                    </button>
                    <button
                        type="button"
                        className="btn btn-secondary"
                        disabled={4 <= props.currentCard}
                        onClick={() => {
                            props.submit();
                        }}
                    >
                        Next
                    </button>
                </div>)}
        </div>
    )
};

export default ControlButtons;