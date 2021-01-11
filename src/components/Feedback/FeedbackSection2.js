import React, { Component  } from 'react';
import {Container,Form,Row,Col,Image,Tooltip,OverlayTrigger,Button} from 'react-bootstrap'
import information from '../../images/information-icon.svg'
class FeedbackSection2 extends Component {
    
    render() {    
        
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          From 1 (very dissatisfied) <br></br> to <br></br>5 (very satisfied)
        </Tooltip>
      );  
        return (
            <>
            <section className="Feedback-Section-2">
                <Container>
                    <div className="Feedback-Section-2-data">
                        <p className="font-18 font-bold text-center">Have you recently attended an ASC camp? Then Australian Sports Camps would love to hear your comments. We appreciate and take into account all feedback, so look forward to hearing from you!</p>
                        <p className="font-18 font-medium text-center mb-30">Thanks for your recent attendance at an ASC event. Please fill in the feedback form below.</p>
                        <div className="gray-data max-padd">
                            <h4 className="font-18 font-bold text-center color-3b mb-30">Feedback Form</h4>
                            <Form>
                                <Row>
                                    <Col xl={6} lg={6} className="mb-0">
                                        <Form.Group controlId="" className="mb-30">
                                            <Form.Label className="master-label">Select your state:*</Form.Label>
                                            <Form.Control as="select" className="mb-1 master">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col xl={6} lg={6} className="mb-0">
                                        <Form.Group controlId="" className="mb-30">
                                            <Form.Label className="master-label mb-3">Please rate your child’s camp experience.*
                                            <OverlayTrigger
                                                placement="top"
                                                overlay={renderTooltip} >
                                                <Image src={information} width="23" height="23" fluid alt="" className="ml-3"/>
                                            </OverlayTrigger>
                                            </Form.Label>
                                            {['radio'].map((type) => (
                                            <div key={`custom-${type}`} className="mb-3">
                                                <Form.Check className="blue-radio" name="rating" inline custom type={type} id={`custom-${type}-1`} label={`1`} />
                                                <Form.Check className="blue-radio" name="rating" inline custom type={type} id={`custom-${type}-2`} label={`2`} />
                                                <Form.Check className="blue-radio" name="rating" inline custom type={type} id={`custom-${type}-3`} label={`3`} />
                                                <Form.Check className="blue-radio" name="rating" inline custom type={type} id={`custom-${type}-4`} label={`4`} />
                                                <Form.Check className="blue-radio" name="rating" inline custom type={type} id={`custom-${type}-5`} label={`5`} />
                                            </div>
                                            ))}
                                        </Form.Group>
                                    </Col>
                                    <Col xl={12} lg={12} className="mb-0">
                                        <Form.Group controlId="" className="mb-30">
                                            <Form.Label className="master-label">Which group were you in at the camp?</Form.Label>
                                            <Form.Control className="mb-1 master" id="" placeholder="" />
                                        </Form.Group>
                                    </Col>
                                    <Col xl={6} lg={6} className="mb-0">
                                        <Form.Group controlId="" className="mb-30">
                                            <Form.Label className="master-label">Which session did you enjoy the most?</Form.Label>
                                            <Form.Control className="mb-1 master" id="" placeholder="" />
                                        </Form.Group>
                                    </Col>
                                    <Col xl={6} lg={6} className="mb-0">
                                        <Form.Group controlId="" className="mb-30">
                                            <Form.Label className="master-label">How would you rate your group coach?</Form.Label>
                                            <Form.Control as="select" className="mb-1 master">
                                                <option>Select an option</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col xl={12} lg={12} className="mb-0">
                                        <Form.Group controlId="" className="mb-30">
                                            <Form.Label className="master-label mb-3">Did you enjoy the fitness session & speed testing?</Form.Label>
                                            {['radio'].map((type) => (
                                            <div key={`custom-${type}`} className="mb-3">
                                                <Form.Check className="blue-radio" name="first-question" inline custom type={type} id={`custom-${type}-yes`} label={`Yes`} />
                                                <Form.Check className="blue-radio" name="first-question" inline custom type={type} id={`custom-${type}-no`} label={`No`} />
                                            </div>
                                            ))}
                                        </Form.Group>
                                    </Col>
                                    <Col xl={12} lg={12} className="mb-0">
                                        <Form.Group controlId="" className="mb-30">
                                            <Form.Label className="master-label">Your overall opinion of the camp, and any other comments or suggestions:</Form.Label>
                                            <Form.Control className="mb-1 text-area master" as="textarea" rows="8" />
                                        </Form.Group>
                                    </Col>
                                    <Col xl={12} lg={12} className="mb-0">
                                        <Form.Group controlId="" className="mb-30">
                                            <Form.Label className="master-label mb-3">Can ASC contact you about your feedback?*</Form.Label>
                                            {['radio'].map((type) => (
                                            <div key={`custom-${type}`} className="mb-3">
                                                <Form.Check className="blue-radio" name="second-question" inline custom type={type} id={`custom-${type}-yes1`} label={`Yes`} />
                                                <Form.Check className="blue-radio" name="second-question" inline custom type={type} id={`custom-${type}-no1`} label={`No`} />
                                            </div>
                                            ))}
                                        </Form.Group>
                                    </Col>
                                    <Col xl={12} lg={12} className="mb-20">
                                        <Form.Group className="mb-30">
                                            <Form.Label className="master-label mb-0 italic-text">Please note: if you don't wish to be contacted, ASC won't be able to respond to your feedback</Form.Label>
                                        </Form.Group>
                                    </Col>
                                    <Col xl={12} lg={12} className="mb-0 text-center">
                                        <Button className=" uppercase btn-sm btn-orange" to="">Send Feedback</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </div>
                </Container>
            </section>
            </>
        );
    }
}

export default FeedbackSection2;