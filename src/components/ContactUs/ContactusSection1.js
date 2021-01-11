import React, { Component  } from 'react';
import {Container,Breadcrumb} from 'react-bootstrap'
import { Link } from 'gatsby'

class ContactusSection1 extends Component {
 
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
                        <Breadcrumb.Item active href=""className="">Contact us</Breadcrumb.Item>
                    </Breadcrumb>
                    <h2 className="heading-banner">Contact us</h2>
                    </div>
                </Container>
            </section>
            </>
        );
    }
}

export default ContactusSection1;