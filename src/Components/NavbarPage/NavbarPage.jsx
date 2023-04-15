import React from "react";
import { Col, Container, Row } from 'react-bootstrap';
import logo from "./img/logo.svg"
import './NavbarPage.css'

export function NavbarPage(){
    return (
        <div className="kak">
            <Container>
                <Row className="justify-content-around">
                    <Col lg={1}>
                        <img src={logo} alt="" />
                    </Col>
                    <Col lg={7}>
                        <ul>
                            <li>home</li>
                            <li>hotels</li>
                            <li>restaurants</li>
                            <li>tours</li>
                            <li>destinations</li>
                            <li>activities</li>
                            <li>contact</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}