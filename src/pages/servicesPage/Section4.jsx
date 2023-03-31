import React from 'react'
import { Row, Col } from 'reactstrap'

export default function Section4() {
  return (
    <>
        <h2 style={{color: 'white'}}>
            Our multi-disciplinary Product teams use a variety of <span style={{color: '#00B9FA'}}>tools, platforms,</span> and <span style={{color: '#00B9FA'}}>technologies</span> to bring ideas to life.
        </h2>

        <Row className='g-2' xs="2" sm="3" md="4" lg="5" xl="5" style={{marginTop: '100px'}}>
            <Col-1>
                <p style={{color: '#00B9FA', fontWeight: 'bold'}}>Backend</p>
            </Col-1>
            <Col-1>
                <p style={{color: 'white', fontWeight: 'bold'}}>Frontend</p>
            </Col-1>
            <Col-1>
                <p style={{color: 'white', fontWeight: 'bold'}}>Design</p>
            </Col-1>
            <Col-1>
                <p style={{color: 'white', fontWeight: 'bold'}}>Database</p>
            </Col-1>
            <Col-1>
                <p style={{color: 'white', fontWeight: 'bold'}}>Testing</p>
            </Col-1>
            <Col-1>
                <p style={{color: 'white', fontWeight: 'bold'}}>DevOps</p>
            </Col-1>
            <Col-1>
                <p style={{color: 'white', fontWeight: 'bold'}}>Cloud</p>
            </Col-1>
        </Row>

        <Row className='mt-5 g-3' xs="2" sm="3" md="3" lg="4" xl="6">
            <Col md="2">
                <img src='./images/Rails.png'></img>
                <p style={{color: 'white', marginTop: '10px'}}>Ruby on rails</p>
            </Col>
            <Col md="2">
                <img src='./images/nodejs.png'></img>
                <p style={{color: 'white', marginTop: '10px'}}>NodeJS</p>
            </Col>
            <Col md="2">
                <img src='./images/python.png'></img>
                <p style={{color: 'white', marginTop: '10px'}}>Python</p>
            </Col>
            <Col md="2">
                <img src='./images/express.png'></img>
                <p style={{color: 'white', marginTop: '10px'}}>ExpressJS</p>
            </Col>
            <Col md="2">
                <img src='./images/django.png'></img>
                <p style={{color: 'white', marginTop: '10px'}}>DJango</p>
            </Col>
            <Col md="2">
                <img src='./images/flask.png'></img>
                <p style={{color: 'white', marginTop: '10px'}}>Flask</p>
            </Col>
        </Row>
    </>
  )
}
