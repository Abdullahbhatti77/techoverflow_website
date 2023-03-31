import React from 'react'
import { Row, Col } from 'reactstrap'
import Newsprop from '../../components/Newsprop'
import { BsArrowRight } from 'react-icons/bs'
import Contact from '../../components/Contact'

export default function News() {
    return (
        <>
            <div style={{ padding: '100px' }}>
                <h2 style={{ color: 'white' }}>News & Insights</h2>

                <Row xs="1" sm="2" md="2" lg="3" xl="3" className='mt-5 g-5'>
                    <Col md="4">
                        <Newsprop
                            imgsrc="./images/n1.jpg"
                            title="EdTech"
                            text="8 Best EdTech Apps | Top Mobile Apps in 2023"
                        />
                    </Col>
                    <Col md="4">
                        <Newsprop
                            imgsrc="./images/n2.jpg"
                            title="QA"
                            text="Poker Planning for Testing"
                        />
                    </Col>
                    <Col md="4">
                        <Newsprop
                            imgsrc="./images/n3.jpg"
                            title="AI"
                            text="Natural Selection in Genetic Algo"
                        />
                    </Col>
                </Row>

                <button type="button" class="btn btn-dark btn-outline-light justify-content-end mt-5">
                    <span style={{ color: 'white' }}>View Blog</span>
                    <BsArrowRight style={{ alignItems: 'center' }} />
                </button>
            </div>

            <Contact />

        </>
    )
}
