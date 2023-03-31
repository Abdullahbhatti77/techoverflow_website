import React from 'react'
import Outcomeprop from '../../components/Outcomeprop'
import { Row, Col } from 'reactstrap'

export default function Section3() {
  return (
    <>
        <h2 style={{color: 'white'}}>
            Our Process
        </h2>

        <Row className="mt-5 g-5">
            <Col md="6">
                <Outcomeprop imgsrc="./images/discovery.png"
                    title="Discovery"
                    subtitle="Build a map that takes you exactly where you want to be."
                    o1="Our Discovery process unearths and bolsters your project’s unique value proposition. Jointly crystalizing our understanding of the mission is essential to guiding and prioritizing effort. Working with our multidisciplinary team will define and frame the “why” and “how” behind your product."
                    />
            </Col>
            <Col md="6">
                <Outcomeprop imgsrc="./images/foundations.png"
                    title="Foundations"
                    subtitle="Careful preparation for Sprint Zero ensures Delivery readiness"
                    o1="During this phase the team will work to ensure a smooth launch for Sprint One. Crucial knowledge transfer between the Discovery team and Delivery team also occurs in this phase. The team will set up servers, create repositories, and lay the groundwork for continued development of your app."/>
            </Col>
            <Col md="6">
                <Outcomeprop imgsrc="./images/deleivery.png"
                    title="Delivery"
                    subtitle="We work in a strict Agile environment with Bi-Weekly Sprints"
                    o1="Our Agile development framework iteratively delivers site functionality through a series of two-week Sprints. In this framework, each Sprint begins with a Sprint Planning session, in which the team works closely with the Product Owner to select the backlog items (features) they will deliver. They also develop a plan for translating those items into a functional product increment."/>
            </Col>
            <Col md="6">
                <Outcomeprop imgsrc="./images/launch.png"
                    title="Launch"
                    subtitle="Successful Delivery is followed by a successful Launch."
                    o1="Our team will verify the product and any integrations are functioning as expected, and will work with your team to assess, prioritize, and resolve any critical defects. We will also prepare the production environment in order to ensure it is capable of processing the expected levels of traffic. Finally, we will define with you our overall Go-to-Market Strategy: dates, final validations, and sanity check."/>
            </Col>
            <Col md="6">
                <Outcomeprop imgsrc="./images/continuous.png"
                    title="Continuous Discovery"
                    subtitle="Value doesn’t end with Delivery. Delivery doesn’t end with Launch."
                    o1="With a new product, challenges arise. As a long-term partner, we help you identify those challenges, harness the data and apply lessons learned. We clearly understand the need for bottom-line results and will continue strengthening your value proposition against market expectations and funding requirements."/>
            </Col>
        </Row>
    </>
  )
}
