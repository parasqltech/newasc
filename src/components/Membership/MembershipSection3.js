import React, { Component  } from 'react';
import {Container,Row,Col,Card,Image,Button} from 'react-bootstrap'
import card1 from '../../images/member-icon-1.png'
import card2 from '../../images/member-icon-2.png'
import card3 from '../../images/member-icon-3.png'
class MembershipSection3 extends Component {
 
    render() {      
        return (
            <>
            <section className="Membership-section-3">
                <Container>
                    <div className="Membership-section-3-data">
                        <Row className="justify-content-center">
                            <Col xl={4} lg={4} md={4}>
                                <Card className="subscription-card">
                                    <div className="save-tag orange">
                                        Save 35%
                                    </div>
                                    <div className="card-img text-center">
                                        <Image src={card1} fluid alt="" width="150" height="150" />
                                    </div>
                                    <Card.Body className="text-center px-0 pb-0">
                                        <Card.Title as="h5">ANY 3 CAMPS</Card.Title>
                                        <Card.Text as="p" className="font-18 font-bold color-3b">IN 12 MONTHS</Card.Text>
                                        <p className="points font-16 font-medium">Book any 3 camps </p>
                                        <p className="points font-16 font-medium">For any participant(s)</p>
                                        <p className="points font-16 font-medium mb-20">Valid for 12 months from the date of purchase</p>
                                        <Card.Title as="h5">$614.25</Card.Title>
                                        <p className="price color-3b font-18 font-medium">$ 945</p>
                                        <Button className=" uppercase btn-sm btn-orange" to="">BOOK Now</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={4} lg={4} md={4}>
                                <Card className="subscription-card">
                                    <div className="save-tag blue">
                                        Save 40%
                                    </div>
                                    <div className="card-img text-center">
                                        <Image src={card2} fluid alt="" width="150" height="150" />
                                    </div>
                                    <Card.Body className="text-center px-0 pb-0">
                                        <Card.Title as="h5">ANY 5 CAMPS</Card.Title>
                                        <Card.Text as="p" className="font-18 font-bold color-3b">IN 12 MONTHS</Card.Text>
                                        <p className="points font-16 font-medium">Book any 3 camps </p>
                                        <p className="points font-16 font-medium">For any participant(s)</p>
                                        <p className="points font-16 font-medium mb-20">Valid for 12 months from the date of purchase</p>
                                        <Card.Title as="h5">$945.00</Card.Title>
                                        <p className="price color-3b font-18 font-medium">$ 1575</p>
                                        <Button className=" uppercase btn-sm btn-orange" to="">BOOK Now</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={4} lg={4} md={4}>
                                <Card className="subscription-card">
                                    <div className="save-tag green">
                                        Save 45%
                                    </div>
                                    <div className="card-img text-center">
                                        <Image src={card3} fluid alt="" width="150" height="150" />
                                    </div>
                                    <Card.Body className="text-center px-0 pb-0">
                                        <Card.Title as="h5">ANY 7 CAMPS</Card.Title>
                                        <Card.Text as="p" className="font-18 font-bold color-3b">IN 12 MONTHS</Card.Text>
                                        <p className="points font-16 font-medium">Book any 3 camps </p>
                                        <p className="points font-16 font-medium">For any participant(s)</p>
                                        <p className="points font-16 font-medium mb-20">Valid for 12 months from the date of purchase</p>
                                        <Card.Title as="h5">$1212.75</Card.Title>
                                        <p className="price color-3b font-18 font-medium">$ 2205</p>
                                        <Button className=" uppercase btn-sm btn-orange" to="">BOOK Now</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
            </>
        );
    }
}

export default MembershipSection3;