import React, { Component  } from 'react';
import {  Image,ListGroup } from 'react-bootstrap'
import { Link,StaticQuery, graphql } from 'gatsby'
import icon1 from '../../images/icon1.png'
class SocialMenu extends Component {
    
    
    render() {

        return (
            <>
            
			<StaticQuery
					query={graphql`
						query MyQuerySocial {
							allWordpressWpCpt152830(sort: {order: ASC, fields: id}) {
								edges {
									node {
									id
										acf {
											icon
											name
											social_link
										}
									}
								}
							}
						}
					`}
			render={data => (
				<>
				{
					data &&
					data.allWordpressWpCpt152830 &&
					data.allWordpressWpCpt152830.edges &&
					data.allWordpressWpCpt152830.edges.map(
						(prop,i) => {	
							return (
								<ListGroup.Item as="li">
									<Link className="nav-link p-0" to={prop.node.acf.social_link}>
										<i className={"fa "+prop.node.acf.icon} ></i>
									</Link>
								</ListGroup.Item>
							)
						})
				}
				</>
			)}
		  />
            </>
        );
    }
}

export default SocialMenu;