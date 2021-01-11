import React, {Component} from 'react';
import Layout from "../components/layout"
import {Container,Breadcrumb,Image} from 'react-bootstrap'
import { Link } from 'gatsby'
import addbanner from '../images/add-banner.png'
import axios from 'axios';
import Footer from "../components/common/Footer"
import BottomForm from "../components/common/BottomForm"

class HowToBook extends Component {
	constructor(props) {
		super(props);
		console.log(this.props);
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
						page(id: "18", idType: DATABASE_ID) {
							id
							slug
							title
							content
						}
					}
				`
			}
		}).then(res => {
			this.setState({PageData: res.data.data.page})
		})
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
								<Breadcrumb.Item active href=""className="">How to book</Breadcrumb.Item>
							</Breadcrumb>
							<h2 className="heading-banner">How to book</h2>
						</div>
					</Container>
				</section>
				<div className="advertise-main">
					<Image src={addbanner} fluid alt="banner" />
				</div>
				<section className="How-to-book-Section-1">
					<Container>
						<div className="How-to-book-Section-1-data text-left">
							<div className="mb-30">
								{(this.state.PageData !== "") ? (<div dangerouslySetInnerHTML={{ __html: this.state.PageData.content}} />) : ("")}
							</div>
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
export default HowToBook
