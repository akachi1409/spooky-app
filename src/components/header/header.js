import React, { Component, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
    Row, Col
} from "reactstrap";

import { connect } from "../../redux/blockchain/blockchainActions";
import { fetchData } from "../../redux/data/dataActions";
import { useDispatch, useSelector } from "react-redux";

import whitelogo from "../../assets/images/white-logo.png";
import walletConnect from "../../assets/images/wallet-connect.png"
import "./Header.css";

function Header() {
    const [route, setRoute] = useState(0);
    const location = useLocation();
    const dispatch = useDispatch();
    const blockchain = useSelector((state) => state.blockchain);
    const [walletAdd, setWalletAdd] = useState(""); 
    React.useEffect(() => {
        console.log('Location changed', location.pathname);
        switch (location.pathname) {
            case "/my-bots":
                setRoute(3);
                break;
            case "/initiate-bots":
                setRoute(2);
                break;
            case "/bot-map":
                setRoute(1);
                break;
            case "/bot-exchange":
                setRoute(4);
                break;
        }
    }, [location]);
    const getData = () => {
        if (blockchain.account !== "" && blockchain.smartContract !== null) {
            dispatch(fetchData(blockchain.account));
        }
    };
    return (
        <header className="main-bg-color my-header">
            <Row className="navbar-header">
                <Col xl="6" lg="4" className="my-header-logo d-flex align-items-center">
                    <div className="d-flex align-items-center">
                        <Link to="/dashboard">
                            <img src={whitelogo} alt="" className="my-logo" />
                        </Link>
                    </div>
                </Col>
                <Col xl="6" lg="8" className="text-white  titles-box">
                    <Row>
                        <Col lg="2" className="text-center header-menu-item">
                            {
                                route == 1 ?
                                    <Link className="my-header-text text-center bot-map_selected" to="/bot-map">
                                        Bot Map
                                    </Link>
                                    :
                                    <Link className="my-header-text text-center bot-map" to="/bot-map">
                                        Bot Map
                                    </Link>
                            }
                        </Col>
                        <Col lg="3" className="text-center header-menu-item">
                            {
                                route == 2 ?
                                    <Link className="my-header-text text-center initiate-bots_selected" to="/initiate-bots">
                                        Initiate a Bot!
                                    </Link>
                                    : <Link className="my-header-text text-center initiate-bots" to="/initiate-bots">
                                        Initiate a Bot!
                                    </Link>
                            }

                        </Col>
                        <Col lg="2" className="text-center header-menu-item">
                            {
                                route == 3 ?
                                    <Link className="my-header-text text-center my-bots_selected" to="/my-bots">
                                        My Bots
                                    </Link>
                                    :
                                    <Link className="my-header-text text-center my-bots" to="/my-bots">
                                        My Bots
                                    </Link>
                            }

                        </Col>
                        <Col lg="3" className="text-center header-menu-item">
                            {
                                route == 4 ?
                                    <Link className="my-header-text text-center bot-exchange_selected" to="/bot-exchange">
                                        Bot Exchange
                                    </Link>
                                    : <Link className="my-header-text text-center bot-exchange" to="/bot-exchange">
                                        Bot Exchange
                                    </Link>
                            }
                        </Col>
                        <Col lg="2" className="text-center header-menu-item">
                        {
                            blockchain.account === "" || blockchain.smartContract === null ?
                            <div>
                                <img src={walletConnect} 
                                    onClick={(e) => {
                                    e.preventDefault();
                                    dispatch(connect());
                                    getData();
                                }}/>
                                    {blockchain.errorMsg !== "" ? (
                                        <span style={{ textAlign: "center", fontSize: 12, color: "white"}}>
                                                {blockchain.errorMsg}
                                            </span>
                                    ) : null}
                                </div>
                                :<p>{blockchain.account.substring(0,8) + "..."}</p>
                        }
                        </Col>
                    </Row>
                </Col>
            </Row>
            <div className="dropdown1">
                <button className="dropbtn1"></button>
                <div className="dropdown-content1">
                    <a href="/bot-map">Bot Map</a>
                    <a href="/initiate-bots">Initiate a Bot!</a>
                    <a href="/my-bots">My Bots</a>
                    <a href="/bot-exchange">Bot Exchange</a>
                </div>
            </div>
        </header>
    );
    // }
}

export default Header;