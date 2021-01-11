import React, { Component  } from 'react';
import {Container,Image,Row,Col} from 'react-bootstrap'
import { Link } from 'gatsby'
import card from '../../images/hero-details-img.png'

class HeroDetailsSection2 extends Component {
 
    render() {      
        return (
            <>
            <section className="Hero-Details-Section-2">
                <Container>
                    <div className="Hero-Details-Section-2-data">
                        <div className="title">
                            <h2 className="uppercase">SHORT BIOGRAPHY</h2>
                            <h3 className="uppercase font-22 font-bold color-3b">ABOUT Heroes</h3>
                        </div>
                        <Row className="align-items-center justify-content-center mb-2">
                            <Col xl={4} lg={4} className="lg-mb-4">
                                <div class="hero-image text-center">
                                <Image src={card} fluid alt="" />
                                </div>
                            </Col>
                            <Col xl={8} lg={8}>
                                <p className="font-18 font-medium">Ange Postecoglou a former Australian and NSL player and current Australian National Soccer team coach is arguably one of the most successful Australian coaches.</p>
                                <p className="font-18 font-medium">Postecoglou played 193 games for South Melbourne and was involved in their 1984 and 1990-91 titles. He later went on to captain the club before moving into his coaching career.</p>
                            </Col>
                        </Row>
                        <p className="font-18 font-medium">Ange’s coaching career has taken him all over the world. Coaching teams such as South Melbourne, Panachaiki (Greek Club), Brisbane Roar, Melbourne Victory and both youth and senior Australian national teams. Winning two NSL titles, two A-League Championships, two premiership’s and the AFC Asian Cup with Australia.</p>
                        <p className="font-18 font-medium mb-0">Ange has truly been a massive contributor to Football (soccer) in this country and has changed the game in Australia forever.</p>
                    </div>
                </Container>
            </section>
            </>
        );
    }
}

export default HeroDetailsSection2;