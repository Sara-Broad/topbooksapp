import React from 'react';
import "./SearchWrapper.css";

const SearchWrapper = props => (
    <div className="search-wrapper">
    <h1 className="search-title">Search Books</h1>
    <input
    className="search-bar form-control"
    name="searchbar"
    placeholder="Search for a book"
    />
    <button
    type="submit"
    //onClick={props.handleFormSubmit}
    className="btn btn-success"
    >
    Submit
    </button>
    </div>
)

export default SearchWrapper;

