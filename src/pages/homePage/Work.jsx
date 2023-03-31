import React from 'react'
import { Card, CardText, CardBody, CardTitle, Row, Col} from 'reactstrap';
import { BsArrowRight } from 'react-icons/bs'

export default function Work() {
    return (
        <>
            <h2 style={{ color: 'white' }}>Our Work</h2>

            <div className='mt-5'>
                <Row xs="1" sm="1" md="2" lg="3" xl="3" className='g-5' style={{}}>
                    <Col-4>
                        <Card style={{ width: '16rem' }} >
                            <img alt="Sample" src="./images/img4.png" className='img-fluid' />
                            <CardBody>
                                <CardTitle tag="h5">
                                    MasterClass
                                </CardTitle>
                                <CardText>
                                    Strategy, Mobile Development
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col-4>
                    <Col-4>
                        <Card style={{ width: '16rem' }} >
                            <img alt="Sample" src="./images/img5.png" className='img-fluid' />
                            <CardBody>
                                <CardTitle tag="h5">
                                    Google Opus
                                </CardTitle>
                                <CardText>
                                    Strategy, Design Workshops
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col-4>
                    <Col-4>
                        <Card style={{ width: '16rem' }} >
                            <img alt="Sample" src="./images/img6.png" className='img-fluid' />
                            <CardBody>
                                <CardTitle tag="h5">
                                    Salesforce
                                </CardTitle>
                                <CardText>
                                    Software Development
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col-4>
        
                    <Col-4>
                        <Card style={{ width: '16rem' }} >
                            <img alt="Sample" src="./images/img1.png" className='img-fluid' />
                            <CardBody>
                                <CardTitle tag="h5">
                                    Epson
                                </CardTitle>
                                <CardText>
                                    Mobile Development
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col-4>
                    <Col-4>
                        <Card style={{ width: '16rem' }} >
                            <img alt="Sample" src="./images/img2.png" className='img-fluid' />
                            <CardBody>
                                <CardTitle tag="h5">
                                    Daikin
                                </CardTitle>
                                <CardText>
                                    Mobile Development
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col-4>
                    <Col-4>
                        <Card style={{ width: '16rem' }} >
                            <img alt="Sample" src="./images/img3.png" className='img-fluid' />
                            <CardBody>
                                <CardTitle tag="h5">
                                    Globalization Partners
                                </CardTitle>
                                <CardText>
                                    Software Architecture
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col-4>
                </Row>
            </div>

            <button type="button" class="btn btn-dark btn-outline-light justify-content-end mt-5">
                <span style={{ color: 'white' }}>Explore Our Work</span>
                <BsArrowRight style={{ alignItems: 'center' }} />
            </button>


        </>
    )
}
