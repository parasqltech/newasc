import React, { Component  } from 'react';
import {Container,Accordion,Card,Button } from 'react-bootstrap'

class MembershipSection7 extends Component {
 
    handleToggle = (id) => {
		
        document.querySelectorAll('.card:not(.id'+id+')').forEach(function(button) {	
			if(!button.classList.contains(".id"+id)){
				button.classList.remove('active');
			}
		});
		
		if (document.querySelector(".id"+id).classList.contains('active')) {
		  document.querySelector(".id"+id).classList.remove('active');
		} else {
		  document.querySelector(".id"+id).classList.add('active');
		}
		
    } 

    render() {      
        return (
            <>
            <section className="Membership-section-7">
                <Container>
                    <div className="Membership-section-7-data accordian-div">
                        <h2 className="font-bold color-3b text-center">FAQS (FREQUENTLY ASKED QUESTIONS)</h2>

                        <Accordion defaultActiveKey="1">
                            <Card  className={"p-0 mb-4 id0"}>
                                <Card.Header>
                                <Accordion.Toggle className="font-18 font-medium p-0" as={Button} onClick={() => {this.handleToggle(0)}} variant="link" eventKey="0">
                                    How much does it normally cost to attend a camp?
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                <Card.Body className="font-16 font-regular">
                                    Lorem ipsum dolor sit amet.
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card  className={"p-0 mb-4 id1 active"}>
                                <Card.Header className="">
                                <Accordion.Toggle className="font-18 font-medium p-0" as={Button} onClick={() => {this.handleToggle(1)}} variant="link" eventKey="1">
                                    How long do I have to use the pass?
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                <Card.Body className="font-16 font-regular">
                                    The Pass is valid for one year from purchase.
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card  className={"p-0 mb-4 id2"}>
                                <Card.Header>
                                <Accordion.Toggle className="font-18 font-medium p-0" as={Button} onClick={() => {this.handleToggle(2)}} variant="link" eventKey="2">
                                    Can I use the pass all at once?
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="2">
                                <Card.Body className="font-16 font-regular">
                                    Lorem ipsum dolor sit amet.
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            
                            <Card  className={"p-0 mb-4 id3"}>
                                <Card.Header>
                                <Accordion.Toggle className="font-18 font-medium p-0" as={Button} onClick={() => {this.handleToggle(3)}} variant="link" eventKey="3">
                                    Can I use the pass in conjunction with other offers?
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="3">
                                <Card.Body className="font-16 font-regular">
                                    Lorem ipsum dolor sit amet.
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            
                            <Card  className={"p-0 mb-4 id3"}>
                                <Card.Header>
                                <Accordion.Toggle className="font-18 font-medium p-0" as={Button} onClick={() => {this.handleToggle(3)}} variant="link" eventKey="4">
                                    Lorem ipsum dolor sit amet, consetetur
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="4">
                                <Card.Body className="font-16 font-regular">
                                    Can I book in multiple participants at the same time?
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </div>
                </Container>
            </section>
            </>
        );
    }
}

export default MembershipSection7;