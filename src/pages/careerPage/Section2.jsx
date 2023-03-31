import React from 'react'
import { Row, Col } from 'reactstrap'

export default function Section2() {
  return (
    <>
        <Row className='g-3'>
            <Col md="6">
                <h6 style={{color:"white"}}>Foster Flexibility</h6>
                <p style={{color: '#A19F95'}}>We celebrate diversity, that’s why we foster flexibility in order to recruit global and multicultural talent, and encourage them to keep choosing us.</p>
            </Col>
            <Col md="6">
                <h6 style={{color:"white"}}>Keep Our Authenticity</h6>
                <p style={{color: '#A19F95'}}>We support creativity, autonomy and ownership so each team member can propose ideas, make decisions and think as a leader.</p>
            </Col>
            <Col md="6">
                <h6 style={{color:"white"}}>Nurture Human Connections</h6>
                <p style={{color: '#A19F95'}}>We foster openness with each team member by accompanying their journey with regular feedback and transparent information. We ensure safe places to share. We care for each other.</p>
            </Col>
            <Col md="6">
                <h6 style={{color:"white"}}>Strive for Excellence</h6>
                <p style={{color: '#A19F95'}}>Our challenging projects require excellent results. We work together embracing continuous improvement of our processes, capabilities and services. We aim to achieve the highest quality outcomes</p>
            </Col>
        </Row>

        <h3 style={{color:"white", marginTop: '50px', textAlign: 'center'}}>Support@Techoverflow.io</h3>

        <h6 className='mt-5' style={{color: 'white', textAlign:'center'}}>Why you’ll love working with us</h6>

        <Row className='mt-5' xs="1" sm="2" md="2" lg="3" xl="3">
            <Col md="4">
                <p style={{color: '#A19F95'}}>Flexible work</p>
                <p style={{color: '#A19F95'}}>Vacation days</p>
                <p style={{color: '#A19F95'}}>Referrals bonus</p>
            </Col>
            <Col md="4">
                <p style={{color: '#A19F95'}}>Study days</p>
                <p style={{color: '#A19F95'}}>Psychological counseling</p>
                <p style={{color: '#A19F95'}}>Learning Bonus</p>
            </Col>
            <Col md="4">
                <p style={{color: '#A19F95'}}>Gym benefit</p>
                <p style={{color: '#A19F95'}}>Mentorship program</p>
                <p style={{color: '#A19F95'}}>Lunch Program</p>
            </Col>
        </Row>
    </>
  )
}
