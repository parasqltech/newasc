import React, { Component  } from 'react';
import {Image} from 'react-bootstrap'
import { Link } from 'gatsby'
import border from '../../images/title-bottom-image.png'
class CouponMain extends Component {

    render() {      
        return (
            <>
            <div>
                 <h3 className="font-18 font-medium color-3b mb-0">Sorry, No coupons available for you.</h3>
            </div>
            </>
        );
    }
}

export default CouponMain;