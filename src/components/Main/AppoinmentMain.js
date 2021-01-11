import React, { Component  } from 'react';
import {Image} from 'react-bootstrap'
import { Link } from 'gatsby'
import border from '../../images/title-bottom-image.png'
class AppoinmentMain extends Component {

    render() {      
        return (
            <>
            <div>
                 <h3 className="font-18 font-medium color-3b mb-20">No appointments scheduled yet.</h3>
                 
                <Link className="btn btn-orange mb-0" to="/">
                    Save
                </Link>
            </div>
            </>
        );
    }
}

export default AppoinmentMain;