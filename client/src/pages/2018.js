import React, { Component } from 'react';
import Header from "../components/Header";
import NavBar from '../components/NavBar/NavBar';
import FictionBox from "../components/FictionBox/FictionBox";
import NonFictionBox from "../components/NonFictionBox/NonFictionBox";
import Footer from "../components/Footer/Footer";
import SearchWrapper from '../components/SearchWrapper/SearchWraper';
// import SearchWrapper from "../components/SearchWrapper/SearchWraper";
// import SearchResultsBox from "../components/SearchResultsBox/SearchResultsBox";
// import SearchBar from "../components/SearchBar/SearchBar";

class Eighteen extends Component {

    render() {
        return (
            <div>
            <Header />
            <NavBar />
            <FictionBox />
            <NonFictionBox />
            {/* <SearchWrapper>
            <SearchBar />
            <SearchResultsBox />
            </SearchWrapper> */}
            
            <Footer />
            </div>
        )
    }
}

export default Eighteen;