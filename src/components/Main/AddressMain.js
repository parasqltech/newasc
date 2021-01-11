import React, { Component  } from 'react';
import {Image,Col,Row} from 'react-bootstrap'
import { Link } from 'gatsby'
import border from '../../images/title-bottom-image.png'
class AddressMain extends Component {

    render() {      
        return (
            <>
            <div>
                <div className="d-flex d-small-block justify-content-between align-items-center">
                    <h2 className="font-20 font-bold color-3b mb-0 sm-mb-2">Billing Address</h2>
                    <Link onClick={e => e.preventDefault()} className="gray-small-button font-medium" id="add_new">Add New</Link>
                </div>
                <Image src={border} fluid />
                <h4 className="font-16 font-bold color-3b">John Smith</h4>
                <p className="font-16 font-medium color-70">Random Federation<br></br>115302, Moscow<br></br>ul. Varshavskaya, 15-2-178</p>
                <div>
                    <span className="d-block color-70 font-14 font-medium">Phone Number</span>
                    <p className="font-16 font-medium color-3b">38 972 588-42-36</p>
                </div>
                <div className="mb-30">
                    <span className="d-block color-70 font-14 font-medium">Email Address</span>
                    <p className="font-16 font-medium color-3b">johnsmith@example.com</p>
                </div>
                <div className="d-flex">
                    <Link to="" className="gray-border-button font-medium mr-1">Edit Address</Link>
                    <Link to="" className="transparent-button font-medium">Remove</Link>
                </div>
            </div>
            </>
        );
    }
}

export default AddressMain;