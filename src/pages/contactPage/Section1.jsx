import React from 'react'
import { Row, Col, Form, FormGroup,Label, Input, Dropdown, DropdownMenu,DropdownToggle,DropdownItem } from 'reactstrap'

export default function Section1() {
    return (
        <>
            <h2 style={{ color: 'white', textAlign: 'center' }}>
                Fill this form and we will call you back.
            </h2>
            <p style={{ color: 'white', textAlign: 'center' }}>We are trusted by the largest companies in the world to deliver critically important digital products and staffing solutions.</p>

            <Row style={{marginTop: '100px'}} className='g-5'>
                <Col >
                    <img src='./images/form.png' width="" className='img-fluid'/>
                </Col>

                <Col >
                    <Form>
                        <FormGroup controlId="formBasicEmail">
                            <Label for="exampleName" style={{color: 'white'}}>
                                Name
                            </Label>
                            <Input
                                id="exampleName"
                                name="name"
                                placeholder="Enter Name"
                                type="text"
                            />
                            <Label for="exampleName" style={{color: 'white'}}>
                                LastName
                            </Label>
                            <Input
                                id="exampleName"
                                name="name"
                                placeholder="Enter Full name"
                                type="text"
                            />
                            <Label for="exampleEmail" style={{color: 'white'}}>
                                Email
                            </Label>
                            <Input
                                id="exampleEmail"
                                name="email"
                                placeholder="Enter your email"
                                type="email"
                            />
                            <Label for="examplePhone" style={{color: 'white'}}>
                                Phone#
                            </Label>
                            <Input
                                id="examplePhone"
                                name="phone"
                                placeholder="Enter your phone number"
                                type="text"
                            />
                            <Label for="exampleMessage" style={{color: 'white'}}>
                                How did you hear about us ?
                            </Label>
                            <Input
                                id="exampleMessage"
                                name="message"
                                placeholder=""
                                type="textarea"
                            />
                            {/* <Dropdown>
                                <DropdownToggle variant="Primary" id="dropdown-basic">
                                    Dropdown Button
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem href="#/action-1">Action</DropdownItem>
                                    <DropdownItem href="#/action-2">Another action</DropdownItem>
                                    <DropdownItem href="#/action-3">Something else</DropdownItem>
                                </DropdownMenu>
                            </Dropdown> */}
                        </FormGroup>
                    </Form>
                </Col>

            </Row>
        </>
    )
}
