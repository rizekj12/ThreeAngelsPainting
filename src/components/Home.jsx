import React from 'react';
import { Component } from 'react'
import Nav from './Nav'
import Carousel from "react-elastic-carousel"
import '../CSS/Home.css'
import Grid from "./Grid"

const imgURLs = [
    { url: 'https://i.ibb.co/GpJ6NQ5/20200730-091756.jpg' },
    { url: 'https://i.ibb.co/M1NW5D5/20200730-093209.jpg' },
    { url: 'https://i.ibb.co/Nthx508/20200803-123901.jpg' },
    { url: 'https://i.ibb.co/wckQP4t/20200804-170311.jpg' },
    { url: 'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2019/4/5/0/HUHH2019-Waterfront_Wrightsville-Beach-NC_005.jpg.rend.hgtvcom.616.462.suffix/1554482203555.jpeg' },
]



class Home extends Component {

    state = {
        items: [
          {id: 1, title: 'item #1', url: 'https://i.ibb.co/GpJ6NQ5/20200730-091756.jpg'},
          {id: 2, title: 'item #2', url: 'https://i.ibb.co/M1NW5D5/20200730-093209.jpg'},
          {id: 3, title: 'item #3', url: 'https://i.ibb.co/Nthx508/20200803-123901.jpg' },
          {id: 4, title: 'item #4', url: 'https://i.ibb.co/wckQP4t/20200804-170311.jpg'},
          {id: 5, title: 'item #5', url: 'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2019/4/5/0/HUHH2019-Waterfront_Wrightsville-Beach-NC_005.jpg.rend.hgtvcom.616.462.suffix/1554482203555.jpeg'}
        ]
      }

    render() {

        const { items } = this.state;
        return (
            <div>
                <Nav />
                <div className="carousel-div">
                <Carousel 
                className="rec"
                enableAutoPlay autoPlaySpeed={2500}>
                    {items.map(item => <div key={item.id}>
                    <img className="carousel-img" src={item.url} alt={item.title}/>
                    </div>)}
                </Carousel> 
                <Grid/>
                </div>
            </div>
        )
    }
}

export default Home;

