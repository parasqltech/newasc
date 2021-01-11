import React, { Component } from 'react';
import Layout from "../components/layout"
import PropTypes from 'prop-types';
import isEmpty from 'lodash.isempty';
import {Container,Breadcrumb,Row,Col,Card,ListGroup} from 'react-bootstrap'
import scrollTo from 'gatsby-plugin-smoothscroll';
import { Link } from 'gatsby'
import queryString from 'query-string'
import GoogleMap from '../components/Map/GoogleMap';
import styled from 'styled-components';
import { keyframes } from 'styled-components'
import styles from '../components/Map/map.module.css'; 
import $ from "jquery";

// InfoWindow component
const InfoWindow = (props) => {
  const { place } = props;
  const infoWindowStyle = {
    position: 'relative',
    bottom: 150,
    left: '-45px',
    width: 220,
    backgroundColor: 'white',
    boxShadow: '0 2px 7px 1px rgba(0, 0, 0, 0.3)',
    padding: 10,
    fontSize: 14,
    zIndex: 100,
  };
  
 

  
 

  return (
    <div style={infoWindowStyle}>
      <div style={{ fontSize: 16 }}>
        {place.Name}
      </div>
      <div style={{ fontSize: 14, color: 'grey' }}>
        {place.Camp_Venue}
      </div>
	  <div style={{ fontSize: 14, color: 'grey' }}>
        {place.Camp_Date}
      </div>
      <div style={{ fontSize: 14, color: 'grey' }}>
        {'$'+place.price}
      </div>
    </div>
  );
};

// Marker component
const Marker = ({ show, place }) => {
  const markerStyle = {
    border: '1px solid white',
    borderRadius: '50% 50% 50% 0',
    height: 30,
    width: 30,
    backgroundColor: show ? 'red' : '#89849b',
    cursor: 'pointer',
    zIndex: 10,
	transform: 'rotate(-45deg)'
  };
  
  return (
    <>
      <div style={markerStyle} />
      {show && <InfoWindow place={place} />}
    </>
  );
};

class MarkerInfoWindow extends Component {
	constructor(props) {
		super(props);

		this.state = {
			places: [],
			center : [-29.0336, 132.2367],
			zoom : 5
		};
	}
	
	

  componentDidMount() {
	
	const values = queryString.parse(this.props.location.search);
	console.log(values);
	
	
	
	if(!$.isEmptyObject(values)){
		//console.log(values.filter);
		var prod = 'PRODUCT144611';
		//this.refs.prod.props.onClick();
	}
  
    fetch('https://staging-ascstaging.kinsta.cloud/wp-json/newasc/v1/all-products')
      .then((response) => response.json())
      .then((data) => {
        console.log(data.ResponseData);
        this.setState({ places: data.ResponseData });
      });
	  console.log(this.state.places);
	  //this.refs.foo.props.onChange()
  }

	onChildClickCallback = (key) => {
	
		this.setState((state) => {
			console.log(state.places);
		  const index = state.places.findIndex((e) => e.ID === key);
		  console.log(key);
		  console.log(index);
		  state.places[index].show = !state.places[index].show;
		  return { places: state.places };
		});
		
		return false;
		var places = this.state.places;
		places.forEach((result,i) => {
			if(result.ID !== key){
				result.show = false; // eslint-disable-line no-param-reassign
			}
			if(result.ID === key){
				
				this.setState({ center: [result.lat,result.lng] });
				this.setState({ zoom: 15 });
			}
        });
		this.setState({ places: places });
	};
	
	
  
	handleToggle = (id) => {
		this.setState((state) => {
			
			const index = state.places.findIndex((e) => e.ID === id);
			state.places[index].show = !state.places[index].show;
			return { places: state.places };
		});
		var places = this.state.places;
		places.forEach((result,i) => {
			if(result.ID !== id){
				result.show = false; // eslint-disable-line no-param-reassign
			}
			if(result.ID == id){
				this.setState({ center: [result.lat,result.lng] });
				this.setState({ zoom: 15 });
			}
        });
		this.setState({ places: places });
	}

