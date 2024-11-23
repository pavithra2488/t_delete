import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Header = () => {
    return (
        
        <header className="header">
       
            <div className="logo-container">
                
                <img src= "images/logo.jpg" alt="Shakthi Restaurant Logo" className="logo" />  
                <h1 className="title">Shakthi Restaurant</h1>  
            </div> 
           
            <div className="container-fluid main-container">
        
                <nav className="navbar navbar-expand-lg navbar-light ">
            
                    <button className = "navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className = "navbar-toggler-icon"></span>
                    </button>

                    <div className = "collapse navbar-collapse" id="navbarNav">
                        <ul className = "navbar-nav ms-auto">

                            <li className = "nav-item">
                                <Link to="/" className="nav-link"><i className="fas fa-home"></i>Home</Link>
                            </li>
                            <li className = "nav-item">
                                <Link to="/menulist" className="nav-link"><i className="fas fa-utensils"></i>Menu</Link>
                            </li>
                            <li className = "nav-item">
                            <Link to="/menu" className="nav-link"><i className="fas fa-receipt"></i>Orders</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contactus" className="nav-link"><i className="fas fa-envelope"></i>Contact Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link"><i className="fas fa-info-circle"></i>About Us</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
       
    );
};

export default Header;