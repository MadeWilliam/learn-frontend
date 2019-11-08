import React, { Component } from "react";
import "./BusinessList.css";
import Business from "../Business/Business";

class BusinessList extends Component {
    // sixBusiness() {
    //     let business = [];
    //     for (let index = 0; index < 6; index++) {
    //         business[index] = <Business />;
    //     }
    //     return business;
    // }

    render() {
        return (
            <div className="BusinessList">
                {this.props.businesses.map(business => {
                   return <Business business={business} />;
                })}
            </div>
        );
    }
}

export default BusinessList;
