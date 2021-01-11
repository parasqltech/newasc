import React, { Component  } from 'react';
import {Image,Form,Row,Col,Button} from 'react-bootstrap'
import { Link } from 'gatsby'
import border from '../../images/title-bottom-image.png'
class NewAddressMain extends Component {

    render() {      
        return (
            <>
            <div>
                <div className="d-flex d-small-block justify-content-between align-items-center mb-2">
                    <h2 className="font-20 font-bold color-3b mb-0 sm-mb-2">New Address</h2>
                    <Link onClick={e => e.preventDefault()} id="new_back" className="gray-small-button font-medium">Back</Link>
                </div>
                <Image src={border} fluid className="mb-20"/>
                <Form>
                    <Row>
                        <Col xl={6} lg={6} className="mb-0">
                            <Form.Group controlId="" className="mb-20">
                                <Form.Label className="master-label">First Name*</Form.Label>
                                <Form.Control className="mb-1 master" id="" placeholder="First Name" />
                            </Form.Group>
                        </Col>
                        <Col xl={6} lg={6} className="mb-0">
                            <Form.Group controlId="" className="mb-20">
                                <Form.Label className="master-label">Last Name*</Form.Label>
                                <Form.Control className="mb-1 master" id="" placeholder="Last Name" />
                            </Form.Group>
                        </Col>
                        <Col xl={12} className="mb-0">
                            <Form.Group controlId="" className="mb-20">
                                <Form.Label className="master-label">Email address *</Form.Label>
                                <Form.Control className="mb-1 master" id="" placeholder="Enter email id" />
                            </Form.Group>
                        </Col>
                        <Col xl={6} lg={6} className="mb-0">
                            <Form.Group controlId="" className="mb-20">
                                <Form.Label className="master-label">Mobile *</Form.Label>
                                <Form.Control className="mb-1 master" id="" placeholder="04xxxxxxxx" />
                            </Form.Group>
                        </Col>
                        <Col xl={6} lg={6} className="mb-0">
                            <Form.Group controlId="" className="mb-20">
                                <Form.Label className="master-label">Phone (optional)</Form.Label>
                                <Form.Control className="mb-1 master" id="" placeholder="04xxxxxxxx" />
                            </Form.Group>
                        </Col>
                        <Col xl={12} className="mb-0">
                            <Form.Group controlId="" className="mb-20">
                                <Form.Label className="master-label">Street address *</Form.Label>
                                <Form.Control className="mb-3 master" id="" placeholder="House number and street name" />
                                <Form.Control className="mb-1 master" id="" placeholder="Apartment, suite, unit etc. (optional)" />
                            </Form.Group>
                        </Col>
                        <Col xl={12} className="mb-0">
                            <Form.Group controlId="" className="mb-20">
                                <Form.Label className="master-label">Country *</Form.Label>
                                <Form.Control as="select" className="mb-1 master">
                                    <option>Select an option</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col xl={6} lg={6} className="mb-0">
                            <Form.Group controlId="" className="mb-20">
                                <Form.Label className="master-label">Suburb *</Form.Label>
                                <Form.Control className="mb-1 master" id="" placeholder="Enter suburb" />
                            </Form.Group>
                        </Col>
                        <Col xl={6} lg={6} className="mb-0">
                            <Form.Group controlId="" className="mb-20">
                                <Form.Label className="master-label">State *</Form.Label>
                                <Form.Control as="select" className="mb-1 master">
                                    <option>Select an option</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col xl={12} className="mb-0">
                            <Form.Group controlId="" className="mb-20">
                                <Form.Label className="master-label">Postcode *</Form.Label>
                                <Form.Control className="mb-1 master" id="" placeholder="Enter Postcode " />
                            </Form.Group>
                        </Col>
                        <Col xl={12} className="mb-0">
                            <Form.Group controlId="" className="mb-20">
                                {['checkbox'].map((type) => (
                                    <div key={`custom-${type}`} className="mb-0">
                                    <Form.Check className="blue-check" custom type={type} id={`custom-${type}-1`} inline
                                        label={`Set as my default address`}
                                    />
                                    </div>
                                ))}
                            </Form.Group>
                        </Col>
                        <Col xl={12}>
                            <Button type="button" className="btn btn-orange mb-0 mr-3">
                                Save
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </div>
            </>
        );
    }
}

export default NewAddressMain;