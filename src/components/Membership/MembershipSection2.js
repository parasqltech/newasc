import React, { Component  } from 'react';
import {Container} from 'react-bootstrap'

class MembershipSection2 extends Component {
 
    render() {      
        return (
            <>
            <section className="Membership-section-2">
                <Container>
                    <div className="Membership-section-2-data">
                        <div className="title mb-0">
                            <h2 className="uppercase">Membership pass</h2>
                        </div>
                        <p className="text-center list-style-disc font-18 font-medium mb-30">An ASC membership pass allows you to pre-purchase camp places at reduced rates.  Book a ‘pack’ of 3, 5 or 7 camp places NOW.</p>
                        <ul className="pl-0 text-left">
                            <li>
                                <p className="text-left font-18 font-medium mb-2">Lock in the best prices for ASC camps, upfront.</p>
                            </li>
                            <li>
                                <p className="text-left font-18 font-medium mb-2">Then, book camps across 2 or more seasons, as you choose, when you choose.</p>
                            </li>
                            <li>
                                <p className="text-left font-18 font-medium mb-0">Our automated system tracks your usage.</p>
                            </li>
                        </ul>
                    </div>
                </Container>
            </section>
            </>
        );
    }
}

export default MembershipSection2;