import React from 'react';
import './Section1.css'
import { Col, Container, Row } from 'react-bootstrap';
import { data } from './data';
export default function Section1() {
    return (
        <>
            <Container>
                <Row>
                    <Col lg={12}>
                        <h2>Popular Destinations</h2>
                    </Col>
                </Row>
                <Row>
                    {data?.map(res => {
                        return (
                            <>
                                <Col lg={2}>
                                    <div className="card1">
                                        <img src={res?.img} alt="" />
                                        <h5 className="name">{res?.name}</h5>
                                        <p className="cityName">{res?.nameCity}</p>
                                    </div>
                                </Col>
                            </>
                        )
                    })}
                </Row>
            </Container>
        </>
    )
}