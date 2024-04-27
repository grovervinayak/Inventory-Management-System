import React from "react";
import {render} from "react-dom";

import {AddButton} from "./SingleButton";

import {connect} from "react-redux";

import {
	addProduct, addExpense
} from "../../Actions/postMethodActions";

import {
   fetchProducts
} from "../../Actions/getMethodActions";

import {
	editProductStock, addProductStock
} from "../../Actions/putMethodActions";

import {
	enterUserOrderInfo
} from "../../Actions/stateChangeActions";

class SingleInput extends React.Component{
	constructor(props){
		super(props);
		this.state={
			"form_data":[],
			"input_data":{}
		}
	}
	componentDidMount(){
		var formData = [];
		var user_data=[];
		this.props.form_data.forEach((single_input,index)=>{
			formData.push(single_input);

			user_data= {...user_data, [single_input.input_name]: ""};
			this.setState({
				[single_input.label_name]:single_input.class_name,
                [single_input.label_color]:"color-dc-grey"
			})
		});
		if(this.props.form_name === "Add Product Page"){
			user_data = {...user_data, profit_rate:0}
		}
		this.setState({
			form_data:formData,
			input_data: user_data
		})
	}
	render(){
		return(
			<div className="add-product-form-in">
			{this.state.form_data.map((single_input,index)=>
				<div className="single-input">
					<label className={`${this.state[single_input.label_color]} ${this.state[single_input.label_name]}`}>{single_input.label}</label>
					<input type={single_input.input_type} 
					       className="input-form"
					       value={this.state.input_data[single_input.input_name]}
					       onFocus={(e)=>{
								var formData=this.state.form_data;
								formData[index].input_class_name = "";
								var login_form = "";
								if(single_input.input_type === "checkbox"){
									login_form = "label-form";
								}
								else{
									login_form = "label-form-change";
								}
								this.setState({
								    [single_input.label_name]:login_form,
                            		[single_input.label_color]:"color-dc-blue",
									form_data: formData
								 })
						   }}
						   onBlur={(e)=>{
								if(this.state.input_data[single_input.input_name] === "" ||
							       this.state.input_data[single_input.input_name] === undefined){
									this.setState({
										[single_input.label_name]:"label-form"
									})
								 }
								 if(this.props.form_name === "Add Product Page"){
								 	var input_data = this.state.input_data;
								 	var add_total_quantities_label="";

								 	if(this.state.input_data.selling_price !== "" &&
								 		this.state.input_data.cost_price !== ""){
								 		var profit_rate = this.state.input_data.selling_price - this.state.input_data.cost_price;
								 		input_data = {...input_data, profit_rate: profit_rate};
								 	}
								 	if(single_input.input_name === "in_stock"){
								 		add_total_quantities_label="label-form-change";
								 		input_data = {...input_data, total_quantities:this.state.input_data.in_stock};
								 	}
								 	this.setState({
								 		add_total_quantities_label:"label-form-change",
								 		input_data:input_data
								 	})
								 }
								 if(this.props.form_name === "Add Expense Page"){
								 	var input_data = this.state.input_data;
								 	if(input_data.divide_equal === true){
								 		input_data.abhishek_share = 
								 		input_data.vinayak_share = 
								 		input_data.viplove_share =
								 		input_data.rudraksh_share = input_data.expense_price/4;
								 	}
								 	this.setState({
								 		input_data: input_data
								 	})
								 }
								 if(this.props.form_name === "Add New Order"){
								 	this.props.enterUserOrderInfo(this.state.input_data);
								 }
                         this.setState({
                            [single_input.label_color]:"color-dc-grey"
                         })
							   }}
							   onChange={(e)=>{
								 var value = e.target.value;
								 var input_data = this.state.input_data;
								 if(single_input.input_type === "checkbox"){
								 	if(single_input.input_name === ""){
								 		input_data[single_input.input_name] = true;
								 	}
								 	else{
								 		input_data[single_input.input_name] = !input_data[single_input.input_name];
								 	}
								 }
								 else{
								 	input_data[single_input.input_name] = value;
								 }
								 this.setState({
									input_data:input_data
								 })
							   }}></input>
				</div>)}
				{this.props.button === true ?
					<AddButton background_color={"bkground-dc-btn-lt-blue"}
				    	       form_name = {this.props.form_name}
				    	       button_name = {this.props.button_name}
				        	   input_data = {this.state.input_data}
				           	   addProduct = {this.props.addProduct}
				           	   addExpense = {this.props.addExpense}
				           	   product_info = {this.props.product_info}
				           	   addProductStock = {this.props.addProductStock}
				           	   editProductStock = {this.props.editProductStock}
				           	   fetchProducts = {this.props.fetchProducts}>{this.props.button_name}</AddButton>
				: null }
			</div>
			)
	}
}

const WrappedComponent = connect(({addProductPageReducer}) => {
  return {
  	page_status: addProductPageReducer.page_status
  };
}, (dispatch) => {
	return {
    addProduct:(product) => dispatch(addProduct(product)),
    addExpense:(expense) => dispatch(addExpense(expense)),
    addProductStock:(product_id, new_stock) => dispatch(addProductStock(product_id, new_stock)),
    editProductStock:(product_id, edit_stock) => dispatch(editProductStock(product_id, edit_stock)),
    fetchProducts:() => dispatch(fetchProducts()),
    enterUserOrderInfo:(user_order_info) => dispatch(enterUserOrderInfo(user_order_info))
}})(SingleInput);

export default WrappedComponent