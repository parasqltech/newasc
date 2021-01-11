import React, {Component} from 'react';
import Layout from "../components/layout"
import ResourceSection1 from "../components/Resources/ResourceSection1"
import ResourceSection2 from "../components/Resources/ResourceSection2"
import Footer from "../components/common/Footer"
import BottomForm from "../components/common/BottomForm"

class Resources extends Component {
  render() {
      return (
          <Layout>
            <>
              <ResourceSection1/>
              <ResourceSection2/>
              <BottomForm/>
              <Footer/>
            </>
          </Layout>
      )
  }
}
export default Resources
