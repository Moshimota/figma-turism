import React from 'react';
import "./Section2.css"
import { Col, Container, Row } from 'react-bootstrap';
import { data2 } from './data';


export default function Section2() {
    return (
        <>
            <Container>
                <Row>
                    <Col lg={6}>
                        <h2 className="h2">Hotels and Restaurants</h2>
                    </Col>
                    <Col>
                        <div className="end text-align-end">
                            <button className="btn2">View all</button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {data2?.map(res => {
                        return (
                            <>
                                <Col lg={3}>
                                <div className="card2">
                                    <img src={res?.img} alt="" />
                                    <p className="name">{res?.name}</p>
                                    <div className="df1">
                                        <p className="op">{res?.smal}</p>
                                        <div className="dfem">
                                        <img src={res?.star} alt="" />
                                        </div>
                                    </div>
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