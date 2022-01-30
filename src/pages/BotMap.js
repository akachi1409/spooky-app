import React, { Component } from "react";
import {
  Row,  Col
} from "reactstrap";

import samplebot from "../assets/images/samplebot3.png";
import Header from "../components/header/Header";

class BotMap extends Component {
    render() {
        return (
            <React.Fragment>
                <Header></Header>
                <div className="body-height main-bg-color">
                    <Row  className=" m-0">
                        <Col xl="6"></Col>
                        <Col xl="6" lg="12">
                            <center>
                                <span className="botmap-title-txt">BotMap</span>
                            </center>
                        </Col>
                    </Row>
                    <Row className="main-bg-color m-0">
                        <Col xl="5" lg="12">
                            <center>
                                <span>
                                    <img src={samplebot} className="botmap-bot" alt="..."/>
                                </span>
                            </center>
                        </Col>
                        <Col xl="7" lg="12" className="bot-map-content">    
                            <div className="w-100">
                                <p className="q-title">
                                    Q1 - Launch
                                </p> 
                                <p className="q-text m-0">
                                    &#183; Giveaways and promotion. <br />
                                    &#183; Initiate all 10,000 Bots. <br />
                                    &#183; Reveal rarity of each trait. 
                                </p>
                            </div> 
                            <div className="w-100 q2-box" style={{height:"170px"}}>
                                <div className="w-50 float-right">
                                    <p className="q-title">
                                        Q2 - Bot Exchange
                                    </p> 
                                    <p className="q-text m-0">
                                        &#183; Release of the Bot Exchange <br /> 
                                               &nbsp; for all Bot Owners to use. <br />
                                        &#183; Airdrop 50% of royalties <br /> 
                                               &nbsp; to holders.
                                    </p>
                                </div>
                            </div>
                            <div className="q3-box float-left">
                                <p className="q-title">
                                    Q3 - Upgrade Vault
                                </p> 
                                <div>
                                    <p className="q-text m-0">
                                        &#183; Staggered release of CPU <br />
                                               &nbsp; Upgrade Chips.<br />
                                        &#183; Initial sneak peak at <br />
                                               &nbsp; BILLIONAIRE BOTS
                                        <br />
                                        &nbsp; (Supply=100)
                                    </p>
                                </div>
                                
                            </div>
                            <div className="w-100 q4-box" style={{height:"150px"}} >
                                <div className="w-50 float-right">
                                    <p className="q-title">
                                        Q4 - Future
                                    </p> 
                                    <p className="q-text">
                                        &#183; Look into partnerships with <br/> 
                                               &nbsp; huge NFT projects and  real <br /> 
                                               &nbsp; world brands. <br /> 
                                        &#183; Develop the project into new <br /> 
                                               &nbsp; and bigger  ventures such as<br /> 
                                               &nbsp; crypto gaming.
                                    </p>
                                </div>
                            </div>
                            
                        </Col>
                    </Row>
                </div>
                
            </React.Fragment>
        );
    }
}

export default BotMap;
