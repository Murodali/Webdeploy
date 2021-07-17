import React, { Component } from 'react';
import '../css/styles.css';
import Carousel from 'react-bootstrap/Carousel';
import Fade from 'react-reveal/Fade';

export default class testimonials extends Component {
    render() {
        return (
            <div className="main-test">
                <img src="images/people1.svg" className="test"></img>



                <div className="container">
                <div class=" testimonials   ">

<Fade left>

    <div className="text-featured">
        <p className="subtitle">Testimonials</p>
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
                    <p><b>CEO of ASIA PLUS, Tajkistan</b></p>
                    <h1 className="left">"</h1><p className="testimony"><b>Murodali is an exceptional induvial. He worked at Asia Plus as intern and later implement seeral web developmet projects. He is highly creative, responsive and reliable. I enjoyed working with and looking forward to hire him for further projects </b></p><h1 className="right">"</h1>
                </div>

            </Carousel.Item>

            <Carousel.Item interval={500}>
                <div className="avatar">
                    <img src="images/erik.jpg"></img>
                </div>

                <div className="info">
                    <h3>Erik Kraus</h3>
                    <p><b>Dean of Student Success at Sampoerna University </b></p>
                    <h1 className="left">"</h1> <p className="testimony"> <b> Murodali is an outstanding student who has a strong entrepreneurial orientation.  I worked with him for four years at the University of Central Asia and found him to be intelligent, dependable, and highly reliable.  I would certainly hire him to work on one of my projects.</b></p><h1 className="right">"</h1>
                </div>

            </Carousel.Item>


        </Carousel>

    </div>
</Fade>






</div>


                </div>


               

            </div>
        )
    }
}


