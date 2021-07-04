import React, { Component } from 'react';
import '../css/styles.css';
import Carousel from 'react-bootstrap/Carousel';
import Fade from 'react-reveal/Fade';

export default class testimonials extends Component {
    render() {
        return (
            <div className="main-test">

                <img src="images/people1.svg" className="test"></img>


                <div class=" testimonials   ">


                    <Fade left>

                        <div className="text-featured">
                            <p className="subtitle ">Testimonials</p>

                            <p className="featured-desc ">People I've worked with have said some nice things...</p>
                        </div>
                    </Fade>
                    <Fade right>
                        <div className="people">
                            <Carousel className="k">
                                <Carousel.Item interval={1500}>
                                    <div className="avatar">
                                        <img src="images/umed.jpg"></img>
                                    </div>

                                    <div className="info">
                                        <h3>Umed Babakhanov</h3>
                                        <p>CEO of ASIA PLUS, Tajkistan</p>
                                        <p>Murodali did an excelent job for out company</p>
                                    </div>

                                </Carousel.Item>

                                <Carousel.Item interval={500}>
                                    <div className="avatar">
                                        <img src="images/erik.jpg"></img>
                                    </div>

                                    <div className="info">
                                        <h3>Umed Babakhanov</h3>
                                        <p>Erik Krauss, Dean of Student Success at Sampoerna University: </p>
                                        <p>Murodali is an outstanding student who has a strong entrepreneurial orientation.  I worked with him for four years at the University of Central Asia and found him to be intelligent, dependable, and highly reliable.  I would certainly hire him to work on one of my projects.</p>
                                    </div>

                                </Carousel.Item>


                            </Carousel>

                        </div>
                    </Fade>

                </div>


            </div>
        )
    }
}


