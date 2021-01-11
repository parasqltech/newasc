import React, { Component  } from 'react';
import {Container} from 'react-bootstrap'

class MembershipSection5 extends Component {
 
    render() {      
        return (
            <>
            <section className="Membership-section-5">
                <Container>
                    <div className="Membership-section-5-data">
                        <div className="title mb-0">
                            <h2 className="uppercase">How It Works</h2>
                        </div>
                        <p className="text-left font-18 font-medium mb-30">Using and redeeming the membership pass is very easy. Simply follow the below steps:</p>
                        <ul className="pl-0 list-style-none text-left">
                            <li>
                                <p className="text-left font-18 font-medium mb-2">Step 1: Choose and purchase your preferred membership pass ‘pack’</p>
                            </li>
                            <li>
                                <p className="text-left font-18 font-medium mb-2">Step 2: You will receive an email with an exclusive coupon code to book your future camps</p>
                            </li>
                            <li>
                                <p className="text-left font-18 font-medium mb-2">Step 3: To redeem, simply use the code at the time of booking your place</p>
                            </li>
                            <li>
                                <p className="text-left font-18 font-medium mb-0">For any questions please call us on 1300 914 368.</p>
                            </li>
                        </ul>
                    </div>
                </Container>
            </section>
            </>
        );
    }
}

export default MembershipSection5;