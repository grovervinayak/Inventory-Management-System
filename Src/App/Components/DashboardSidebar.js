import React from "react";
import {render} from "react-dom";

import {connect} from "react-redux";

import TotalItems from "./TotalItems";
import TotalOrders from "./TotalOrders";
import TotalExpenses from "./TotalExpenses";
import DashboardPage from "./DashboardPage";
import OrderNewItem from "./OrderNewItem";

import {SingleDashboardIcon} from "./CommonComponents/SingleIcon";

import {
  dashboardPageUpdate
} from "../Actions/stateChangeActions";
 
import "../../Stylesheets/dashboardStyle.css";

class DashboardSidebar extends React.Component{
   constructor(props){
      super(props);
      this.state={
         icons_list:[{
            "icon_name":<i className="material-icons trans-dc-5-s" style={{fontSize:'28px'}}>dashboard</i>,
            "field_name":"Dashboard",
            "page_name":<DashboardPage/>,
            "active":"dashboard-sidebar-icon-active"
         },
         {
            "icon_name":<i className="fa fa-database trans-dc-5-s" style={{fontSize:'28px'}}></i>,
            "field_name":"Total Items",
            "page_name":<TotalItems/>,
            "active":""
         },
         {
            "icon_name":<i className="fa fa-money trans-dc-5-s" style={{fontSize:'28px'}}></i>,
            "field_name":"Total Expenses",
            "page_name":<TotalExpenses/>,
            "active":""
         },
         {
            "icon_name":<i className="material-icons trans-dc-5-s" style={{fontSize:'28px'}}>shopping_cart</i>,
            "field_name":"Total Orders",
            "page_name":<TotalOrders/>,
            "active":""
         },
         {
            "icon_name":<i className="fa fa-plus trans-dc-5-s" style={{fontSize:'30px'}}></i>,
            "field_name":"Order New Item",
            "page_name":<OrderNewItem/>,
            "active":""
         }]
      }
   }

   changeActiveIcon(field_name){
      var icons_list = [];
      this.state.icons_list.forEach((single_icon, index)=>{
         if(field_name === single_icon.field_name){
            single_icon.active = "dashboard-sidebar-icon-active";
         }
         else{
            single_icon.active = "";
         }
         icons_list.push(single_icon);
      });
      this.setState({
         icons_list: icons_list
      })
   }

   render(){
      return(
         <div>
            <div className="dashboard-sidebar">
               <div className="dashboard-sidebar-in">
                  <div className="dashboard-sidebar-all">
                  {this.state.icons_list.map((single_icon, index)=>
                     <SingleDashboardIcon icon_info={single_icon}
                                          dashboardPageUpdate={this.props.dashboardPageUpdate}
                                          changeActiveIcon={this.changeActiveIcon.bind(this)}/>
                  )}
                  </div>
               </div>
            </div>
         </div>
         )
   }
}

const WrappedComponent = connect(({sidebarUpdateReducer}) => {
  return {
  };
}, (dispatch) => {
   return {
   dashboardPageUpdate: (page_name,field_name) => dispatch(dashboardPageUpdate(page_name,field_name))
}})(DashboardSidebar);

export default WrappedComponent  ;
