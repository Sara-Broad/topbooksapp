import React, { Component } from 'react';
import Header from "../components/Header";
import NavBar from '../components/NavBar/NavBar';
import FictionBox from "../components/FictionBox/FictionBox";

class Eighteen extends Component {

    render() {
        return (
            <div>
            <Header />
            <NavBar />
            <FictionBox />
            </div>
        )
    }
}

export default Eighteen;