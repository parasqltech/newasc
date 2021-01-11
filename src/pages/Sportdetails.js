import React, {Component} from 'react';
import Layout from "../components/layout"
import SportDetailsSection1 from "../components/SportDetails/SportDetailsSection1"
import SportDetailsSection2 from "../components/SportDetails/SportDetailsSection2"
import SportDetailsSection3 from "../components/SportDetails/SportDetailsSection3"
import Footer from "../components/common/Footer"
import BottomForm from "../components/common/BottomForm"

class SportDetails extends Component {
  render() {
      return (
          <Layout>
            <>
              <SportDetailsSection1/>
              <SportDetailsSection2/>
              <SportDetailsSection3/>
              <BottomForm/>
              <Footer/>
            </>
          </Layout>
      )
  }
}
export default SportDetails