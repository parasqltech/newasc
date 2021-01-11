/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Helmet from 'react-helmet'
import {withPrefix} from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./common/Header"
import '../components/all.scss'
import favicon from '../images/cart.png';
import $ from "jquery";

const TemplateWrapper = ({ children }) => (
  <div>
     <Helmet title="ASC" link={[{ rel: "shortcut icon", type: "image/png", href: `${favicon}` }]} />
    <Helmet>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        {/* slick */}
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />

      {/* jquery */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src={withPrefix("js/main.js")} ></script>
    </Helmet>
    <Header/>
      <div>{children}</div>
  </div>
)

export default TemplateWrapper
