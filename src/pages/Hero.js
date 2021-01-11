import React, {Component} from 'react';
import Layout from "../components/layout"
import HeroSection1 from "../components/Hero/HeroSection1"
import HeroSection2 from "../components/Hero/HeroSection2"
import Footer from "../components/common/Footer"
import BottomForm from "../components/common/BottomForm"

class Hero extends Component {
  render() {
      return (
          <Layout>
            <>
              <HeroSection1/>
              <HeroSection2/>
              <BottomForm/>
              <Footer/>
            </>
          </Layout>
      )
  }
}
export default Hero
