import React, { Component  } from 'react';
import {Container,Button} from 'react-bootstrap'
import scrollTo from 'gatsby-plugin-smoothscroll';

class CityDetailsSection2 extends Component {
 

    render() {     
      
        return (
            <>
            <section className="City-details-section-2">
                <Container>
                    <div className="">
                        <Container>
                            <div className="title">
                                <h2 className="uppercase">UPCOMING SYDNEY SPORTS CAMPS.</h2>
                                <h2 className="uppercase">SELECT YOUR CAMP BELOW.</h2>
                            </div>
                            <div className="text-center">
                                <Button className="uppercase btn btn-orange-large"  onClick={() => scrollTo('#flyer_form')}>DOWNLOAD FLYER</Button>
                            </div>
                        </Container>
                    </div>
                </Container>
            </section>
            </>
        );
    }
}

export default CityDetailsSection2;