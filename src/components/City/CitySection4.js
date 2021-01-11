import React, { Component } from 'react';
import { Container,Row,Col } from 'react-bootstrap';

class CitySection4 extends Component {
    render() {
        return (
            <>
            
            <section className="City-section-4">
                <Container>
                    <div className="title-main mb-0">
                        <Row className="justify-content-center">
                            <Col xl={6} lg={11}>
                                <h2 className="text-white">MAKE THE MOST OF THESE UPCOMING SCHOOL HOLIDAYS</h2>
                            </Col>
                        </Row>
                    </div>
                    
                    <p className="font-15 font-medium text-center text-white">
                        Give your children the opportunity to get active these upcoming school holidays.
                    </p>
                    <p className="font-15 font-medium text-center text-white">
                        Kids love to be active and our school holiday camps allow your kids to have fun, improve their skills, meet new friends, receive advice from experienced coaches while also encouraging kids to lead more active lives.
                    </p>
                    <p className="font-15 font-medium text-center text-white">
                        Our holiday programs run across three days with each day structure around a specific timetable which includes covering all facets of the chosen sports.
                    </p>
                    <p className="font-15 font-medium text-center text-white mb-0">
                        Book a camp online today and get started.
                    </p>
                </Container>
            </section>

            </>
        );
    }
}

export default CitySection4;
