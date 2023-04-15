import React from 'react';
import "./Section4.css"
import img9 from "./img/img (8).jpg"
import img10 from "./img/img (9).jpg"
import img11 from "./img/img (10).jpg"
import img12 from "./img/img (11).jpg"
import { Col, Container, Row } from 'react-bootstrap';


export const Section4 = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col lg={6}>
                        <h2 className="h2">Activities</h2>
                    </Col>
                    <Col>
                        <div className="end text-align-end">
                            <button className="btn2">View all</button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={3}>
                        <img src={img9} alt="" />
                        <p className="small">Sailing</p>
                    </Col>
                    <Col lg={3}>
                        <img src={img10} alt="" />
                        <p className="small">Climbing</p>
                    </Col>
                    <Col lg={3}>
                        <img src={img11} alt="" />
                        <p className="small">Skiing</p>
                    </Col>
                    <Col lg={3}>
                        <img src={img12} alt="" />
                        <p className="small">Hiking</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}