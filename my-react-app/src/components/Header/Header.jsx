import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className='header'>
            <h1>Saimoma</h1>

           
            <ul>
              
                    <NavLink to="/"><li>Home</li></NavLink>
               
               
                    <NavLink to="/about"><li>About</li></NavLink>
              
                    <NavLink to="/blog"><li>Blog</li></NavLink>  
             
              
                    <NavLink to="/contact"><li>Contact</li></NavLink>
              
            </ul>

          <div className="search=-box">
             <input type="text" placeholder="Search"/>
             <img src="" alt=""/>
          </div>

          <img src="" alt=""  className="toggle-icon"/>

        </div>
    );

    
};

export default Header;