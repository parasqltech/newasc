import React from "react"
import axios from "axios"
import {Container,Image, Row,Col,Card} from 'react-bootstrap'
import { Link, StaticQuery, graphql } from 'gatsby'

class Citybooking extends React.Component{
	constructor(props) {
		super(props);
	}
	state = {
            pagedata: [],
    };
	componentDidMount() {
		var products = this.props.products;
		var url = "https://ascstaging.temp312.kinsta.cloud/wp-json/newasc/v1/products";
		axios.post(url,{ Prod: products}).then(e => this.setState({pagedata: e.data.ResponseData}))
    }

	render (){
		return(
			<>
			{(this.state.pagedata != "") ? (
				<>
					{this.state.pagedata.map((prop,i) => {return (
						<Col xl={4} lg={4} md={6} sm={9} xs={12} className="main-book-card">
							<Card className="book-card">
								<div className="card-img">
									<Image variant="top" src={prop.Image} fluid alt="card"/>
									<div className="tag blue">
										New
									</div>
								</div>
								<Card.Body>
									<Card.Title as="h5">
										{prop.Name}
									</Card.Title>
									<Card.Text>
										{prop.Camp_Date}
									</Card.Text>
									<Card.Text>
										{prop.Camp_Venue}
									</Card.Text>
									<ul>
										<li className="main-price">${prop.price}</li>
									</ul>
									<Link className="nav-link uppercase btn-sm btn-orange text-center" to="/">More info / Book Now</Link>
								</Card.Body>
							</Card>
						</Col>
					)})}
				</>
			) : ("")}	
			</>
		)
	}	

}

export default Citybooking