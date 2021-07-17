import React, { Component } from 'react'
import '../css/styles.css';
import Carousel from 'react-bootstrap/Carousel';

export default class interested extends Component {
    render() {
        return (
            <div className="interested">
                <div className="container">

                    <div className="interested-row">


                        <div className="text-featured">
                            <p >Start a Project</p>

                        </div>


                        <div className="project-text">

                            <p >Interested in working together? We should queue up a chat. I’ll buy the coffee.</p>

                        </div>
                        <div className="project-button ">

                            <a href="#contact"> <button type="submit" class="btn  con-btn">Let's do this</button></a>

                        </div>
                    </div>

                </div>




            </div>








        )
    }
}
