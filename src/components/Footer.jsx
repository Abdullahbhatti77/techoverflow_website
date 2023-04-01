import React from 'react'
import { Row, Col } from 'reactstrap'
import { RiTwitterFill } from 'react-icons/ri'
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'

export default function Footer() {
    return (
        <>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                <div style={{textAlign: 'center'}}>
                    <h2 style={{color: 'white'}}>How can we help you?</h2>
                    <button type='button' className='btn btn-info mt-5'>Lets Talk</button>
                </div>
            </div>

            <div style={{padding: '150px'}}>
                <Row style={{ color: "white" }} xs="1" sm="2" md="1" lg="3" xl="3" className='g-4'>
                    <Col md="4">
                        <h4>Hubs</h4>
                        <p>USA</p>
                        <p>UK</p>
                        <p>Canada</p>
                        <p>India</p>
                    </Col>
                    <Col md="4">
                        <h4>Contact</h4>
                        <p>Phone: 123-456-7890</p>
                        <p>hello@techoverflow.io</p>
                        <p>318 E1, Wapda Town, Lahore Pakistan</p>
                    </Col>
                    <Col md="4">
                        <h4>Sitemap</h4>
                        <p>Home</p>
                        <p>About</p>
                        <p>Services</p>
                        <p>Blog</p>
                        <p>ITO</p>
                    </Col>
                </Row>
            </div>

            {/* <hr style={{backgroundColor: 'white'}}/> */}
            <div style={{ color: "white", display: 'flex', justifyContent: 'center', marginTop: '0px' }}>
                <p style={{ marginRight: '20px' }}>Follow US</p>
                <RiTwitterFill style={{ fontSize: '25px' }} />
                <AiFillInstagram style={{ fontSize: '25px' }} />
                <AiFillLinkedin style={{ fontSize: '25px' }} />
            </div>

            <h6 style={{color: '#31D2F2', justifyContent: 'center', display: 'flex', paddingBottom: '20px'}}>Designed by Muhammad Abdullah</h6>
            
        </>
    )
}
