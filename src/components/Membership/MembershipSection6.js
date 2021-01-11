import React, { Component  } from 'react';
import {Container,Row,Col,Image} from 'react-bootstrap'
import icon1 from '../../images/step-1-icon.png'
import icon2 from '../../images/step-2-icon.png'
import icon3 from '../../images/step-3-icon.png'

class MembershipSection6 extends Component {
 
    render() {      
        return (
            <>
            <section className="Membership-section-6">
                <Container>
                    <div className="Membership-section-6-data">
                        <Row>
                            <Col xl={4} lg={4} md={12} className="lg-mb-4">
                                <div className="steps-data justify-content-center d-block text-center">
                                    <h3 className="font-medium mb-3">Step 1</h3>
                                    <Image src={icon1} fluid alt="" className="mb-3" width="100" height="100" />
                                    <h3 className="font-medium mb-1">Choose your</h3>
                                    <h3 className="font-bold mb-0">Membership pass</h3>
                                </div>
                            </Col>
                            <Col xl={4} lg={4} md={12} className="lg-mb-4">
                                <div className="steps-data justify-content-center d-block text-center">
                                    <h3 className="font-medium mb-3">Step 2</h3>
                                    <Image src={icon2} fluid alt="" className="mb-3" width="100" height="100" />
                                    <h3 className="font-medium mb-1">Check email for</h3>
                                    <h3 className="font-bold mb-0">Coupon code</h3>
                                </div>
                            </Col>
                            <Col xl={4} lg={4} md={12}>
                                <div className="steps-data justify-content-center d-block text-center">
                                    <h3 className="font-medium mb-3">Step 3</h3>
                                    <Image src={icon3} fluid alt="" className="mb-3" width="100" height="100" />
                                    <h3 className="font-medium mb-1">Enjoy membership</h3>
                                    <h3 className="font-bold mb-0">Redeem coupon</h3>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
            </>
        );
    }
}

export default MembershipSection6;