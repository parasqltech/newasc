import React, {Component} from 'react';
import {Container,Breadcrumb,Accordion,Card,Button} from 'react-bootstrap'
import { Link } from 'gatsby'
import Layout from "../components/layout"
import Footer from "../components/common/Footer"
import BottomForm from "../components/common/BottomForm"
import axios from 'axios';
class FAQ extends Component {
	
	
	constructor(props) {
		super(props);
		
    }
	
	state = {
		PageData: []
	}
	
	componentDidMount() {
		axios({
			url: 'https://staging-ascstaging.kinsta.cloud/graphql',
			method: 'post',
			data: {
				query: `
					query MyQuery {
						page(id: "30", idType: DATABASE_ID) {
							faq {
								faq {
									answer
									fieldGroupName
									question
								}
							}
						}
					}
				`
			}
		}).then(res => {
			this.setState({PageData: res.data.data.page.faq})
			console.log(res.data.data);
		})
	}
	
	
	
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
			<Layout>
            <>
				<section className="Banner-Section">
					<Container>
						<div className="Banner-Section-data">
							<Breadcrumb>
								<Breadcrumb.Item className="">
									<Link className="nav-link p-0" to="/">Home</Link>
								</Breadcrumb.Item>
								<Breadcrumb.Item active href=""className="">FAQ</Breadcrumb.Item>
							</Breadcrumb>
							<h2 className="heading-banner">FAQS (FREQUENTLY ASKED QUESTIONS)</h2>
						</div>
					</Container>
				</section>
				<section className="Faq-Section-2">
					<Container>
						<div className="Faq-Section-2-data accordian-div">
							<Accordion defaultActiveKey="1">
								{(this.state.PageData !== null) ? (
									<>
									{this.state.PageData.faq.map((str,i) => 
										<>
										<Card  className={"p-0 mb-4 id"+i}>
											<Card.Header>
												<Accordion.Toggle className="font-18 font-medium p-0" as={Button} onClick={() => {this.handleToggle(i)}} variant="link" eventKey={'"'+i+'"'}>
													{str.question}
												</Accordion.Toggle>
											</Card.Header>
											<Accordion.Collapse eventKey={'"'+i+'"'}>
												<Card.Body className="font-16 font-regular" dangerouslySetInnerHTML={{ __html: str.answer}} />
											</Accordion.Collapse>
										</Card>
										</>
									)}
									</>
								) : ("")}
								
								
								
							</Accordion>
						</div>		
					</Container>		
				</section>		
				<BottomForm/>
				<Footer/>
            </>
			</Layout>
		)
	}
}
export default FAQ
