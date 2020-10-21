import React, { Component } from 'react';
// import { motion } from "framer-motion";
// import { pageTransition } from "./App";
import stagePic from './resources/stage.jpg';
import scotiaGroup from './resources/scotiaGroup.jpg';
import lakeLouise from './resources/lakeLouise.png'
import Carousel from "react-bootstrap/Carousel";

class Landing extends Component {
    constructor(props){
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
        this.state = {
            displayNav: false,
            slideIndex: 0
        }
    }

    handleSelect(selectedIndex){
        this.setState({slideIndex: selectedIndex});
    }

    render() {
        return (
            <Carousel controls={false} activeIndex={this.state.slideIndex} onSelect={this.handleSelect} pause={false} style={{ display: "flex", width: "100%", height: "100%" }}>
                <Carousel.Item style={{ width: "100%", height: "100%" }}>
                    <div style={{ width: "100%", height: "100%", display: "flex", overflow: "hidden" }}>
                        <img
                            style={{ width: "100%", objectFit: "cover" }}
                            src={stagePic}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item style={{ width: "100%", height: "100%" }}>
                    <div style={{ width: "100%", height: "100%", display: "flex", overflow: "hidden" }}>
                        <img
                            style={{width: "100%", objectFit: "cover" }}
                            src={scotiaGroup}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item style={{ width: "100%", height: "100%" }}>
                    <div style={{ width: "100%", height: "100%", display: "flex", overflow: "hidden" }}>
                        <img
                            style={{ width: "100%", objectFit: "cover" }}
                            src={lakeLouise}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
            </Carousel>
        )
    }
}

export default Landing;