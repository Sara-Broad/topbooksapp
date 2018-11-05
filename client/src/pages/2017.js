import React, { Component } from 'react';
import NavBar from '../components/NavBar/NavBar';
import FictionBox from "../components/FictionBox/FictionBox";
import NonFictionBox from "../components/NonFictionBox/NonFictionBox";
// import Footer from "../components/footer/footer";
import SearchWrapper from '../components/SearchWrapper/SearchWrapper';
import SearchResultsBox from "../components/SearchResultsBox/SearchResultsBox";
import SearchBar from "../components/SearchBar/SearchBar";
import API from "../utils/API";

class Seventeen extends Component {

//componentDidMount{
//     this.getSavedFiction()
//     this.getSavedNonFiction()
// }


handleInputChange = event => {
    this.setState({ search: event.target.value })
}

handleFormSubmit = event => {
    event.preventDefault();
}

    render() {
        return (
            <div>
            <NavBar />
            <SearchWrapper>
            <SearchBar />
            <SearchResultsBox /> 
            </SearchWrapper>
            <FictionBox />
            <NonFictionBox />
            {/* <Footer /> */}
            </div>
        )
    }
}

export default Seventeen;