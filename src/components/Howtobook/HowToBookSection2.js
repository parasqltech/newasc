import React, { Component  } from 'react';
import {Container} from 'react-bootstrap'
import { Link } from 'gatsby'

class HowToBookSection2 extends Component {
 
    render() {      
        return (
            <>
            <section className="How-to-book-Section-1">
                <Container>
                    <div className="How-to-book-Section-1-data text-left">
                        <div className="mb-30">
                            <h3 className="font-bold font-20 color-3b mb-3">It’s easy to book for an ASC Camp: use our online booking system to get started straight away!</h3>
                            <p className="font-medium font-16 color-3b">Fast, safe, and secure credit card payments can be made when booking on our website (via Stripe online payment gateway).</p>
                        </div>
                        <div className="mb-30">
                            <h3 className="font-bold font-20 color-3b mb-3">On the payment page you can choose to either:</h3>
                            <p className="font-medium font-16 color-3b">1. Checkout as a guest;</p>
                            <p className="font-medium font-16 color-3b">2. Have an account automatically created when you book your first camp, or;</p>
                            <p className="font-medium font-16 color-3b">3. Login to your existing account.</p>
                        </div>
                        <div className="mb-30">
                            <h3 className="font-bold font-20 color-3b mb-3">Why should I create an account? </h3>
                            <p className="font-medium font-16 color-3b">If you create an account, you’ll be able to set a password and login to the website at any time to view all your bookings, and download information about your upcoming camps.</p>
                            <p className="font-medium font-16 color-3b">How do I create a new account?</p>
                            <p className="font-medium font-16 color-3b">On the payment page when booking your first camp, select the “Create an account?” checkbox option, and enter a password to have an account automatically created for you.</p>
                            <p className="font-medium font-16 color-3b">If you checked out as a guest, you can Register a new account here. You’ll then need to contact us to have your existing bookings matched to your new account.</p>
                        </div>
                        <div className="mb-0">
                            <h3 className="font-bold font-20 color-3b mb-3">Further questions?</h3>
                            <p className="font-medium font-16 color-3b mb-0">f you have any further questions about booking with ASC, please contact us online now.</p>
                        </div>
                    </div>
                </Container>
            </section>
            </>
        );
    }
}

export default HowToBookSection2;