import React, {Component} from 'react';
import Layout from "../components/layout"
import Footer from "../components/common/Footer"
import BottomForm from "../components/common/BottomForm"
import { Container,Row,Col,Form } from 'react-bootstrap';
import { Link } from 'gatsby'

class Login extends Component {
  render() {
      return (
          <Layout>
            <>
                <section className="Login-section">
                    <Container>
                        <Row className="justify-content-center">
                            <Col xl={8} lg={9} md={10} sm={12}>
                                <div className="gray-data">
                                    <div className="title">
                                        <h2 className="mb-2">Returning customer</h2>
                                    </div>
                                    <Form>
                                        <Form.Group controlId="" className="mb-30">
                                            <Form.Label className="master-label">Username or email address *</Form.Label>
                                            <Form.Control className="mb-1 master" id="" placeholder="Enter your Username or email address" />
                                        </Form.Group>
                                        <Form.Group controlId="" className="mb-20">
                                            <Form.Label className="master-label">Password</Form.Label>
                                            <Form.Control className="mb-1 master" id="" placeholder="Password" />
                                        </Form.Group>
                                        <div className="d-flex justify-content-between d-small-block">
                                            <Form.Group controlId="" className="mb-3 sm-mb-1">
                                                {['checkbox'].map((type) => (
                                                    <div key={`custom-${type}`} className="mb-0">
                                                        <Form.Check className="gray-check" custom type={type} id={`custom-${type}-1`} inline
                                                            label={`Remember me`}
                                                        />
                                                    </div>
                                                ))}
                                            </Form.Group>
                                            <Link to="" className="nav-link p-0 font-16 font-medium color-3b mb-3">Lost your password?</Link>
                                        </div>
                                        <div className="mb-30">
                                            {/* <Button className="btn btn-orange-large d-block w-100" type="submit">Login</Button> */}
                                            <Link className="btn btn-orange-large d-block w-100" to="/Dashboard">Login</Link>
                                        </div>
                                        <div className="text-center">
                                            <span className="d-flex d-small-block text-center justify-content-center font-18 color-70 font-medium">
                                                Don't Have an Account? <Link to="/Signup" className="nav-link p-0 ml-2 color-3b font-medium">New Customer</Link> 
                                            </span>
                                        </div>
                                    </Form>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                {/*  */}

                <BottomForm/>
                <Footer/>
            </>
          </Layout>
      )
  }
}
export default Login
