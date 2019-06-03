import React from "react";
import countries from "../data/countries";
import cities from "../data/cities";

let newContry={};
countries.forEach(function (item) {
    newContry[item.id]=item;
});

export default class Finish extends React.Component {
    render() {
        const {result} = this.props;
        return (
            <div className="form-group">
                <img src={result.avatar.avatar} className="img-fluid" alt="Responsive image"/>
                <h2>{result.basic.firstname} {result.basic.lastname}</h2>
                <p><strong>Email:</strong> {result.contacts.email}</p>
                <p><strong>Mobile:</strong> {result.contacts.mobile}</p>
                <p><strong>Location:</strong> {newContry[result.contacts.country].name}, {cities[result.contacts.city].name} </p>
            </div>
        );
    }
};
