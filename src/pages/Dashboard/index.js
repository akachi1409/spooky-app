import React, { Component } from "react";
import {Row, Col } from "reactstrap";

//Import Breadcrumb
import samplebot from "../../assets/images/samplebot1.png";
import instagram from "../../assets/images/instagram.png";
import twitter from "../../assets/images/twitter.png";
import discord from "../../assets/images/discord.png";
import medium from "../../assets/images/medium.png";
import logo from "../../assets/images/white-logo.png";
import backgroundImg from "../../assets/images/homepage1.png" 
import Header from "../../components/header/Header"


class Dashboard extends Component {
    render() {
        return (
            <React.Fragment>
                <Header></Header>
                <div className="topbar">
                    <img src= {backgroundImg} className="topbar-img" />
                </div>
                <div className="connect-line"></div>
                <div className="connect-line1"></div>
                <div className="page-content">
                    <Row className="m-0">
                        <Col xl="6" lg="12">
                            <center>
                                <img src={samplebot} className="dashboard-bot" alt="..."/>
                            </center>
                            <center>
                                <div className="mt-5 social-box">
                                    <div className="social-text">
                                        Join Our Society
                                    </div>
                                    <div className="d-flex  justify-content-center mt-2 ">
                                        <a href="https://medium.com/@Cronos-Bot-Society" target="_blank">
                                            <img src={medium} className="medium-logo" alt="..."/>
                                        </a>
                                        <a href="https://www.instagram.com/cronosbotsociety/" target="_blank">
                                            <img src={instagram} className="instagram-logo" alt="..."/>
                                        </a>        
                                        <a href="https://discord.gg/fWSaE62jjk" target="_blank">
                                            <img src={discord} className="discord-logo" alt="..."/>
                                        </a>
                                        <a href="https://twitter.com/CronosBots" target="_blank">
                                            <img src={twitter} className="twitter-logo" alt="..."/>
                                        </a>
                                    </div>   
                                </div>
                                
                            </center>
                        </Col>
                        <Col xl="6" lg="12" className="our-hope">
                            <div>
                                <center>
                                    <img src={logo} className="dashboard-bot" alt="..."/>
                                </center>
                            </div>
                            <div className="dashboard-content">
                                Welcome all to the Cronos Bot Society! After months of the Cronos Network growing and expanding 
                                throughout the crypto sphere, 
                                it is finally time for the Cronos Bots to be initialised from their hibernation chambers. 
                                We have been waiting for the perfect time to release the bots on to the network and take over...... 
                                That time is now upon us.
                                <br /><br />
                                The Cronos Bot Society aims to become a huge community of not just crypto enthusiasts 
                                but brand new people in the space. This will not be a one and done NFT project, 
                                we aim to not just expand but grow into something extremely special and raise awareness 
                                of just how great the Cronos network is and the people using it are!
                            </div>
                        </Col>
                    </Row>
                    <center>
                        <div className="mt-5 social-box2">
                            <div className="social-text">
                                Join Our Society
                            </div>
                            <div className="d-flex  justify-content-center mt-2 ">
                                <a href="https://medium.com/@Cronos-Bot-Society" target="_blank">
                                    <img src={medium} className="medium-logo" alt="..."/>
                                </a>
                                <a href="https://www.instagram.com/cronosbotsociety/" target="_blank">
                                    <img src={instagram} className="instagram-logo" alt="..."/>
                                </a>        
                                <a href="https://discord.gg/fWSaE62jjk" target="_blank">
                                    <img src={discord} className="discord-logo" alt="..."/>
                                </a>
                                <a href="https://twitter.com/CronosBots" target="_blank">
                                    <img src={twitter} className="twitter-logo" alt="..."/>
                                </a>
                            </div>   
                        </div>
                    </center>
                </div>
            </React.Fragment>
        );
    }
}

export default Dashboard;
