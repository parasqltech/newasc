import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { Link, StaticQuery, graphql } from 'gatsby'
import Layout from "../components/layout"
import LazyLoad from 'react-lazyload';
import $ from "jquery";
import axios from 'axios';
import {Container,Breadcrumb} from 'react-bootstrap'
import {Row,Col,Card} from 'react-bootstrap'
import Footer from "../components/common/Footer"
import BottomForm from "../components/common/BottomForm"
class PP extends Component {
	
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
						page(id: "44", idType: DATABASE_ID) {
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
								<Breadcrumb.Item active href=""className="">Privacy Policy</Breadcrumb.Item>
							</Breadcrumb>
							<h2 className="heading-banner">Privacy Policy</h2>
						</div>
					</Container>
				</section>
				<section className="Blog-Section-2">
					<Container>
						<div className="Blog-Section-2-data">
							<Row>
								<Col xl={8} lg={8} md={12} className="lg-mb-2">
								{(this.state.PageData) ? (<div dangerouslySetInnerHTML={{ __html: this.state.PageData.content}} ></div>) : ("")}
								</Col>
							</Row>
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

export default PP
