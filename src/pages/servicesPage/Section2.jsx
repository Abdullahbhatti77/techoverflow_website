import React from 'react'
import {Row, Col} from 'reactstrap'

export default function Section2() {
  return (
    <>
        <h2 style={{color: 'white'}}>
            From global technology leaders like Google to Education Technology disruptors like Masterclass,<span style={{color:"#00B9FA"}}>our work spans a variety of industries.</span>
        </h2>

        <Row style={{marginTop: '100px'}} className='g-3' xs="2" sm="2" md="3" lg="4" xl="4">
            <Col md="3">
                <p style={{color: 'white'}}>Healthcare</p>
            </Col>
            <Col md="3">
                <p style={{color: 'white'}}>Education</p>
            </Col>
            <Col md="3">
                <p style={{color: 'white'}}>Business Services</p>
            </Col>
            <Col md="3">
                <p style={{color: 'white'}}>Manufacturing</p>
            </Col>

            <Col md="3">
                <p style={{color: 'white'}}>Technology</p>
            </Col>
            <Col md="3">
                <p style={{color: 'white'}}>Finance</p>
            </Col>
            <Col md="3">
                <p style={{color: 'white'}}>Retail </p>
            </Col>
            <Col md="3">
                <p style={{color: 'white'}}>Gaming</p>
            </Col>
        </Row>
    </>
  )
}
