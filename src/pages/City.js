import React, {Component} from 'react';
import Layout from "../components/layout"
import CitySection1 from "../components/City/CitySection1"
import CitySection2 from "../components/City/CitySection2"
import CitySection3 from "../components/City/CitySection3"
import BatmanSection from "../components/common/BatmanSection"
import CitySection4 from "../components/City/CitySection4"
import ModalSection from "../components/common/ModalSection"
import IncludedSection from "../components/common/IncludedSection"
import KidSection from "../components/common/KidSection"
import Footer from "../components/common/Footer"
import BottomForm from "../components/common/BottomForm"

class City extends Component {
  render() {
      return (
          <Layout>
            <>
              <CitySection1/>
              <CitySection2/>
              <CitySection3/>
              
              <CitySection4/>
             
              
              <BottomForm/>
              <Footer/>
            </>
          </Layout>
      )
  }
}
export default City