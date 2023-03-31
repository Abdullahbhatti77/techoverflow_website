import React from 'react'
import {BsArrowRight} from 'react-icons/bs'
import {Row, Col} from 'reactstrap'

export default function Services() {
  return (
    <>
        <h2 style={{color: 'white'}}>
            We combine design, strategy, and technology to build custom software that <span style={{color: '#00B9FA'}}>
            amplifies your company's impact.</span>
        </h2>

        <Row xs="1" sm="2" md="2" lg="3" xl="3" className="mt-5 g-5">
            <Col md="4">
                <h4 style={{color: 'white'}}>Design</h4>
                <p style={{color: '#6A6862'}}>Deliver elegant, intuitive user experiences via research-based, user-centric design.</p>
            </Col>
            <Col md="4">
                <h4 style={{color: 'white'}}>Development</h4>
                <p style={{color: '#6A6862'}}>Build reliable, scalable software using cutting-edge technology and world-class technical talent.</p>
            </Col>
            <Col md="4">
                <h4 style={{color: 'white'}}>Product Strategy</h4>
                <p style={{color: '#6A6862'}}>Identify and bolster unique product differentiators to translate vision to value.</p>
            </Col>
        </Row>
        
        <button type="button" className="btn btn-dark btn-outline-light justify-content-end mt-5">
            <span style={{color: 'white'}}>Explore Our Services</span>
            <BsArrowRight style={{alignItems: 'center'}}/>
        </button>
    </>
  )
}
