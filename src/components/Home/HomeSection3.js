import React, { Component  } from 'react';
import { Link } from 'gatsby'
import {  Container,Col,Row,Card,Image } from 'react-bootstrap'
import card1 from '../../images/card1.png'
import card2 from '../../images/card2.png'
import card3 from '../../images/card3.png'
import card4 from '../../images/card4.png'
import card5 from '../../images/card5.png'
import card6 from '../../images/card6.png'
import card7 from '../../images/card7.png'
import card8 from '../../images/card8.png'
import card9 from '../../images/card9.png'
import cardhover from '../../images/card-hover-img.png'


class HomeSection3 extends Component {
    
	
	
	render() {    
		const chunkSize = 3;
		const arr = this.props.data.camp;
		const groups = arr.map((e, i) => { 
			 return i % chunkSize === 0 ? arr.slice(i, i + chunkSize) : null; 
		}).filter(e => { return e; });
		console.log({arr, groups});
        return (
            <>
            <section className="Home-section-3">
                <Container>
                    <div className="title">
                        <Row className="justify-content-center">
                            <Col xl={9} lg={11}>
                                <h2>Find a camp</h2>
                            </Col>
                        </Row>
                    </div>
					 <Row>
					{groups.map((cmp) => 
						 <Col xl={4} lg={4} md={7} sm={9} xs={10} className="main-styled-card">
						{cmp.map((camp) => 
							<Card  className="styled-card">
                                <div className="card-img">
                                    <div className="inner-card ">
                                        <Image src={cardhover} fluid alt="cardhover"/>
                                    </div>
                                    <Image className="lazyload" variant="top" src={camp.image.sourceUrl} fluid alt="card"/>
                                </div>
                                <Card.Body>
                                    <Card.Title as="h5">{camp.link.title}</Card.Title>
                                    <Card.Text>
										{camp.smallDesc}
                                    </Card.Text>
                                    <Link className="" to={camp.link.link}>Read More</Link>
                                </Card.Body>
                            </Card>
						)}
						</Col>		
					)} 
					 </Row>
                   
                    
                </Container>
            </section>
            </>
        );
    }
}

export default HomeSection3;