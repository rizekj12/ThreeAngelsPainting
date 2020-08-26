import React from 'react';
import {Component} from 'react'
import Nav from './Nav'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div>
                <Nav/>
            </div>
        )
    }
}
 
export default Home; 

