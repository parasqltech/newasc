import React, { Component  } from 'react';
import {Container} from 'react-bootstrap'
class MembershipSection4 extends Component {
 
    render() {      
        return (
            <>
            <section className="Membership-section-4">
                <Container>
                    <div className="Membership-section-4-data">
                    <div className="title">
                        <h2 className="uppercase">Terms & Conditions</h2>
                    </div>
                    <ul className="pl-3 text-left list-style-disc">
                        <li>
                            <p className="text-left font-18 font-medium mb-2">For any participant(s)</p>
                        </li>
                        <li>
                            <p className="text-left font-18 font-medium mb-2">Valid for 12 months from the date of purchase</p>
                        </li>
                        <li>
                            <p className="text-left font-18 font-medium mb-2">Cannot be used in conjunction with any other offers</p>
                        </li>
                        <li>
                            <p className="text-left font-18 font-medium mb-2">Cannot be used for ASC Partner Programs or TSG Hoffenheim Camps</p>
                        </li>
                        <li>
                            <p className="text-left font-18 font-medium mb-2">Non refundable</p>
                        </li>
                        <li>
                            <p className="text-left font-18 font-medium mb-2">Individual camps can be cancelled and re-booked</p>
                        </li>
                        <li>
                            <p className="text-left font-18 font-medium mb-0">To be used across minimum 2 seasons</p>
                        </li>
                    </ul>
                    </div>
                </Container>
            </section>
            </>
        );
    }
}

export default MembershipSection4;