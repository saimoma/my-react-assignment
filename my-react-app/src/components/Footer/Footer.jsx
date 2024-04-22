import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className='saki'>
        <div className="footer-column">
                <h3>Location</h3>
                <p>Raidakshin,Singair</p>
                <p>Manikganj</p>
            </div>
            <div className="footer-column">
                <h3>Contact Info</h3>
                <p>+8801331591172</p>
            </div>
            <div className="footer-column">
                <h3>Follow us</h3>
                <p><a href="https://www.facebook.com/profile.php?id=61552381078273">Facebook</a></p>
                <p><a href="https://twitter.com/Saimoma6">Twitter</a></p>
                <p><a href="https://www.linkedin.com/in/saimoma-akter-sakila-09bb652a9/">Linkedin</a></p>
                <p><a href="https://github.com/saimoma">Github</a></p>
            </div>
            </div>
            </footer>
    );
};

export default Footer;