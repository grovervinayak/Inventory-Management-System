import React from "react";
import {render} from "react-dom";

import {connect} from "react-redux";

import SingleInput from "./CommonComponents/SingleInput";

import {add_product_data} from "../Core/AddProductData"; 

import {
	addProductPage
} from "../Actions/stateChangeActions";

class AddProduct extends React.Component{
	render(){
		return(
			<div className="add-product">
				<div className={this.props.product_page_status ? "full-body-div bkground-opac-black" : "full-body-div-change"}
				     onClick={(e)=>{
				     	this.props.addProductPage(this.props.product_page_status);
				     }}>
				</div>
				<div className={this.props.product_page_status ? "add-product-in right-dc-0-pxl" : "add-product-in right-dc-m470-pxl"}>
					<div className="add-product-form">
						<div className="add-product-head">
							<p className="add-product-text">
								Add New Product
							</p>
						</div>
						<SingleInput form_data={add_product_data}
						             form_name={"Add Product Page"}
						             button={true}
						             button_name={"Add Product"}/>
					</div>
				</div>
			</div>
			)
	}
}

const WrappedComponent = connect(({addProductPageReducer}) => {
  return {
  	product_page_status: addProductPageReducer.product_page_status
  };
}, (dispatch) => {
	return {
    addProductPage:(product_page_status) => dispatch(addProductPage(product_page_status))
}})(AddProduct);

export default WrappedComponent