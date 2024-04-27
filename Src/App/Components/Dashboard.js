import React from "react";
import {render} from "react-dom";

import DashboardSidebar from "./DashboardSidebar";

import {connect} from "react-redux";

import "../../Stylesheets/dashboardStyle.css";


import { BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";

class Dashboard extends React.Component{
	constructor(props){
		super(props);
		this.state={
		}
	}

   renderRedirect(){
      if(!sessionStorage.getItem("user")){
         return <Redirect to="/login"/>
      }
   }

	render(){
		return(
			<div>
				<div className="dashboard-front-main display-dc-flex ">
					<DashboardSidebar/>
					{this.props.dashboard_page_name}
				</div>
			</div>
		);
	}
}

const WrappedComponent = connect(({dashboardPageUpdateReducer}) => {
  return {
	dashboard_page_name: dashboardPageUpdateReducer.dashboard_page_name
  };
})(Dashboard);

export default WrappedComponent	;

