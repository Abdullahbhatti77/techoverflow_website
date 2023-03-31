import React from 'react'
import Outcomeprop from '../../components/Outcomeprop'
import { Row, Col } from 'reactstrap'

export default function Section2() {
  return (
    <>
        <h2 style={{color: 'white'}}>
            Service Lines
        </h2>

        <Row className="mt-5 g-5">
            <Col md="6">
                <Outcomeprop imgsrc="./images/img11.png"
                    title="Experience Design"
                    // subtitle="Build a map that takes you exactly where you want to be."
                    o1="Delightful and intuitive experiences that deliver both user and visual value."
                    />
            </Col>
            <Col md="6">
                <Outcomeprop imgsrc="./images/img10.png"
                    title="User Centered Design"
                    // subtitle="Careful preparation for Sprint Zero ensures Delivery readiness"
                    o1="Explicit understanding of users, tasks, and environments; is driven and refined by user-centered evaluation; and addresses the whole user experience."/>
            </Col>
            <Col md="6">
                <Outcomeprop imgsrc="./images/img9.png"
                    title="UI/UX"
                    // subtitle="We work in a strict Agile environment with Bi-Weekly Sprints"
                    o1="Eye-catching UI/UX interfaces. Over a decade of experience allowed us to create unique processes to defining the experience a user would go through when interacting with a digital product or website"/>
            </Col>
            <Col md="6">
                <Outcomeprop imgsrc="./images/img8.png"
                    title="Accessibility & Compliance"
                    // subtitle="Successful Delivery is followed by a successful Launch."
                    o1="ADA compliance is short for the Americans with Disabilities Act Standards for Accessible Design. What that means is that all electronic information and technology—i.e, your website—must be accessible to those with disabilities"/>
            </Col>
        </Row>
    </>
  )
}
