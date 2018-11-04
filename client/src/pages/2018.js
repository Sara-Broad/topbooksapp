import React, { Component } from 'react';
import NavBar from '../components/NavBar/NavBar';
import FictionBox from "../components/FictionBox/FictionBox";
import NonFictionBox from "../components/NonFictionBox/NonFictionBox";
// import Footer from "../components/footer/footer";
import SearchWrapper from '../components/SearchWrapper/SearchWrapper';
// import SearchResultsBox from "../components/SearchResultsBox/SearchResultsBox";
// import SearchBar from "../components/SearchBar/SearchBar";

class Eighteen extends Component {

      state = {
          search: "",
          books: [],
          results: []
      };

    render() {
        return (
            <div>
            <NavBar />
          
            <SearchWrapper>
            </SearchWrapper>

            <FictionBox />
            <NonFictionBox />
            {/* <Footer /> */}
            </div>
        )
    }
}

export default Eighteen;