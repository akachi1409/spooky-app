import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
} from "reactstrap";

import Header from "../components/header/Header";
import samplebot from "../assets/images/samplebot.png";
import samplebot1 from "../assets/images/samplebot1.png";
import samplebot2 from "../assets/images/samplebot2.png";


class Initiate extends Component {
    render() {
        return (
            <React.Fragment>
                <Header></Header>
                <div className="main-bg-color body-height">
                    <center>
                        <h1 style={{"color":"white", "paddingTop":"300px"}}>Coming Soon</h1>
                    </center>
                </div>
                {/* <div className="main-bg-color">
                    <div className="d-flex justify-content-center pt-5">
                        <img src={samplebot2} className="init-bot" alt="..."/>
                        <img src={samplebot1} className="init-bot" alt="..."/>
                        <img src={samplebot} className="init-bot" alt="..."/>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button className="init-button">
                            Initiate Bot!
                        </button>
                    </div>
                </div> */}
            </React.Fragment>
        );
    }
}

export default Initiate;
