import React, { Component  } from 'react';
import {Image,Form,Row,Col,Button} from 'react-bootstrap'
import { Link } from 'gatsby'
import border from '../../images/title-bottom-image.png'
class AccountMain extends Component {

    render() {      
        return (
            <>
            <div>
                <h2 className="font-20 font-bold color-3b mb-0">Account</h2>
                <Image src={border} fluid className="mb-20" />
                <Form>
                    <Row>
                        <Col xl={6} lg={6} className="mb-0">
                            <Form.Group controlId="" className="mb-20">
                                <Form.Label className="master-label">First Name*</Form.Label>
                                <Form.Control className="mb-1 master" id="" placeholder="John" />
                            </Form.Group>
                        </Col>
                        <Col xl={6} lg={6} className="mb-0">
                            <Form.Group controlId="" className="mb-20">
                                <Form.Label className="master-label">Last Name*</Form.Label>
                                <Form.Control className="mb-1 master" id="" placeholder="smith" />
                            </Form.Group>
                        </Col>
                        <Col xl={12} className="mb-0">
                            <Form.Group controlId="" className="mb-20">
                                <Form.Label className="master-label">Display Name *</Form.Label>
                                <Form.Control className="mb-1 master" id="" placeholder="" />
                                <span className="font-15 color-70 font-regular">This will be how your name will be displayed in the account section and in reviews</span>
                            </Form.Group>
                        </Col>
                        <Col xl={12} className="mb-0">
                            <Form.Group controlId="" className="mb-30">
                                <Form.Label className="master-label">Email address *</Form.Label>
                                <Form.Control className="mb-1 master" id="" placeholder="johnsmith@gmail.com" />
                            </Form.Group>
                        </Col>
                        <Col xl={12}>
                            <Button type="button" className="btn-sm btn-orange mb-0">
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

export default AccountMain;