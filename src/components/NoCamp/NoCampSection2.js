import React, { Component  } from 'react';
import {Container} from 'react-bootstrap'

class NoCampSection2 extends Component {
 
    render() {      
        return (
            <>
            <section className="No-camp-section-2">
                <Container>
                <div className="title mb-30">
                        <h2>
                            SELECT A SPORT TO VIEW AND BOOK CAMPS…
                        </h2>
                        <p className="text-center">
                            No camps or programs were found matching your selection.
                        </p>
                </div>
                <div className="title ">
                        <h2>
                            Notify Me
                        </h2>
                        <p className="text-center">
                            Please fill your email to get notified when similar camps are available again.
                        </p>
                </div>
                </Container>
            </section>
            </>
        );
    }
}

export default NoCampSection2;