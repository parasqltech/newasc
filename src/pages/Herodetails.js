import React, {Component} from 'react';
import Layout from "../components/layout"
import HeroDetailsSection1 from "../components/Hero/HeroDetailsSection1"
import HeroDetailsSection2 from "../components/Hero/HeroDetailsSection2"
import Footer from "../components/common/Footer"
import BottomForm from "../components/common/BottomForm"

class Hero extends Component {
  render() {
      return (
          <Layout>
            <>
              <HeroDetailsSection1/>
              <HeroDetailsSection2/>
              <BottomForm/>
              <Footer/>
            </>
          </Layout>
      )
  }
}
export default Hero