  render() {
    const { places } = this.state;
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
					<Breadcrumb.Item active href=""className="">CAMPS & PROGRAMS</Breadcrumb.Item>
				</Breadcrumb>
				<h2 className="heading-banner">CAMPS & PROGRAMS</h2>
				</div>
			</Container>
		</section>
		<section className="Camp-section-2">
			<Container>	
			<div className="title">
				<h2 className="text-center">SELECT A SPORT TO VIEW AND BOOK CAMPS…</h2>
			</div>
			<Row>
				<Col xl={4} lg={4} md={12} className="col-p-0 lg-mb-4">
					<div className="camp-listing">
						<ul>
							{places.map((place,i) => (
								<>
								{(place.lat != "") ? (
									<li ref={place.ID} key={i} id={place.ID} onClick={() => {this.handleToggle(place.ID)}}>
										<Card className="book-card p-0">
											<Card.Body className="p-0">
												<Card.Title as="h5">{place.Name}</Card.Title>
												<Card.Text>{place.Camp_Date}</Card.Text>
												<Card.Text className="mb-1">{place.Camp_Venue}</Card.Text>
												<Link className="nav-link p-0 main-price font-bold" to="/">
												${place.price}
												</Link>
												<div className="tag">
												Flash offer<br></br>Ends Tomorrow!
												</div>
											</Card.Body>
										</Card>
									</li>
								) : ("")}
								</>
								
							))}
						</ul>
					</div>
				</Col>
				<Col xl={8} lg={8} md={12} className="col-p-0" id="maps">
					<div className="camp-map-details">
						{!isEmpty(places) && (
							<GoogleMap
								defaultZoom={this.state.zoom}
								defaultCenter={this.state.center}
								bootstrapURLKeys={{ key: "AIzaSyApNyj8bJWxooyHNiPfCQXZTH9um0rGiW0" }}
								onChildClick={this.onChildClickCallback}
							>
								{places.map((place,i) => (
									
									(place.lat != "") ? (
										
										<Marker 
											key={place.ID}
											lat={place.lat}
											lng={place.lng}
											show={place.show}
											place={place}
										/>
										
									) : ("")
									
								))}
							</GoogleMap>
						)}
					</div>
				</Col>
			</Row>
			</Container>
		</section>
		<section className="Sport-section-4">
			<Container>
				<div className="title-main mb-0">
					<h2>ABOUT AUSTRALIAN SPORTS CAMPS</h2>
				</div>
				
				<p className="font-15 font-medium color-3b">
					ASC has been running holiday sports camps for kids aged 6-16 for over 35 years. We offer structured skill-improvement camps in Australia, ensuring that participants have fun in the school holidays, whilst developing a deeper love and enthusiasm for their chosen sport.
				</p>
				<p className="font-15 font-medium color-3b mb-0">
					We have school holiday programs, for a wide variety of sports camps in Australia throughout the Summer, Autumn, Winter and  Spring school holiday breaks. Our kid's camps are suited to players of all abilities and we ensure everyone has fun in their school holiday activities. Also, ASC ensures your children receive quality coaching at top sporting facilities, plus have the chance to meet and be inspired by elite sports people, past and present.
				</p>
				</Container>
		</section>
        
      </>
	  </Layout>
    );
  }
}

InfoWindow.propTypes = {
  place: PropTypes.shape({
    name: PropTypes.string,
    formatted_address: PropTypes.string,
    rating: PropTypes.number,
    types: PropTypes.arrayOf(PropTypes.string),
    price_level: PropTypes.number,
    opening_hours: PropTypes.shape({
      open_now: PropTypes.bool,
    }),
  }).isRequired,
};

Marker.propTypes = {
  show: PropTypes.bool.isRequired,
  place: PropTypes.shape({
    name: PropTypes.string,
    formatted_address: PropTypes.string,
    rating: PropTypes.number,
    types: PropTypes.arrayOf(PropTypes.string),
    price_level: PropTypes.number,
    opening_hours: PropTypes.shape({
      open_now: PropTypes.bool,
    }),
  }).isRequired,
};

export default MarkerInfoWindow;