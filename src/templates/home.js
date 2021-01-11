import React, {Component} from 'react';
import Layout from "../components/layout"
import Footer from "../components/common/Footer"
import BottomForm from "../components/common/BottomForm"
import HomeSection1 from "../components/Home/HomeSection1"
import HomeSection2 from "../components/Home/HomeSection2"
import HomeSection3 from "../components/Home/HomeSection3"
import HomeSection4 from "../components/Home/HomeSection4"
import BatmanSection from "../components/common/BatmanSection"
import ModalSection from "../components/common/ModalSection"
import IncludedSection from "../components/common/IncludedSection"
import KidSection from "../components/common/KidSection"
import LazyLoad from 'react-lazyload';
import $ from "jquery";
class HomePage extends Component {
	
	
	
	render() {
		console.log(this.props.pageContext.HomeData.data.page);
		return (
			<Layout>
            <>
				<LazyLoad height={200} >
				{(this.props.pageContext.HomeData.data.page.home) ? (<HomeSection1 data = {this.props.pageContext.HomeData.data.page.home.homeSlider} />) : ("")}
				</LazyLoad>
				
				<LazyLoad height={200} >
				{(this.props.pageContext.HomeData.data.page.home) ? (<HomeSection2 data = {this.props.pageContext.HomeData.data.page.home.asSeenOn} />) : ("")}
				</LazyLoad>
				
				<LazyLoad height={200} >
				{(this.props.pageContext.HomeData.data.page.home) ? (<HomeSection3 data = {this.props.pageContext.HomeData.data.page.home.panels[2]} />) : ("")}
				</LazyLoad>
				
				<LazyLoad height={200} >
				{(this.props.pageContext.HomeData.data.page.home) ? (<BatmanSection data = {this.props.pageContext.HomeData.data.page.home.schoolHolidayProgram} />) : ("")}
				</LazyLoad>
				
				<LazyLoad height={200} >
				{(this.props.pageContext.HomeData.data.page.home) ? (<HomeSection4 data = {this.props.pageContext.HomeData.data.page.home.panels[3]} />) : ("")}
				</LazyLoad>
				
				<LazyLoad height={200} >
		
				{(this.props.pageContext.HomeData.data.page.home) ? (<ModalSection data = {this.props.pageContext.HomeData.data.page.home.howDoesItWork} />) : ("")}
				</LazyLoad>
				
				<LazyLoad height={200} >
				{(this.props.pageContext.HomeData.data.page.home) ? (<IncludedSection data = {this.props.pageContext.HomeData.data.page.home.panels[6]} />) : ("")}
				</LazyLoad>
				
				<LazyLoad height={200} >
				
				{(this.props.pageContext.HomeData.data.page.home) ? (<KidSection data = {this.props.pageContext.HomeData.data.page.home.bottomKidsReview} />) : ("")}
				</LazyLoad>
				
				<LazyLoad height={200} >
				<BottomForm/>
				</LazyLoad>
				
				<LazyLoad height={200} >
				<Footer/>
				</LazyLoad>
			</>
			</Layout>
		)
	}
}
export default HomePage