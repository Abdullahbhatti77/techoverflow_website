import React from 'react'
import { Row, Col } from 'reactstrap'

export default function Ito() {
    return (
        <>
            <h2 style={{ color: 'white' }}>We value the quality of our relationships<br />as much as the quality of our code.</h2>

            <Row className="mt-5 g-4">
                <Col md="6">
                    <div style={{ backgroundColor: '#0D0D0D' }}>
                        <div className='pt-5 pb-5' style={{ marginLeft: '30px', marginRight: '30px' }}>
                            <p style={{ color: 'white' }}>Rootstrap's services are high-quality and their engineers have become a major part of the coding and development team. Professional and dedicated. They work directly with the client's team.</p>
                            <Row className='mt-3'>
                                <Col md="2" className='d-flex justify-content-center'>
                                    <img src='./images/t1.png' height={50} width={50} className="rounded-5" />
                                </Col>
                                <Col md="10">
                                    <p style={{ color: 'white' }}>Mandar Bapaye <br />VP of Engineering at MasterClass</p>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>

                <Col md="6">
                    <div style={{ backgroundColor: '#0D0D0D' }}>
                        <div className='pt-5 pb-5' style={{ marginLeft: '30px', marginRight: '30px' }}>
                            <p style={{ color: 'white' }}>Their team is uniquely willing to go above and beyond to mentor a first-time founder. The team's support is unwavering, and they are all committed to finding new ways to make the project as successful as possible.</p>
                            <Row className='mt-3'>
                                <Col md="2" className='d-flex justify-content-center'>
                                    <img src='./images/t2.png' height={50} width={50} className="rounded-5" />
                                </Col>
                                <Col md="10">
                                    <p style={{ color: 'white' }}>Lindsay Braddington <br />CEO and Founder at Generis</p>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}
