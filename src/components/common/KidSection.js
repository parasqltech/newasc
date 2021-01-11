import React, { Component } from 'react';
import { Container,Row,Col,Button,Image } from 'react-bootstrap';

class KidSection extends Component {
    render() {
        return (
            <>
            
            <section className="Kid-section">
                <div className="Kid-section-first">
                    <Container>
                        <Row className="align-items-center">
                            <Col xl={6} lg={6} className="kid-image">
                                <div className="d-lg-none d-inline">
                                    <Image src={this.props.data.image.sourceUrl} fluid alt="cardhover" />
                                </div>
                            </Col>
                            <Col xl={6} lg={6} className="text-center kids-data">
                                <p className="mb-30 font-22 font-semibold text-white" dangerouslySetInnerHTML={{ __html: this.props.data.desc}} />
                              
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="Kid-section-second">
                    <Container>
                        <div className="title">
                            <h2 className="uppercase">{this.props.data.subTitle1}</h2>
                            <h2 className="uppercase">{this.props.data.subTitle2}</h2>
                        </div>
                        <div className="text-center">
                            <Button className=" uppercase btn-sm btn-orange-large" to="">BOOK A CAMP TODAY</Button>
                        </div>
                    </Container>
                </div>
            </section>

            </>
        );
    }
}

export default KidSection;
