import React from 'react';
import './Footer.css';

function getYear(){
    let date = new Date();
    let year = date.getFullYear();

    return year;
}

console.log(getYear());

function Footer(){
    return (
        
        <footer className="footer">

            <span>&copy;{getYear()} - <strong>RAFALAZAR</strong></span>
            <img className="footer__logo" src="https://i.ibb.co/brThPY5/logo-rafalazar.png" alt="Rafalazar Logo"/>
            
            <a href="https://github.com/rafalazar" target="_blank">
            <img className="footer__icon"
            src="https://i.ibb.co/42ztBTC/github-logo-white.png" 
            alt="GitHub Icon"/>
            </a>

        </footer>
    );
}

export default Footer;