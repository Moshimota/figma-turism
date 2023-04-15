import React from 'react';
import './HeaderpPage.css'
import { Col, Container, Row } from 'react-bootstrap';

export default function HeaderPage() {
    return (
        <>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="tac">
                            <h1>Discover the most engaging places</h1>
                            <button className='btn1'><img src="./img/Vector.png" alt="" /> Discover on 3D Globe</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}