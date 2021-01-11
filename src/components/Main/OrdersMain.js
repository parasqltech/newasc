import React, { Component  } from 'react';
import {Image,Table,Pagination} from 'react-bootstrap'
import { Link } from 'gatsby'
import border from '../../images/title-bottom-image.png'
class Orders extends Component {

    render() {      
        return (
            <>
            <div>
                <h2 className="font-20 font-bold color-3b mb-0">Recent Orders</h2>
                <Image src={border} fluid className="mb-20" />
                <div className="thead-back-table">
                    <div className="table-responsive-lg">
                        <Table className="table mb-0">
                            <thead>
                                <tr>
                                    <th className="uppercase text-center">NUMBER</th>
                                    <th className="uppercase text-center">DATE</th>
                                    <th className="uppercase text-center">STATUS</th>
                                    <th className="uppercase text-center">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td valign="middle" align="center">
                                        <span id="order_details" className="">#148556</span>
                                    </td>
                                    <td valign="middle" align="center">
                                        <p className="">Oct 19, 2020</p>
                                    </td>
                                    <td valign="middle" align="center">
                                        <p className="">Completed</p>
                                    </td>
                                    <td valign="middle" align="center">
                                        <p className="">$315.00 for 1 item</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td valign="middle" align="center">
                                        <span id="order_details" className="">#148556</span>
                                    </td>
                                    <td valign="middle" align="center">
                                        <p className="">Oct 19, 2020</p>
                                    </td>
                                    <td valign="middle" align="center">
                                        <p className="">Completed</p>
                                    </td>
                                    <td valign="middle" align="center">
                                        <p className="">$315.00 for 1 item</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td valign="middle" align="center">
                                        <span id="order_details" className="">#148556</span>
                                    </td>
                                    <td valign="middle" align="center">
                                        <p className="">Oct 19, 2020</p>
                                    </td>
                                    <td valign="middle" align="center">
                                        <p className="">Completed</p>
                                    </td>
                                    <td valign="middle" align="center">
                                        <p className="">$315.00 for 1 item</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td valign="middle" align="center">
                                        <span id="order_details" className="">#148556</span>
                                    </td>
                                    <td valign="middle" align="center">
                                        <p className="">Oct 19, 2020</p>
                                    </td>
                                    <td valign="middle" align="center">
                                        <p className="">Completed</p>
                                    </td>
                                    <td valign="middle" align="center">
                                        <p className="">$315.00 for 1 item</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td valign="middle" align="center">
                                        <span id="order_details" className="">#148556</span>
                                    </td>
                                    <td valign="middle" align="center">
                                        <p className="">Oct 19, 2020</p>
                                    </td>
                                    <td valign="middle" align="center">
                                        <p className="">Completed</p>
                                    </td>
                                    <td valign="middle" align="center">
                                        <p className="">$315.00 for 1 item</p>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    
                    <div className="justify-content-center d-flex table-pagination">
                        <Pagination className="justify-content-center">
                            <Pagination.Prev className="prev" />
                            <Pagination.Item  active>{1}</Pagination.Item>
                            <Pagination.Item >{2}</Pagination.Item>
                            <Pagination.Next className="next"/>
                        </Pagination>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default Orders;