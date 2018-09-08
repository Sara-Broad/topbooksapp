import React, { Component } from 'react';
import Header from "../components/Header";
import NavBar from '../components/NavBar/NavBar';
import FictionBox from "../components/FictionBox/FictionBox";
import NonFictionBox from "../components/NonFictionBox/NonFictionBox";
import Footer from "../components/Footer/Footer";

class Seventeen extends Component {

    render() {
        return (
            <div>
            <Header />
            <NavBar />
            <FictionBox />
            <NonFictionBox />
            <Footer />
            </div>
        )
    }
}

export default Seventeen;