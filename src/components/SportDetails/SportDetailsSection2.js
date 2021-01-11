import React, { Component  } from 'react';
import {Container,Image, Row,Col} from 'react-bootstrap'
import card1 from '../../images/sport-details-card-1.png'
import card2 from '../../images/sport-details-card-2.png'
import card3 from '../../images/sport-details-card-3.png'

class SportDetailsSection2 extends Component {
 
    render() {      
        return (
            <>
            <section className="Sport-details-section-2">
                <Container>
                   <Row className="mb-30">
                       <Col xl={12}>
                            <p className="font-15 font-medium color-3b mb-0 text-center">
                                ASC RUN SCHOOL HOLIDAY FOOTBALL COACHING CAMPS ACROSS AUSTRALIA FOR CHILDREN OF ALL STANDARDS. IMPROVE YOUR SKILLS, HAVE FUN AND REACH FOR THE STARS!
                            </p>
                       </Col>
                   </Row>
                   <Row className="align-items-center mb-4">
                       <Col xl={6} lg={6} md={11}>
                            <div className="Sport-details-section-2-image">
                                <Image src={card1} fluid alt="card1" />
                            </div>
                       </Col>
                       <Col xl={6} lg={6} md={11}>
                            <div className="Sport-details-section-2-content">
                                <p className="font-15 font-medium color-3b">
                                    Join an experienced coaching panel, with guest appearances by current and former AFL players and coaches, to receive top level coaching at an ASC Football Camp.
                                </p>
                                <ul className="pl-0">
                                    <li className="font-15 font-medium color-3b">
                                    - 3 Days coaching from 9am-3pm
                                    </li>
                                    <li className="font-15 font-medium color-3b">
                                    - 18 hours coaching
                                    </li>
                                    <li className="font-15 font-medium color-3b">
                                    - Coaching for 6 to 16 year olds
                                    </li>
                                </ul>
                                <p className="font-15 font-medium color-3b">
                                    Recent special guest coaches have included Kevin Sheedy, Callan Ward, Harry Taylor, Will Schofield, Daniel Merrett & Daniel Talia.
                                </p>
                            </div>
                       </Col>
                   </Row>

                   {/*  */}

                   
                   <Row className="align-items-center mb-4">
                       <Col xl={6} lg={6} md={11} className="order-lg-1 order-12">
                            <div className="Sport-details-section-2-content">
                                <p className="font-15 font-medium color-3b">
                                    Our camps provide the chance to meet your sporting idols and make friends while having fun playing your sport. An innovative program covers all facets of football, and is designed to improve your skills and maximise enjoyment.
                                </p>
                                <ul className="pl-0">
                                    <li className="font-15 font-medium color-3b">
                                        Specialist sessions in all the skills of football
                                    </li>
                                    <li className="font-15 font-medium color-3b">
                                        Structured and enjoyable program for each age level
                                    </li>
                                    <li className="font-15 font-medium color-3b">
                                        Video analysis using state of the art digital video coaching software
                                    </li>
                                </ul>
                            </div>
                       </Col>
                       <Col xl={6} lg={6} md={11} className="order-lg-12 order-1">
                            <div className="Sport-details-section-2-image">
                                <Image src={card2} fluid alt="card2" />
                            </div>
                       </Col>
                   </Row>

                   {/*  */}

                   
                   <Row className="align-items-center mb-0">
                       <Col xl={6} lg={6} md={11}>
                            <div className="Sport-details-section-2-image">
                                <Image src={card3} fluid alt="card3" />
                            </div>
                       </Col>
                       <Col xl={6} lg={6} md={11}>
                            <div className="Sport-details-section-2-content">
                                <p className="font-15 font-medium color-3b">
                                    Our programs utilise fantastic facilities in each state with our structured skill development programs delivered by experienced and talented panels of coaches.
                                </p>
                                <ul className="pl-0">
                                    <li className="font-15 font-medium color-3b">
                                        Quality facilities
                                    </li>
                                    <li className="font-15 font-medium color-3b">
                                        Unique written coaches reports with great feedback
                                    </li>
                                    <li className="font-15 font-medium color-3b">
                                        Discounts for families, and groups from clubs or schools
                                    </li>
                                </ul>
                            </div>
                       </Col>
                   </Row>
                </Container>
            </section>
            </>
        );
    }
}

export default SportDetailsSection2;