import React from "react";
import {render} from "react";

import {MainSidePage} from "./CommonComponents/MainPage";
import {SingleTable} from "./CommonComponents/SingleTable";

import {connect} from "react-redux";

import {
   fetchOrders
} from "../Actions/getMethodActions";

class TotalOrders extends React.Component{
	constructor(props){
		super(props);
		this.props.fetchOrders();
	}
	render(){
		return(
				<MainSidePage>
					<div className="table-div">
						<div className="table-div-in">
							<SingleTable tableData={this.props.orders_list_body}
							             tableHeading={this.props.orders_list_heading}
							             tableName={"Total Orders"}/>
						</div>
					</div>
				</MainSidePage>)
	}
}

const WrappedComponent = connect(({totalOrdersReducer}) => {
  return {
  	orders_list_heading: totalOrdersReducer.orders_list_heading,
  	orders_list_body: totalOrdersReducer.orders_list_body
  };
}, (dispatch) => {
	return {
    fetchOrders:() => dispatch(fetchOrders())
}})(TotalOrders);

export default WrappedComponent