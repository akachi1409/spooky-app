import React, { Component } from "react";
import {
  Row, Col
} from "reactstrap";
import Header from "../components/header/Header";
import samplebot from "../assets/images/samplebot.png";

class MyBots extends Component {
    render() {
        return (
            <React.Fragment>
                <Header></Header>
                <div className="main-bg-color body-height">
                    <center>
                        <h1 style={{"color":"white", "paddingTop":"300px"}}>Coming Soon</h1>
                    </center>
                </div>
                {/* <div className="my-bot-title  main-bg-color">
                    <span className="my-bot-title-txt">My Bots</span>
                    <p className="my-bot-title-address">0x4c7en498sbg73m8fbros53mf9sbny7sj2</p>
                    <div className="black-line"></div>
                </div>
                <div className="main-bg-color my-bot-content">
                    <Row className="sort-box mx-0">
                        <Col lg="5">
                            <Row className = "">
                                <Col>
                                <button className="main-button-style">    
                                    Sort By
                                </button>   
                                </Col>
                                <Col> 
                                    <select className="form-select main-button-style sortings" aria-label="Default select example">
                                        <option selected>Price: Lowest Listed Price 	&#8595;</option>
                                        <option value="1">Price: Highest Listed Price 	&#8593;</option>
                                        <option value="2">Date: Recently</option>
                                        <option value="3">Date: Anciently</option>
                                    </select>
                                </Col>
                            </Row>
                        </Col>
                        
                       
                    </Row>
                    <Row className="bot-box mx-0">
                        <Col lg="3">
                            <center>
                                <div className="card-bot card" style={{width: "18rem"}}>
                                    <center>
                                        <img src={samplebot} className="card-img-bot" alt="..."/>
                                    </center>
                                    <div className="card-body">
                                        <p className="card-text-bot">Bot #0001</p>
                                    </div>
                                </div>
                            </center>
                            
                            
                        </Col>
                    </Row>
                    
                </div> */}
            </React.Fragment>
        );
    }
}

export default MyBots;
