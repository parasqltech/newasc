import React, {Component} from 'react';
import Layout from "../components/layout"
import SportSection1 from "../components/Sport/SportSection1"
import SportSection2 from "../components/Sport/SportSection2"
import SportSection3 from "../components/Sport/SportSection3"
import SportSection4 from "../components/Sport/SportSection4"
import Footer from "../components/common/Footer"
import BottomForm from "../components/common/BottomForm"

class Sport extends Component {
  render() {
      return (
          <Layout>
            <>
              <SportSection1/>
              <SportSection2/>
              <SportSection3/>
              <SportSection4/>
              <BottomForm/>
              <Footer/>
            </>
          </Layout>
      )
  }
}
export default Sport