import React from "react";
import {render} from "react-dom";

import {ItemCard} from "./CommonComponents/ItemCard";
import {MainSidePage} from "./CommonComponents/MainPage";
import SingleInput from "./CommonComponents/SingleInput";

import {connect} from "react-redux";

import {
   fetchProducts
} from "../Actions/getMethodActions";

import {
   editProductStock, addProductStock
} from "../Actions/putMethodActions";

import {
	addProductPage
} from "../Actions/stateChangeActions";

import AddProduct from "./AddProduct";

class TotalItems extends React.Component{
	constructor(props){
		super(props);
		this.props.fetchProducts();
		this.state={
			alert_style:{
				'visibility':'hidden'
			},
			alert_style_in:{
				'visibility':'hidden'
			},
			product_info:{
				"event_name":"",
				"product_id":""
			},
			input_add_stock:[{
				"label":"Add New Stock",
				"class_name":"label-form",
				"input_data":"",
				"input_name":"in_stock",
				"label_name":"in_stock_label",
    			"label_color":"in_stock_label_color",
				"input_type":"text",
    			"input_class_name":""
			}],
			input_edit_stock:[{
				"label":"Edit Product Stock",
				"class_name":"label-form",
				"input_data":"",
				"input_name":"in_stock",
				"label_name":"in_stock_label",
    			"label_color":"in_stock_label_color",
				"input_type":"text",
    			"input_class_name":""
			}]

		}
	}
	render(){
		return(
			<div className="process-main width-dc-100-cent">
				<div className="position-abs-abs-abs">
				<div className="background-fix-alert" style={this.state.alert_style}
				     onClick={(e)=>{
				     	this.setState({
							alert_style:{
								'visibility':'hidden'
							},
							alert_style_in:{
								'visibility':'hidden',
								'marginTop': '-250px'
							}
						})
				     }}></div>
					<div className="alert-fix-it" style={this.state.alert_style_in}>
						{this.state.product_info.event_name === "add_stock" ? 
							<SingleInput form_data={this.state.input_add_stock}
						             	 button={true}
						             	 button_name={"Add New Stock"}
						             	 product_info={this.state.product_info}/>
						     : this.state.product_info.event_name === "edit_stock" ?
						     <SingleInput form_data={this.state.input_edit_stock}
						             	 button={true}
						             	 button_name={"Edit Product Stock"}
						             	 product_info={this.state.product_info}/> 
						      : null
							}
					</div>
				</div>
				<AddProduct/>
				<div className="total-items">
					<div className="total-items-in">
					{this.props.product_list.map((product,index)=>
						<ItemCard key={index}>
							<div className="item-card-in">
							<div className="item-edit-item-add">
								<div className="edit-edit-in display-dc-flex">
									<div className="icon-icon-round"
									     onClick={(e)=>{
									     	this.setState({
									     		alert_style:{
									     			'visibility':'visible'
									     		},
									     		alert_style_in:{
									     			'visibility':'visible',
									     			'marginTop':'30px'
									     		},
									     		product_info:{
									     			"event_name":"add_stock",
									     			"product_id":product._id
									     		}
									     	})
									     }}>
										<i className="fa fa-plus"></i>
									</div>
									<div className="icon-icon-round"
									     onClick={(e)=>{
									     	this.setState({
									     		alert_style:{
									     			'visibility':'visible'
									     		},
									     		alert_style_in:{
									     			'visibility':'visible',
									     			'marginTop':'30px'
									     		},
									     		product_info:{
									     			"event_name":"edit_stock",
									     			"product_id":product._id
									     		}
									     	})
									     }}>
										<i className="fa fa-edit"></i>
									</div>
									<div className="icon-icon-round"
									     onClick={(e)=>{
									     	this.setState({
									     		alert_style:{
									     			'visibility':'visible'
									     		},
									     		alert_style_in:{
									     			'visibility':'visible',
									     			'marginTop':'30px'
									     		},
									     		product_info:{
									     			"event_name":"delete_stock",
									     			"product_id":product._id
									     		}
									     	})
									     }}>
										<i className="fa fa-trash"></i>
									</div>
								</div>
							</div>
								<div className="image-item">
									<img className="wipro-logo" src={product.product_image}/>
								</div>
								<div className="item-name">
									<p className="item-name-wr font-dc-roboto-ly">
										{product.product_name}
									</p>
									<div className="items-div">
										<p className="item-rate font-dc-roboto-ly">
											₹{product.details.selling_price}
										</p>
										<p className="item-rate-cost item-rate font-dc-roboto-ly">
											₹{product.details.cost_price}
										</p>
									</div>
								</div>
								<div className="item-status">
									<p className="item-status-wr">
										{product.details.in_stock} Out of {product.details.total_quantities} left
									</p>
								</div>
							</div>
						</ItemCard>
					)}
					</div>
				</div>
				<div className="icon-add-item bkground-dc-green"
				     onClick={(e)=>{
				     	this.props.addProductPage(this.props.product_page_status);
				     }}>
					<i className="fa fa-plus"></i>
				</div>
			</div>
			)
	}
}

const WrappedComponent = connect(({getMethodReducer, addProductPageReducer}) => {
  return {
  	product_list: getMethodReducer.product_list,
  	product_page_status: addProductPageReducer.product_page_status
  };
}, (dispatch) => {
	return {
    fetchProducts:() => dispatch(fetchProducts()),
    addProductPage:(product_page_status) => dispatch(addProductPage(product_page_status)),
    addProductStock:(product_id, new_stock) => dispatch(addProductStock(product_id, new_stock)),
    editProductStock:(product_id, edit_stock) => dispatch(editProductStock(product_id, edit_stock))
}})(TotalItems);

export default WrappedComponent
