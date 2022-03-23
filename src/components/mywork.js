import "../css/styles.css";
import { Card } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import ReactParticles from "react-particles-js";
import particlesConfig from "./Particles (2)";
import { timers } from "jquery";
import Web from "./websiteModal";
import { useState } from "react";
import { Component } from "react";
import Doc from "./finddocModal";

export default class mywork extends Component {
  state = {
    isFindDoc: false,
    isWebsite: false,
  };

  openFindDoc = () => {
    this.setState({ isFindDoc: true });
  };

  closeFindDoc = () => {
    this.setState({
      isFindDoc: false,
    });
  };

  openWebsite = () => {
    this.setState({ isWebsite: true });
  };

  closeWebsite = () => {
    this.setState({
      isWebsite: false,
    });
  };

  render() {
    return (
      <div>
        <div className=" work" id="mywork">
          <Particle>
            <div className="work-text container">
              <div className="text-work">
                <p className="subtitle ">My Projects</p>
              </div>
            </div>

            <div className="container">
              <div className="work-row ">
                <ul>
                  <Fade left>
                    <li>
                      <img src="images/pantablet.png"></img>
                      <div class="info">
                        <h1>PanTablet</h1>
                        <p>
                          PanTablet is an educational portal for the school
                          children in Poland.
                        </p>
                        <a href="https://pracedzieci.pan-tablet.pl/#/home"> Visit</a>
                      </div>
                    </li>
                  </Fade>

                  <Fade right>
                    <li>
                      <img src="images/pizzeria.png"></img>
                      <div class="info">
                        <h1>Pizzeria Speranza</h1>
                        <p>Pizzeria Speranza offccial website</p>
                        <a href="http://lab500.nc-one.com:3000/#/home">Visit</a>
                        {/* <button onClick={this.openWebsite}> Visit</button> */}
                      </div>
                    </li>
                  </Fade>
                  <Fade left>
                    <li>
                      <img src="images/slack-clone.png"></img>
                      <div class="info">
                        <h1>Slack Clone</h1>
                        <p>
                          This is a Slack clone website that I am build using
                          Redux and Firebase.
                        </p>
                        <div className="modal_buttons">
                          <a href="https://slack-clone-3e763.web.app/">
                            {" "}
                            Visit
                          </a>
                          <a href="https://github.com/Murodali/slack-clone">
                            {" "}
                            GitHub Repository
                          </a>
                        </div>
                      </div>
                    </li>
                  </Fade>

                  <Fade right>
                    <li>
                      <img src="images/website.png"></img>
                      <div class="info">
                        <h1>Murodali</h1>
                        <p>This is a personal portfolio</p>
                        <button onClick={this.openWebsite}> Learn More</button>
                      </div>
                    </li>
                  </Fade>

                  <Fade left>
                    <li>
                      <img src="images/linkedin.png"></img>
                      <div class="info">
                        <h1>Linkedin Clone</h1>
                        <p>
                          This is a linkedin clone website that I am
                          developing.It is not a final version.
                        </p>
                        <div className="modal_buttons">
                          <a href="https://linkedin-clone-4182c.web.app/">
                            {" "}
                            Visit{" "}
                          </a>
                          <a href="https://github.com/Murodali/linkedin-clone">
                            {" "}
                            GitHub Repository
                          </a>
                        </div>
                      </div>
                    </li>
                  </Fade>

                  <Fade right>
                    <li>
                      <img src="images/finddoc.png"></img>
                      <div class="info">
                        <h1>FindaDoc Website</h1>
                        <p>
                          This is FindaDoc website and android mobile
                          application
                        </p>
                        <button onClick={this.openFindDoc}> Learn More</button>
                      </div>
                    </li>
                  </Fade>

                  {/* <Fade left>
                    <li>
                      <img src="images/finddoc.png"></img>
                      <div class="info">
                        <h1>FindaDoc</h1>
                        <p>
                          Lorem Ipsum is simply dummy text from the printing and
                          typeseting industry
                        </p>
                        <button> Learn More</button>
                      </div>
                    </li>
                  </Fade>

                  <Fade right>
                    <li>
                      <img src="images/finddoc.png"></img>
                      <div class="info">
                        <h1>FindaDoc</h1>
                        <p>
                          Lorem Ipsum is simply dummy text from the printing and
                          typeseting industry
                        </p>
                        <button> Learn More</button>
                      </div>
                    </li>
                  </Fade> */}
                </ul>
              </div>
            </div>
          </Particle>
        </div>

        <Doc
          visible={this.state.isFindDoc}
          closeFindDoc={this.closeFindDoc}
        ></Doc>
        <Web
          visible={this.state.isWebsite}
          closeWebsite={this.closeWebsite}
        ></Web>
      </div>
    );
  }
}

function Particle({ children }) {
  return (
    <div style={{ position: "relative" }}>
      <ReactParticles
        params={particlesConfig}
        style={{
          position: "absolute",
          zIndex: 0,
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
        }}
      />
      {children && <div style={{ position: "relative" }}>{children}</div>}
    </div>
  );
}
