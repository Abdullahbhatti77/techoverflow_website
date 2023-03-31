import React from 'react'
import { Row, Col } from 'reactstrap'
import { RiTwitterFill } from 'react-icons/ri'
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'

export default function Footer() {
    return (
        <>
            <div style={{padding: '150px'}}>
                <Row xs="1" sm="2" md="2" lg="3" xl="3" style={{ color: "white" }} className='g-4'>
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
            <div style={{ color: "white", display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
                <p style={{ marginRight: '20px' }}>Follow US</p>
                <RiTwitterFill style={{ fontSize: '25px' }} />
                <AiFillInstagram style={{ fontSize: '25px' }} />
                <AiFillLinkedin style={{ fontSize: '25px' }} />
            </div>

        </>
    )
}
