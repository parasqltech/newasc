import React, { Component  } from 'react';
import {Image} from 'react-bootstrap'
import { Link } from 'gatsby'
import border from '../../images/title-bottom-image.png'
class Dashboard extends Component {

    render() {      
        return (
            <>
            <div>
                <h2 className="font-20 font-bold color-3b mb-0">Dashboard</h2>
                <Image src={border} fluid />
                <div className="bottom-data pt-2">
                    <h3 className="font-18 font-medium color-3b">Hello, <span className="font-bold">Jhon Smith</span> (If Not <span className="font-bold">Smith</span> !Logout)</h3>
                    <p className="font-16 font-medium color-3b">From your account dashboard. you can easily check & view your recent orders, manage your shipping and billing addresses and edit your password and account details.</p>
                </div>
            </div>
            </>
        );
    }
}

export default Dashboard;