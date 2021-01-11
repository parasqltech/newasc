import React, { Component} from 'react';
import {Container,Row,Col,Button} from 'react-bootstrap'

class ResourceDetailsSection2 extends Component {
 
    render() {      
        return (
            <>
            <section className="Resource-details-section-2">
                <Container>
                    <div className="Resource-details-Section-data">
                        <Row className="justify-content-end">
                            <Col xl={5} lg={6} md={10}>
                                <div className="title text-left">
                                    <h2>Lorem ipsum dolor sit </h2>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.</p>
                                </div>
                                <div className="text-center">
                                    <Button className=" uppercase btn-orange-border " to="">Send My PDF!</Button>
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

export default ResourceDetailsSection2;