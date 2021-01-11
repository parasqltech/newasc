import React, {Component} from 'react';
import Layout from "../components/layout"
import CityDetailsSection1 from "../components/CityDetails/CityDetailsSection1"
import CityDetailsSection2 from "../components/CityDetails/CityDetailsSection2"
import CityDetailsSection3 from "../components/CityDetails/CityDetailsSection3"
import BatmanSection from "../components/common/BatmanSection"
import CityDetailsSection4 from "../components/CityDetails/CityDetailsSection4"
import ModalSection from "../components/common/ModalSection"
import IncludedSection from "../components/common/IncludedSection"
import KidSection from "../components/common/KidSection"
import CityDetailsSection5 from "../components/CityDetails/CityDetailsSection5"
import Footer from "../components/common/Footer"
import BottomForm from "../components/common/BottomForm"

class CityDetails extends Component {
  render() {
      return (
          <Layout>
            <>
              <CityDetailsSection1/>
              <BottomForm/>
              <CityDetailsSection2/>
              <CityDetailsSection3/>
              
              <CityDetailsSection4/>
              
              <CityDetailsSection5/>
              <BottomForm/>
              <Footer/>
            </>
          </Layout>
      )
  }
}
export default CityDetails