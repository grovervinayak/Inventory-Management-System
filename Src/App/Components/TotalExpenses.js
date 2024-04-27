import React from "react";
import {render} from "react";

import {MainSidePage} from "./CommonComponents/MainPage";
import {SingleTable} from "./CommonComponents/SingleTable";

import {connect} from "react-redux";

import {
   fetchExpenses
} from "../Actions/getMethodActions";

import {
	addExpensePage
} from "../Actions/stateChangeActions";

import AddExpense from "./AddExpense";

class TotalExpenses extends React.Component{
	constructor(props){
		super(props);
		this.props.fetchExpenses();
	}
	render(){
		return(
				<MainSidePage>
					<AddExpense/>
					<div className="table-div">
						<div className="table-div-in">
							<SingleTable tableData={this.props.expense_list_body}
							             tableHeading={this.props.expense_list_heading}
							             tableName={"Total Expenses"}/>
						</div>
					</div>
					<div className="icon-add-item bkground-dc-green"
				     	 onClick={(e)=>{
				     	this.props.addExpensePage(this.props.expense_page_status);
				     }}>
					<i className="fa fa-plus"></i>
					</div>
				</MainSidePage>)
	}
}

const WrappedComponent = connect(({totalExpensesReducer, addProductPageReducer}) => {
  return {
  	expense_list_heading: totalExpensesReducer.expense_list_heading,
  	expense_list_body: totalExpensesReducer.expense_list_body,
  	expense_page_status: addProductPageReducer.expense_page_status
  };
}, (dispatch) => {
	return {
    fetchExpenses:() => dispatch(fetchExpenses()),
    addExpensePage:(expense_page_status) => dispatch(addExpensePage(expense_page_status))
}})(TotalExpenses);

export default WrappedComponent