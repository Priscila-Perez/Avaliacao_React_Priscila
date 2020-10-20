import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import Header from '../templates/header';
import Menu from '../templates/menu';
import Footer from '../templates/footer';
import Routes from './Routes';


export default props => (
    <div className="container">
        <Menu/> 
        <Header/>
        <Routes/>
        <Footer/>
    </div>
    
)