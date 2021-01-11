import React, {Component} from 'react';
import Layout from "../components/layout"
import FeedbackSection1 from "../components/Feedback/FeedbackSection1"
import FeedbackSection2 from "../components/Feedback/FeedbackSection2"
import Footer from "../components/common/Footer"
import BottomForm from "../components/common/BottomForm"

class Hero extends Component {
  render() {
      return (
          <Layout>
            <>
              <FeedbackSection1/>
              <FeedbackSection2/>
              <BottomForm/>
              <Footer/>
            </>
          </Layout>
      )
  }
}
export default Hero
