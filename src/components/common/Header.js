import React, { Component  } from 'react';
import {  Image,ListGroup,Navbar,Container } from 'react-bootstrap'
import { Link,StaticQuery, graphql } from 'gatsby'
import logo from '../../images/logo.png'
import navimage from '../../images/nav-image.png'
import icon1 from '../../images/icon1.png'
import cart from '../../images/cart.png'
import CityMenu from './CityMenu'
import SocialMenu from './SocialMenu'
import SportMenu from './SportMenu'
import PartnerMenu from './PartnerMenu'
import "../../components/style.css"
class Header extends Component {
    
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
            
    <header>
        <div className="social-header">
            <div className="container d-flex d-small-block justify-content-between">
                <div className="first-li align-items-center d-flex">
                    <ListGroup horizontal as="ul">
                        <SocialMenu />
                        <ListGroup.Item as="li" className="d-md-none d-flex">
                            <a href="tel:1300914368" className="nav-link p-0" to="/">
                                <i className="fa fa-phone"></i>
                            </a>
                        </ListGroup.Item>
                    </ListGroup>
                </div>
                <div className="second-li align-items-center d-sm-flex d-none">
                    <ListGroup horizontal as="ul" className="d-md-flex d-none">
                        <ListGroup.Item as="li">
                        <a className="nav-link p-0" href="tel:1300914368"><i className="fa fa-phone"/></a><a className="nav-link p-0" href="tel:1300914368"> CALL US: 1300 914 368</a>
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                            |
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                        <Link to="/Login">LOGIN</Link>
                        <span>OR</span>
                        <Link to="/Signup">REGISTER</Link>
                        </ListGroup.Item>
                    </ListGroup>

                    <ListGroup horizontal as="ul" className="d-md-none d-flex">
                        <ListGroup.Item as="li">
                        <Link to="/Login">LOGIN</Link>
                        <span>OR</span>
                        <Link to="/Signup">REGISTER</Link>
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </div>
        </div>
        <div className={this.state.isTop ? 'main-header' : 'main-header sticky'}>
            <Container>
            <Navbar expand="xl" className="bg-none">
                <Navbar.Brand>
                    <Link aria-current="page" className="navbar-brand" to="/">
                        <Image src={logo} className="img-fluid" alt="" width="120px"/>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="navbarSupportedContent" className="justify-content-end">
                <div className="justify-content-end" id="">
                        <ul className="navbar-nav ">
                            
							<StaticQuery
					query={graphql`
						query MyQuery {
							wordpressMenusMenusItems(slug: {eq: "gatsby-header-menu"}) {
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
						(prop,i) => {	
							return (
								<>
								{(prop.child_items ? (
									<div>
										<li className="nav-item dropdown uppercase"><Link className="nav-link dropdown-toggle" data-toggle="dropdown"
												to="/" aria-expanded="false">{prop.title}</Link>
											<ul className="dropdown-menu common-menu">
												{prop && prop.child_items && prop.child_items.map((child, i) => {
													return (<li  key={i} ><Link className="dropdown-item"   to={"/"+child.url.toLowerCase().replace("http://", '')}>{child.title}</Link></li> )
												})}
											</ul>
										</li>
									</div>
								
								) : 
								(
									<>
										{(prop.title == 'Camps' ? (
											<div>
												<li className="nav-item dropdown position-static"><a className="nav-link dropdown-toggle main-menu-toggle"
														href="" onClick={e => e.preventDefault()} id="navbarDropdown" role="button"
														data-toggle="dropdown">Camps</a>
													<ul className="dropdown-menu main-menu">
														<div className="w-100 d-flex main-box d-xl-block">
															<div className="first-box">
																<div className="inner-menu">
																	<div className="mb-3 menu-heading">
																		<Link to="/Sport" className="">ASC Sports</Link>
																	</div>
																	<ListGroup as="ul">
																		<SportMenu />
																	</ListGroup>
																</div>
																<div className="inner-menu">
																	<div className="mb-3 menu-heading">
																		<h3 className="font-16 font-semibold color-333 uppercase mb-3">&nbsp;</h3>
																	</div>
																	<ListGroup as="ul">
																		
																	</ListGroup>
																</div>
																<div className="inner-menu">
																	<div className="mb-3 menu-heading">
																		<Link to="/City" className="">Cities</Link>
																	</div>
																	<ListGroup as="ul">
																		<CityMenu />
																		
																	</ListGroup>
																</div>
																<div className="inner-menu">
																<div className="mb-3 menu-heading">
																	<Link to="/Partnerprograms" className="">Partner Programs</Link>
																</div>
																<ListGroup as="ul" className="no-br">
																	<PartnerMenu />
																</ListGroup>
															</div>
															</div>
															<div className="second-box">
																<Image src={navimage} fluid width="200" />
																<p className="font-16 font-regular">Want to save up to <span className="font-bold">$141.75?</span> Checkout<br></br> our <Link to="/membership">Membership Passes</Link></p>
															</div>
														</div>
													</ul>
												</li>
											</div>
										) : 
										(
											<>{(prop.title == 'Shop' ? (
												<div>
													<li className="nav-item">
														<Link className="nav-link" to={"/product"}>{prop.title}</Link>
													</li>
												</div>
											
											) : (
												<div>
													<li className="nav-item">
														<Link className="nav-link" to={"/"+prop.title.toLowerCase().replace(/\s+/g, '-')}>{prop.title}</Link>
													</li>
												</div>
											
											))}
											</>
											
											
											
										))}
									
									</>
									
								))}
								</>
							)
						})
				}
				</>
			)}
		  />
                            
							
							
                            
                            <div>
                                <li className="nav-item">
                                    <Link className="nav-link uppercase btn-sm btn-orange" to="/">book a camp</Link>
                                </li>
                            </div>

                            <div>
                                <li className="nav-item pr-0">
                                    <Link className="nav-link uppercase " to="/"><Image src={cart} className="img-fluid" alt="" width=""/></Link>
                                </li>
                            </div>
                        </ul>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </Container>
        </div>
        </header>
            </>
        );
    }
}

export default Header;