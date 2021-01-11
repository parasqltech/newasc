import React, {Component} from 'react';
import Layout from "../components/layout"
import MainSection1 from "../components/Main/Main-Section-1"
import Footer from "../components/common/Footer"
import BottomForm from "../components/common/BottomForm"

class Dashboard extends Component {
  render() {
      return (
          <Layout>
            <>
              <MainSection1/>
              <BottomForm/>
              <Footer/>
            </>
          </Layout>
      )
  }
}
export default Dashboard