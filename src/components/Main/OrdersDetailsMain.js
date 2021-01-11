import React, { Component  } from 'react';
import {Image,Table,Row,Col} from 'react-bootstrap'
import { Link } from 'gatsby'
import border from '../../images/title-bottom-image.png'
import order1 from '../../images/cart-product-1.png'
class OrdersDetailsMain extends Component {

    render() {      
        return (
            <>
            <div>
                <div className="shadow mb-30">
                    <div className="pad-30">
                        <div className="d-flex d-small-block justify-content-between align-items-center">
                            <h2 className="font-20 font-bold color-3b mb-0 sm-mb-2">#148556</h2>
                            <Link onClick={e => e.preventDefault()}  id="back_order" className="gray-small-button font-medium">Back to list</Link>
                        </div>
                        <Image src={border} fluid />
                        <p className="font-16 color-3b font-medium">was placed on September 7, 2020 and is currently Completed.</p>
                    </div>
                    
                    <div className="first-order-details">
                        <div className="table-responsive-lg pb-3">
                            <Table className="table">
                                <thead>
                                    <tr>
                                        <th>&nbsp;</th>
                                        <th>Product</th>
                                        <th>Payment method:</th>
                                        <th className="text-t">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td valign="top" align="center" className="">
                                            <Image src={order1} fluid />
                                        </td>
                                        <td valign="middle" align="left">
                                            <a href="#">ACT Netball Camp, Acton</a>
                                            <p>Name: darsh bhavsar</p>
                                            <p>Date of Birth: 13/03/2010</p>
                                            <p>Gender: Boy</p>
                                        </td>
                                        <td valign="middle" align="left">
                                            <p className="main-price">Credit card</p>
                                        </td>
                                        <td valign="middle" align="left">
                                            <p className="total-price">$315.00</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td valign="top" align="center" className="">
                                            <Image src={order1} fluid />
                                        </td>
                                        <td valign="middle" align="left">
                                            <a href="#">ACT Netball Camp, Acton</a>
                                            <p>Name: darsh bhavsar</p>
                                            <p>Date of Birth: 13/03/2010</p>
                                            <p>Gender: Boy</p>
                                        </td>
                                        <td valign="middle" align="left">
                                            <p className="main-price">Credit card</p>
                                        </td>
                                        <td valign="middle" align="left">
                                            <p className="total-price">$315.00</p>
                                        </td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td align="left" colspan="3">Subtotal</td>
                                        <td align="left" colspan="2"><span>$630.00</span></td>
                                    </tr>
                                    <tr>
                                        <td align="left" colspan="3">Discount<span class="ml-2">($47.5 x 2)</span></td>
                                        <td align="left" colspan="2"><span>-$94.05</span></td>
                                    </tr>
                                    <tr>
                                        <td align="left" colspan="3" class="color-blue">Total</td>
                                        <td align="left" colspan="2"><span class="color-blue">$565.05</span></td>
                                    </tr>
                                </tfoot>
                            </Table>
                        </div>
                    </div>
                </div>
                
                
                <Row>
                    <Col xl={6} lg={6} md={12} className="lg-mb-4">
                        <div className="shadow">
                            <div className="pad-25">
                                <h2 className="font-20 font-bold color-3b mb-0 sm-mb-2">Billing Address</h2>
                                <Image src={border} fluid />
                                <h4 className="font-16 font-bold color-3b">John Smith</h4>
                                <p className="font-16 font-medium color-70">Random Federation<br></br>115302, Moscow<br></br>ul. Varshavskaya, 15-2-178</p>
                                <div>
                                    <span className="d-block color-70 font-14 font-medium">Phone Number</span>
                                    <p className="font-16 font-medium color-3b">38 972 588-42-36</p>
                                </div>
                                <div className="mb-0">
                                    <span className="d-block color-70 font-14 font-medium">Email Address</span>
                                    <p className="font-16 font-medium color-3b mb-0">johnsmith@example.com</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xl={6} lg={6} md={12}>
                        <div className="shadow">
                            <div className="pad-25">
                                <h2 className="font-20 font-bold color-3b mb-0 sm-mb-2">Shipping Address</h2>
                                <Image src={border} fluid />
                                <h4 className="font-16 font-bold color-3b">John Smith</h4>
                                <p className="font-16 font-medium color-70">Random Federation<br></br>115302, Moscow<br></br>ul. Varshavskaya, 15-2-178</p>
                                <div>
                                    <span className="d-block color-70 font-14 font-medium">Phone Number</span>
                                    <p className="font-16 font-medium color-3b">38 972 588-42-36</p>
                                </div>
                                <div className="mb-0">
                                    <span className="d-block color-70 font-14 font-medium">Email Address</span>
                                    <p className="font-16 font-medium color-3b mb-0">johnsmith@example.com</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            </>
        );
    }
}

export default OrdersDetailsMain;