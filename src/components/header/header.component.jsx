import React from 'react'
import { Link } from 'react-router-dom';
import './header.component.css';
import ChapAfrik from '../../assets/images/ChapAfrik.png';

function header() {
    return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container-fluid">
            <Link className="navbar-brand" to="#">
            <img
            className="nav__logo" 
            src={ChapAfrik} 
            alt="logo"/>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <Link className="nav-link text-light active" aria-current="page" to="#">About Us</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link text-light" to="#">Meet Us</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link text-light" to="#">Contact Us</Link>
                </li>
            </ul>
            </div>
        </div>
    </nav>
    )
}

export default header
