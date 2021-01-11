import React, { Component  } from 'react';
import {Container,Breadcrumb} from 'react-bootstrap'
import { Link } from 'gatsby'

class MembershipSection1 extends Component {
 
    render() {      
        return (
            <>
            <section className="Banner-Section">
                <Container>
                    <div className="Banner-Section-data">
                    <Breadcrumb>
                        <Breadcrumb.Item className="">
                            <Link className="nav-link p-0" to="/">Home</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item className="">
                            <Link className="nav-link p-0" to="/City">Pricing</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active href="#"className="">Membership pass</Breadcrumb.Item>
                    </Breadcrumb>
                    <h2 className="heading-banner">Membership pass</h2>
                    </div>
                </Container>
            </section>
            </>
        );
    }
}

export default MembershipSection1;