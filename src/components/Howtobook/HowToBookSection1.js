import React, { Component  } from 'react';
import {Container,Breadcrumb,Image} from 'react-bootstrap'
import { Link } from 'gatsby'
import addbanner from '../../images/add-banner.png'

class HowToBookSection1 extends Component {
 
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
                        <Breadcrumb.Item active href=""className="">How to book</Breadcrumb.Item>
                    </Breadcrumb>
                    <h2 className="heading-banner">How to book</h2>
                    </div>
                </Container>
            </section>
            <div className="advertise-main">
                <Image src={addbanner} fluid alt="banner" />
            </div>
            </>
        );
    }
}

export default HowToBookSection1;