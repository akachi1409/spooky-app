import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Row, Col
} from "reactstrap";

import Header from "../components/header/Header";
import samplebot from "../assets/images/samplebot.png";

class Exchange extends Component {
    render() {
        return (
            <React.Fragment>
                <Header></Header>
                <div className="main-bg-color body-height">
                    <center>
                        <h1 style={{"color":"white", "paddingTop":"300px"}}>Coming Soon</h1>
                    </center>
                </div>
                {/* <div className="bot-exchange-title  main-bg-color">
                    <span className="bot-exchange-title-txt">Bot Exchange</span><br />
                    <div className="w-100 d-flex justify-content-center">
                        <h3 className="bot-exchange-title-address">An Exchange in which you can show off your bot and if you wish, sell off to the highest bidder or a price you desire.</h3>
                    </div>
                    <div className="d-flex w-100 justify-content-center mt-5">
                        <div className="d-flex first-sort-box justify-content-around">
                            <div>
                                <select className="form-select main-button-style sortings px-5" aria-label="Default select example">
                                    <option selected>Floor Price	&#8595;</option>
                                    <option value="1">Floor Price	&#8593;</option>
                                </select>   
                            </div>
                            <div>
                                <select className="form-select main-button-style sortings px-5" aria-label="Default select example">
                                    <option selected>Volume	&#8595;</option>
                                    <option value="1">Volume 	&#8593;</option>
                                </select>   
                            </div>
                            <div>
                                <select className="form-select main-button-style sortings" aria-label="Default select example">
                                    <option selected>Currently Listed &#8595;</option>
                                    <option value="1">Currently Listed 	&#8593;</option>
                                </select>   
                            </div>
                        </div>
                        
                    </div>
                    <div className="d-flex w-100 justify-content-center mt-3">
                        <div className="d-flex first-sort-box justify-content-between">
                            <div>
                                <select className="form-select main-button-style sortings px-5" aria-label="Default select example">
                                    <option selected>Filters</option>
                                    <option value="1">1</option>
                                </select>   
                            </div>
                            <div>
                                <select className="form-select main-button-style sortings px-5" aria-label="Default select example">
                                    <option selected>Price Range</option>
                                    <option value="1">Volume 	&#8593;</option>
                                </select>   
                            </div>
                            <div>
                                <select className="form-select main-button-style sortings" aria-label="Default select example">
                                    <option selected>Sorting filters</option>
                                    <option value="1">Currently Listed 	&#8593;</option>
                                </select>   
                            </div>
                        </div>
                        
                    </div>
                    <div className="black-line"></div>
                </div>
                <div className="main-bg-color bot-exchange-content">
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
                                    <div className="card-black-line"></div>
                                    <p className="card-text-bot">Price: 2000 CRO</p>
                                </div>
                            </center>
                        </Col>
                        <Col lg="3">
                            <center>
                                <div className="card-bot card" style={{width: "18rem"}}>
                                    <center>
                                        <img src={samplebot} className="card-img-bot" alt="..."/>
                                    </center>
                                    <div className="card-body">
                                        <p className="card-text-bot">Bot #0001</p>
                                    </div>
                                    <div className="card-black-line"></div>
                                    <p className="card-text-bot">Price: 2000 CRO</p>
                                </div>
                            </center>
                        </Col>
                        <Col lg="3">
                            <center>
                                <div className="card-bot card" style={{width: "18rem"}}>
                                    <center>
                                        <img src={samplebot} className="card-img-bot" alt="..."/>
                                    </center>
                                    <div className="card-body">
                                        <p className="card-text-bot">Bot #0001</p>
                                    </div>
                                    <div className="card-black-line"></div>
                                    <p className="card-text-bot">Price: 2000 CRO</p>

                                </div>
                            </center>

                        </Col>
                        <Col lg="3">
                            <center>
                                <div className="card-bot card" style={{width: "18rem"}}>
                                    <center>
                                        <img src={samplebot} className="card-img-bot" alt="..."/>
                                    </center>
                                    <div className="card-body">
                                        <p className="card-text-bot">Bot #0001</p>
                                    </div>
                                    <div className="card-black-line"></div>
                                    <p className="card-text-bot">Price: 2000 CRO</p>
                                </div>
                            </center>
                        </Col>
                    </Row>
                    
                </div> */}
            </React.Fragment>
        );
    }
}

export default Exchange;
