import React from 'react'
import Outcomeprop from '../../components/Outcomeprop'
import { Row, Col } from 'reactstrap'

export default function Section1() {
  return (
    <>
        <h2 style={{color: "white"}}>
            Our bespoke approach to product development relies on a blend of <span style={{color: '#00B9FA'}}>engineering talent, design vision, and product strategy.</span>
        </h2>

        <Row style={{marginTop: '130px'}} className='g-4' xs="1" sm="2" md="2" lg="3" xl="3">
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
