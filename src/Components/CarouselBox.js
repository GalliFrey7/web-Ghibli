import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import aImg from "../assets/a.png"
import bImg from "../assets/b.jpg"
import cImg from "../assets/c.jpg"
import dImg from "../assets/d.jpg"
import fImg from "../assets/f.jpg"

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src={aImg}
                        alt='Forest'
                    />
                    <Carousel.Caption>
                        <h3>Grave of the Fireflies</h3>
                    </Carousel.Caption>
                </Carousel.Item>  
                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src={bImg}
                        alt='Forest'
                    />
                    <Carousel.Caption>
                        <h3>Spirited Away</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src={cImg}
                        alt='Forest'
                    />
                    <Carousel.Caption>
                        <h3>My Neighbor Totoro</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src={dImg}
                        alt='Forest'
                    />
                    <Carousel.Caption>
                        <h3>Hayao Miyazaki</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src={fImg}
                        alt='Forest'
                    />
                    <Carousel.Caption>
                        <h3>Princess Mononoke</h3>
                    </Carousel.Caption>
                </Carousel.Item>            
            </Carousel>
        )
    }
}
