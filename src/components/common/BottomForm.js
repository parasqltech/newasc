import React, { Component  } from 'react';
import {  Container,Col,Form,Row } from 'react-bootstrap'
import { Link } from 'gatsby'
class BottomForm extends Component {
 
    render() {      
        return (
            <>
            <section className="BottomForm">
                <Container>
                <Form>
                    <Row className="align-items-center justify-content-center">
                        <Col xs="12" xl={2} lg={3} md={12} className="lg-mb-2">
                            <Form.Label className="font-20 font-bold color-3b mb-0"> 
                                FIND A CAMP
                            </Form.Label>
                        </Col>
                        <Col xs="12" xl={3} lg={3} md={4} sm="4" className="sm-mb-2">
                            <Form.Control
                                className="mb-0 full"
                                id="inlineFormInput"
                                placeholder="Enter Suburb / Postcode"
                            />
                        </Col>
                        <Col xs="12" xl={3} lg={3} md={4} sm="4" className="sm-mb-2">
                            <Form.Control as="select" defaultValue="Select Sport" className="mb-0 full">
                                <option>Select Sport</option>
                                <option>...</option>
                            </Form.Control>
                        </Col>
                        <Col  xs="12" xl={2} lg={2} md={4} sm="4">
                            <Link to="/Camp" className="uppercase btn btn-orange mb-0">
                                Find Camps
                            </Link>
                            {/* <Button type="button" className="uppercase btn-sm btn-orange mb-0">
                                Find Camps
                            </Button> */}
                        </Col>
                    </Row>
                    </Form>
                </Container>
            </section>
            </>
        );
    }
}

export default BottomForm;