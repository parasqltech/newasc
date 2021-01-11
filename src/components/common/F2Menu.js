import React, { Component  } from 'react';
import {  Image,ListGroup } from 'react-bootstrap'
import { Link,StaticQuery, graphql } from 'gatsby'
import icon1 from '../../images/icon1.png'
class F2Menu extends Component {
    
    state = {
        isTop: true,
      };
    
      componentDidMount() {
        document.addEventListener('scroll', () => {
          const isTop = window.scrollY < 200;
          if (isTop !== this.state.isTop) {
              this.setState({ isTop })
          }
        });
      } 
    render() {

        return (
            <>
            
			<StaticQuery
					query={graphql`
						query MyQuery7 {
							wordpressMenusMenusItems(slug: {eq: "gatsby-footer-menu-2"}) {
								id
								items {
									title
									child_items {
										title
										url
									}
									url
								}
							}
						}
					`}
			render={data => (
				<>
				{
					data &&
					data.wordpressMenusMenusItems &&
					data.wordpressMenusMenusItems.items &&
					data.wordpressMenusMenusItems.items.map(
						(innerprop,i) => {	
							return (
								<>
									<ListGroup.Item as="li">
										<Image src={icon1} fluid className="icon" /><Link to={"/"+innerprop.title.toLowerCase().replace(/\s+/g, '')} className="" dangerouslySetInnerHTML={{ __html: innerprop.title}} />
									</ListGroup.Item>	
								</>
								)}
							)	
								
				}
				</>
			)}
		  />
            </>
        );
    }
}

export default F2Menu;