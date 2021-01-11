import React, { Component  } from 'react';
import {Container,Row,Col,Tab,Nav,Image} from 'react-bootstrap'
import { Link } from 'gatsby'
import Dashboard from "../../components/Main/DashboardMain"
import Orders from "../../components/Main/OrdersMain"
import Ordersdetails from "../../components/Main/OrdersDetailsMain"
import MembershipMain from "../../components/Main/MembershipMain"
import AppoinmentMain from "../../components/Main/AppoinmentMain"
import CouponMain from "../../components/Main/CouponMain"
import AddressMain from "../../components/Main/AddressMain"
import AccountMain from "../../components/Main/AccountMain"
import PasswordMain from "../../components/Main/PasswordMain"
import NewAddressMain from "../../components/Main/NewAddressMain"
import icon1 from '../../images/Dashboard.svg'
import icon2 from '../../images/Orders.svg'
import icon3 from '../../images/Membership.svg'
import icon4 from '../../images/Appointments.svg'
import icon5 from '../../images/Coupons.svg'
import icon6 from '../../images/Addresses.svg'
import icon7 from '../../images/Account-details.svg'
import icon8 from '../../images/Password.svg'
import icon9 from '../../images/Logout.svg'

class MainSection1 extends Component {

    render() {      
        return (
            <>
            <section className="Main-Section-1">
                <Container>
                    <div className="Main-Section-1-data">
                        <Tab.Container id="left-tabs-example" defaultActiveKey="Dashboard">
                            <Row>
                                <Col xl={3} lg={3} md={12} className="lg-mb-4">
                                    <div className="pos-relative">
                                        <div className="sidebar side-sticky small">
                                            <Nav variant="pills" className="">
                                                <Nav.Item>
                                                    <Nav.Link eventKey="Dashboard" className="font-medium">
                                                        <div className="sidebar-icon">
                                                            <Image src={icon1} fluid/>
                                                        </div>
                                                        Dashboard
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="Orders" className="font-medium">
                                                        <div className="sidebar-icon">
                                                            <Image src={icon2} fluid/>
                                                        </div>
                                                        Orders
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="Membership" className="font-medium">
                                                        <div className="sidebar-icon">
                                                            <Image src={icon3} fluid/>
                                                        </div>
                                                        Membership
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="Appointments" className="font-medium">
                                                        <div className="sidebar-icon">
                                                            <Image src={icon4} fluid/>
                                                        </div>
                                                        Appointments
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="Coupons" className="font-medium">
                                                        <div className="sidebar-icon">
                                                            <Image src={icon5} fluid/>
                                                        </div>
                                                        Coupons
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="Addresses" className="font-medium">
                                                        <div className="sidebar-icon">
                                                            <Image src={icon6} fluid/>
                                                        </div>
                                                        Addresses
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="Account" className="font-medium">
                                                        <div className="sidebar-icon">
                                                            <Image src={icon7} fluid/>
                                                        </div>
                                                        Account details
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="Password" className="font-medium">
                                                        <div className="sidebar-icon">
                                                            <Image src={icon8} fluid/>
                                                        </div>
                                                        Password
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="Logout" className="font-medium">
                                                        <div className="sidebar-icon">
                                                            <Image src={icon9} fluid/>
                                                        </div>
                                                        Logout
                                                    </Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={12} className="d-lg-none d-block mb-3 text-right">
                                    <Link onClick={e => e.preventDefault()} className="gray-small-button font-medium" id="toggle_sidebar">Sidebar</Link>
                                 </Col>
                                <Col xl={9} lg={9} md={12}>
                                    <div className="">
                                        <Tab.Content className="text-left">
                                            <Tab.Pane eventKey="Dashboard">
                                                <div className="shadow">
                                                    <div className="pad-30">
                                                        <Dashboard/>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="Orders">
                                                <div className="main-order">
                                                    <div className="shadow">
                                                        <div className="pad-30">
                                                            <Orders/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="order-details d-none">
                                                    <Ordersdetails/>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="Membership">
                                                <div className="shadow">
                                                    <div className="pad-30">
                                                        <MembershipMain/>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="Appointments">
                                                <div className="shadow">
                                                    <div className="pad-30">
                                                        <AppoinmentMain/>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="Coupons">
                                                <div className="shadow">
                                                    <div className="pad-30">
                                                        <CouponMain/>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="Addresses">
                                                <div className="main-address">
                                                    <div className="shadow">
                                                        <div className="pad-30">
                                                            <AddressMain/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="New-address d-none">
                                                    <div className="shadow">
                                                        <div className="pad-30">
                                                            <NewAddressMain/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="Account">
                                                <div className="shadow">
                                                    <div className="pad-30">
                                                        <AccountMain/>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="Password">
                                                <div className="shadow">
                                                    <div className="pad-30">
                                                        <PasswordMain/>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="Logout">
                                                <div className="shadow">
                                                    <div className="pad-30">
                                                        Logout
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </div>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </div>
                </Container>
            </section>
            </>
        );
    }
}

export default MainSection1;