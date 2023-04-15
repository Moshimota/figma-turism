import React from 'react';
import "./Section5.css"
import { Col, Container, Row } from 'react-bootstrap';
import kamanda from "./img/image 23.jpg"


export const Section5 = () => {
    return (
        <>
            <Container>
                <Row className='justify-content-center'>
                    <Col lg={5}>
                        <p className="katta">About Us</p>
                        <p className="lor2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a sapien justo. Nulla facilisis tristique imperdiet. Nullam a placerat odio. Sed in ex augue. Aliquam porta consectetur lorem sit amet ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                        <button className="btn3">Read more</button>
                    </Col>
                    <Col lg={5}>
                        <img src={kamanda} alt="" className='kamanda'/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}