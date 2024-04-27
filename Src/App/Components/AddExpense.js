import React from "react";
import {render} from "react-dom";

import {connect} from "react-redux";

import SingleInput from "./CommonComponents/SingleInput";

import {add_expense_data} from "../Core/AddExpenseData"; 

import {
	addExpensePage
} from "../Actions/stateChangeActions";

import {
	addExpense
} from "../Actions/postMethodActions";

class AddExpense extends React.Component{
	render(){
		return(
			<div className="add-product">
				<div className={this.props.expense_page_status ? "full-body-div bkground-opac-black" : "full-body-div-change"}
				     onClick={(e)=>{
				     	this.props.addExpensePage(this.props.expense_page_status);
				     }}>
				</div>
				<div className={this.props.expense_page_status ? "add-product-in right-dc-0-pxl" : "add-product-in right-dc-m470-pxl"}>
					<div className="add-product-form">
						<div className="add-product-head">
							<p className="add-product-text">
								Add New Expense
							</p>
						</div>
						<SingleInput form_data={add_expense_data}
						             form_name={"Add Expense Page"}
						             button={true}
						             button_name={"Add Expense"}
						             />
					</div>
				</div>
			</div>
			)
	}
}

const WrappedComponent = connect(({addProductPageReducer}) => {
  return {
  	expense_page_status: addProductPageReducer.expense_page_status
  };
}, (dispatch) => {
	return {
    addExpensePage:(expense_page_status) => dispatch(addExpensePage(expense_page_status)),
    addExpense:(expense) => dispatch(addExpense(expense))
}})(AddExpense);

export default WrappedComponent