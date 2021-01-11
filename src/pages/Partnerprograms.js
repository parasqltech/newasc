import React, {Component} from 'react';
import Layout from "../components/layout"
import PartnerSection1 from "../components/PartnerProgram/PartnerSection1"
import PartnerSection2 from "../components/PartnerProgram/PartnerSection2"
import PartnerSection3 from "../components/PartnerProgram/PartnerSection3"
import PartnerSection4 from "../components/PartnerProgram/PartnerSection4"
import Footer from "../components/common/Footer"
import BottomForm from "../components/common/BottomForm"

class PartnerPrograms extends Component {
  render() {
      return (
          <Layout>
            <>
              <PartnerSection1/>
              <PartnerSection2/>
              <PartnerSection3/>
              <PartnerSection4/>
              <BottomForm/>
              <Footer/>
            </>
          </Layout>
      )
  }
}
export default PartnerPrograms
