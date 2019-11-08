import React, { Component } from "react";
import "./SearchBar.css";

const sortByOptions = {
    BestMatch: "best_match",
    HighestRated: "rating",
    MostReviewed: "review_count"
};

export class SearchBar extends Component {
    renderSortByOptions() {
        return Object.keys(sortByOptions).map(sortByOptions => {
           return  <li key={sortByOptions}>{sortByOptions}</li>;
        });
    };

    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                        {/* <!-- Use .renderSortByOptions() to sort the businesses by their options --> */}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" />
                    <input placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    <a>Let's Go</a>
                </div>
            </div>
        );
    }
}

export default SearchBar;
