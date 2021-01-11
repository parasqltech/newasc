import React, {Component} from 'react';
import Layout from "../components/layout"
import PartnerDetailsSection1 from "../components/PartnerProgramDetails/PartnerDetailsSection1"
import PartnerDetailsSection2 from "../components/PartnerProgramDetails/PartnerDetailsSection2"
import PartnerDetailsSection3 from "../components/PartnerProgramDetails/PartnerDetailsSection3"
import Footer from "../components/common/Footer"
import BottomForm from "../components/common/BottomForm"

class PartnerPrograms extends Component {
  render() {
      return (
          <Layout>
            <>
              <PartnerDetailsSection1/>
              <PartnerDetailsSection2/>
              <PartnerDetailsSection3/>
              <BottomForm/>
              <Footer/>
            </>
          </Layout>
      )
  }
}
export default PartnerPrograms
