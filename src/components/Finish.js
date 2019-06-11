import React from "react";
import countries from "../data/countries";
import cities from "../data/cities";

let newCountry={};
countries.forEach(function (item) {
    newCountry[item.id]=item;
});

export default class Finish extends React.Component {
    render() {
        let {values} = this.props;
        return (
            <div className="form-group">
                <img src={values.avatar} className="img-fluid" alt="Responsive image"/>
                <h2>{values.firstname} {values.lastname}</h2>
                <p><strong>Email:</strong> {values.email}</p>
                <p><strong>Mobile:</strong> {values.mobile}</p>
                <p><strong>Location:</strong> {newCountry[values.country].name}, {cities[values.city].name} </p>
            </div>
        );
    }
};
