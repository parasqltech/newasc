import React, {Component} from 'react';
import Layout from "../components/layout"
import NoCampSection1 from "../components/NoCamp/NoCampSection1"
import NoCampSection2 from "../components/NoCamp/NoCampSection2"
import NoCampSection3 from "../components/NoCamp/NoCampSection3"
import Footer from "../components/common/Footer"
import BottomForm from "../components/common/BottomForm"

class NoCamp extends Component {
  render() {
      return (
          <Layout>
            <>
              <NoCampSection1/>
              <NoCampSection2/>
              <NoCampSection3/>
              <BottomForm/>
              <Footer/>
            </>
          </Layout>
      )
  }
}
export default NoCamp