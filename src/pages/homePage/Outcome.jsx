import React from 'react'
import Outcomeprop from '../../components/Outcomeprop'
import { Row, Col } from 'reactstrap'

export default function Outcome() {
  return (
    <>
        <h2 style={{ color: 'white' }}>Outcome-Driven Design + Development at any scale</h2>

        <Row xs="1" sm="2" md="2" lg="2" xl="3" className="mt-5 g-4">
            <Col md="4">
                <Outcomeprop imgsrc="./images/design.png"
                    title="Design"
                    subtitle="Software development, modernization, enhancement, and so much more."
                    o1="Mobile / Web Development"
                    o2="QA / QA Automation"
                    o3="DevOps"
                    o4="Machine Learning" />
            </Col>
            <Col md="4">
                <Outcomeprop imgsrc="./images/engineering.png"
                    title="Engineering"
                    subtitle="Powerful, intuitive UI and UX promotes adoption, engagement, and loyalty."
                    o1="Mobile / Web Development"
                    o2="QA / QA Automation"
                    o3="DevOps"
                    o4="Machine Learning" />
            </Col>
            <Col md="4">
                <Outcomeprop imgsrc="./images/produc.png"
                    title="Product Strategy"
                    subtitle="Define your product vision, build a roadmap, and connect with users."
                    o1="Mobile / Web Development"
                    o2="QA / QA Automation"
                    o3="DevOps"
                    o4="Machine Learning" />
            </Col>
        </Row>
    </>
  )
}
