import React, { Component  } from 'react';
import {Container,Breadcrumb} from 'react-bootstrap'
import { Link } from 'gatsby'
// import addbanner from '../../images/add-banner.png'

class CityDetailsSection1 extends Component {
 
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
                            <Link className="nav-link p-0" to="/City">City</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active href=""className="">Sydney</Breadcrumb.Item>
                    </Breadcrumb>
                    <h2 className="heading-banner">Sydney school holiday programs</h2>
                    </div>
                </Container>
            </section>
            {/* <div className="advertise-main">
                <Image src={addbanner} fluid alt="banner" />
            </div> */}
            </>
        );
    }
}

export default CityDetailsSection1;