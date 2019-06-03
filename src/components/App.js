import React from "react";
import CardNumber from "./CardNumber";
import Basic from "./Basic";
import Contacts from "./Contacts";
import Avatar from "./Avatar";
import Finish from "./Finish";

export default class App extends React.Component {
    cardsActions = [];

    constructor() {
        super();

        this.state = {
            result: {},
            current_card: 1,
        };
        this.state['cards'] = [
            <Basic setClick={click => this.cardsActions[1] = click}/>,
            <Contacts setClick={click => this.cardsActions[2] = click}/>,
            <Avatar setClick={click => this.cardsActions[3] = click}/>,
            <Finish result={this.state.result}/>
        ];
    }

    createCardNumbers = () => {
        let cardNumbers = [];
        for (let i = 0; i < 4; i++) {
            cardNumbers.push(<CardNumber
                key={i}
                number={i + 1}
                position={this.state.current_card}/>);
        }
        return cardNumbers;
    };

    changeCurrentCard = (value) => {
        this.setState({
            current_card: this.state.current_card + value
        });
    };

    getCard = () => {
        return this.state.cards[this.state.current_card - 1]
    };

    render() {
        return (
            <div className="form-container card">
                <div className="card">
                    <div className="card-header">
                        <div className="container">
                            <div className="row justify-content-md-center">
                                {this.createCardNumbers()}
                            </div>
                        </div>
                    </div>
                    <div className="card-block">
                        {this.getCard()}
                    </div>
                    <div className="card-footer text-center">
                        {(() => {
                            if (this.state.current_card === this.state.cards.length) {
                                return <div className="btn-group" role="group" aria-label="Basic example">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        onClick={() => {
                                            this.setState({
                                                current_card: 1,
                                                result: {},
                                            });
                                        }}
                                    >
                                        Reset
                                    </button>
                                </div>;
                            }
                            return <div className="btn-group" role="group" aria-label="Basic example">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    disabled={this.state.current_card <= 1}
                                    onClick={() => {
                                        this.changeCurrentCard(-1)
                                    }}
                                >
                                    Previous
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    disabled={this.state.cards.length <= this.state.current_card}
                                    onClick={() => {
                                        let result = this.cardsActions[this.state.current_card]();
                                        if (result) {
                                            this.state.result[Object.keys(result)[0]] = Object.values(result)[0];
                                            this.changeCurrentCard(1)
                                        }
                                    }}
                                >
                                    Next
                                </button>
                            </div>;
                        })()}
                    </div>
                </div>
            </div>
        );
    }
}
