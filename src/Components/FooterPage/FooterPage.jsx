import React from 'react';
import "./FooterPag.css"
import logo from "./img/logo (1).svg"
import insta from './img/socials.png'
import { Col, Container, Row } from 'react-bootstrap';



export const FooterPage = () => {
    const a = "->"
    return (
        <div className='bek'>
            <Container>
                <Row>
                    <Col lg={3}>
                        <img src={logo} alt="" className="logo" />
                        <p className="txt">We always make our customers happy by providing as many choises as possible</p>
                        <img src={insta} alt="" className="insta" />
                    </Col>
                    <Col lg={2}>
                        <p className="gg">About</p>
                        <p className="per">About Us</p>
                        <p className="per">Features</p>
                        <p className="per">News</p>
                        <p className="per">Menu</p>
                    </Col>
                    <Col lg={2}>
                        <p className="gg">Company</p>
                        <p className="per">Why 2rism</p>
                        <p className="per">Partner With Us</p>
                        <p className="per">FAQ</p>
                        <p className="per">Blog</p>
                    </Col>
                    <Col lg={2}>
                        <p className="gg">Support</p>
                        <p className="per">Account</p>
                        <p className="per">Support Center</p>
                        <p className="per">Feedback</p>
                        <p className="per">Contact Us</p>
                    </Col>
                    <Col lg={3}>
                        <p className="qal">Subscribe on our destination review newsletters</p>
                        <div className="df2">
                            <div className="dfem2">
                                <p className="your">Your Email</p>
                                <p className="email">johndoe@gmail.com</p>
                            </div>
                            <button className="btn5">{a}</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}