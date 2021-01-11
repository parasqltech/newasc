import React, { Component } from 'react';
import { Container,Image,Row,Col,Button } from 'react-bootstrap';
import batman from '../../images/bat-man.png'

class BatmanSection extends Component {

    render() {
        return (
            <>
            
            <section className="Batman-Section">
                <Container>
                <div className="title mb-0">
                    <Row className="justify-content-center">
                        <Col xl={9} lg={11}>
                            <h2>{this.props.data.title}</h2>
                            <p>{this.props.data.subTitle}</p>
                        </Col>
                    </Row>
                </div>
                <div className="Batman-Section-data">
                    <Row className="justify-content-center align-items-center">
                        <Col xl={4} lg={4} md={12} className="justify-content-center d-flex lg-mb-2">
                            <Image src={this.props.data.image.sourceUrl} fluid alt="cardhover" className="batman" />
                        </Col>
                        <Col xl={8} lg={8} md={12}>
                            <div className="pl-3 pr-2">
                                <p className="font-15 font-medium color-3b mb-30" dangerouslySetInnerHTML={{ __html: this.props.data.desc}} />
                                    
                                
                                
                                <Button className=" uppercase btn-sm btn-orange-large" to="">BOOK A CAMP TODAY</Button>
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

export default BatmanSection;
