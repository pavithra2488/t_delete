import React from 'react';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <h4>Connect with Us</h4>
                <div className="icons">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="icon">
                        <i className="fa fa-facebook"></i>
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="icon">
                        <i className="fa fa-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="icon">
                        <i className="fa fa-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="icon">
                        <i className="fa fa-linkedin"></i>
                    </a>
                </div>
                <p>&copy; {new Date().getFullYear()} Shakthi Restaurant. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
