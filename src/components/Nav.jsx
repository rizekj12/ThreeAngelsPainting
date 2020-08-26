import React, { Component } from 'react';
import '../CSS/Nav.css'

class Nav extends Component {
    state = {  }
    render() { 
        return (
            <div className="headingDiv">
                <h1 className="headingTitle">Three Angels Painting</h1>
                <h3>Jose Rizek</h3>
                <nav className="navDiv">
                    <h4 className="navItem">About</h4>
                    <h4 className="navItem">photos</h4>
                    <h4 className="navItem">Contact me</h4>
                </nav>
            </div>

          );
    }
}
 
export default Nav;