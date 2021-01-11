import React, {Component} from 'react';
import Layout from "../components/layout"
import ResourceDetailsSection1 from "../components/ResourcesDetails/ResourceDetailsSection1"
import ResourceDetailsSection2 from "../components/ResourcesDetails/ResourceDetailsSection2"
import Footer from "../components/common/Footer"
import BottomForm from "../components/common/BottomForm"

class ResourcesDetails extends Component {
  render() {
      return (
          <Layout>
            <>
              <ResourceDetailsSection1/>
              <ResourceDetailsSection2/>
              <BottomForm/>
              <Footer/>
            </>
          </Layout>
      )
  }
}
export default ResourcesDetails
