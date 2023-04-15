import React from 'react';
import "./Section3.css"
import img7 from "./img/img (6).jpg"
import img8 from "./img/img (7).jpg"
import { Col, Container, Row } from 'react-bootstrap';


export const Section3 = () => {
    return (
        <>
            <Container>
                <Row>
                <Col lg={6}>
                        <h2 className="h2">Travel Tips and Advice</h2>
                    </Col>
                    <Col>
                        <div className="end text-align-end">
                            <button className="btn2">View all</button>
                        </div>
                    </Col>
                </Row>
                <Row>
                <Col lg={3}>
                        <img src={img7} alt="" className='ima'/>
                    </Col>
                    <Col lg={3}>
                        <h3 className="h32">East Village Ice Cream Crawl</h3>
                        <p className="lor1">We will stop at five different world-class ice cream shops on this 1.5 mile 1.5 hour tour. At each ice cream store we'll explore the story behind the business and see what makes the ice cream unique as you savor every…</p>
                    </Col>
                <Col lg={3}>
                        <img src={img8} alt="" className='ima'/>
                    </Col>
                    <Col lg={3}>
                        <h3 className="h32">Brooklyn Bridge cinematic photo walk</h3>
                        <p className="lor1">This experience takes place at the Brooklyn Bridge Park and Brooklyn Bridge, but I’m always open to capture clients at different locations upon request for an additional charge. </p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}