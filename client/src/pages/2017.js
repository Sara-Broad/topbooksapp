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

state = {
    books: [],
    title: '',
    author: ''
}

//1. On load, load saved fiction and non-fiction books from database
//2. 


//componentDidMount{
//     this.getSavedFiction()
//     this.getSavedNonFiction()
// }


handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
        [name]: value
    })
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