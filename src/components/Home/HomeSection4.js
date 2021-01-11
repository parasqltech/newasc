import React, { Component  } from 'react';
import { Link } from 'gatsby'
import {  Container,Col,Row,Image } from 'react-bootstrap'
import trainer1 from '../../images/trainer1.png'
import trainer3 from '../../images/trainer3.png'
import trainer4 from '../../images/trainer4.png'


class HomeSection4 extends Component {
    render() {      
        return (
            <>
            <section className="Home-section-4">
                <Container>
                    <div className="title">
                        <Row className="justify-content-center">
                            <Col xl={9} lg={11}>
                                <h2>ASC HALL OF FAME</h2>
                                <p>Some of our past and current ASC heroes</p>
                            </Col>
                        </Row>
                    </div>
                    <Row>
                        {this.props.data.star.map((str) => 
							
							<Col xl={3} lg={3} md={6} className="main-trainer mb-4">
								<div className="trainer-main">
									<Image className="lazyload" variant="top" src={str.image.sourceUrl} fluid alt="trainer"/>
									<div className="trainer-content">
										<div className="trainer-card">
											<h4>{str.name}</h4>
											<p>{str.description}</p>
											<Link to="" className="nav-link p-0">Read More</Link>
										</div>
									</div>
								</div>
							</Col>
							
						)}    
                    </Row>
                </Container>
            </section>
            </>
        );
    }
}

export default HomeSection4;