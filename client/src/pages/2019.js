import React, { Component } from 'react';
import NavBar from "../components/NavBar/NavBar";
import FictionBox from "../components/FictionBox/FictionBox";
import NonFictionBox from "../components/NonFictionBox/NonFictionBox";
// import Footer from "../components/Footer/Footer";
import SearchWrapper from '../components/SearchWrapper/SearchWrapper';

// import SearchResultsBox from "../components/SearchResultsBox/SearchResultsBox";
// import SearchBar from "../components/SearchBar/SearchBar";

class Nineteen extends Component {

    render() {
        return (
            <div>
            <NavBar />
            <SearchWrapper>
            {/* <SearchBar />
            <SearchResultsBox /> */}
            </SearchWrapper>
            <FictionBox />
            <NonFictionBox />
            {/* <Footer /> */}
            </div>
        )
    }
}
export default Nineteen;