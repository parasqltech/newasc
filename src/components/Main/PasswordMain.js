import React, { Component  } from 'react';
import {Image,Form,Row,Col,Button} from 'react-bootstrap'
import { Link } from 'gatsby'
import border from '../../images/title-bottom-image.png'
class PasswordMain extends Component {

    render() {      
        return (
            <>
            <div>
                <h2 className="font-20 font-bold color-3b mb-0">Change Password</h2>
                <Image src={border} fluid className="mb-20" />
                <Form>
                    <Row>
                        <Col xl={12} className="mb-0">
                            <Form.Group controlId="" className="mb-20">
                                <Form.Label className="master-label">Current Password</Form.Label>
                                <Form.Control className="mb-1 master" id="" placeholder="" />
                            </Form.Group>
                        </Col>
                        <Col xl={12} className="mb-0">
                            <Form.Group controlId="" className="mb-20">
                                <Form.Label className="master-label">New Password</Form.Label>
                                <Form.Control className="mb-1 master" id="" placeholder="" />
                            </Form.Group>
                        </Col>
                        <Col xl={12} className="mb-0">
                            <Form.Group controlId="" className="mb-30">
                                <Form.Label className="master-label">Repeat Password</Form.Label>
                                <Form.Control className="mb-1 master" id="" placeholder="" />
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

export default PasswordMain;