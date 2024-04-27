import React from "react";
import {render} from "react-dom";

import "../../Stylesheets/addOrderStyle.css";
import {ProcessMain} from "./CommonComponents/ProcessMain";
import {SingleProductItem} from "./CommonComponents/SingleProductItem";

import {connect} from "react-redux";

import {
   fetchProducts
} from "../Actions/getMethodActions";

import {
   addNewOrderInfo
} from "../Actions/postMethodActions";

import {
   UpdateInStock
} from "../Actions/putMethodActions";

import {add_new_order_data} from "../Core/addNewOrderData";

import SingleInput from "./CommonComponents/SingleInput";

class OrderNewItem extends React.Component{
	constructor(props){
		super(props);
		this.state={
			position_div:{
				'position':'absolute'
			},
			order_product_list: this.props.order_product_list,
			total_ordered_amount: 0,
			offer_product:0
		}
		this.props.fetchProducts();
	}
	componentDidMount(){
		var elmnt = document.getElementById("myDIV");
		var txt = elmnt.offsetHeight;
		var height = this.divElement.clientHeight;
		var val='absolute';
		console.log(height);
		console.log(window.innerHeight);
		if(height < (window.innerHeight - 130) ){
			this.setState({
				position_div:{
					'position':'fixed'
				}
			})
		}
		else{
			window.addEventListener("scroll", function (event) {
    			var scroll = this.scrollY;
				console.log(window.pageYOffset);

				if(window.pageYOffset > ((height - window.innerHeight)+130)){
					this.setState({
  						position_div:{'position':'fixed',
						'bottom':'30px'}
					})
				}

				else{
					this.setState({
  						position_div:{'position':'absolute'}
					})
				}
			}.bind(this));
		}
	}
	componentWillReceiveProps(nextProps){
		if(nextProps.order_product_list !== this.props.order_product_list){
			this.setState({
				order_product_list: nextProps.order_product_list,
				total_ordered_amount:0
			})
		}
	}
	changeCountItems(item_ordered, index){
		var order_product_list = this.state.order_product_list;
		var total_ordered_amount = 0;
		if(item_ordered > order_product_list[index].item_ordered){
		 total_ordered_amount=(order_product_list[index].details.selling_price + this.state.total_ordered_amount);
		}
		else{
			total_ordered_amount=(this.state.total_ordered_amount - order_product_list[index].details.selling_price);
		}
		order_product_list[index].item_ordered = item_ordered;
		  	this.setState({
		  		order_product_list:order_product_list,
		  		total_ordered_amount:  total_ordered_amount
		   	})
	}
	render(){
		return(
			<div style={{'width':'66%'}}>
				<ProcessMain>
					<div className="add-orders-page">
						<div className="add-orders-in display-dc-flex jst-fy-dc-sp-btwn">
							<div className="items-listing-page">
								<div className="items-listing-in">
									{this.state.order_product_list.map((single_product,index)=>
		<div className="single-item-list">
			<div className="item-list-container">
				<div className="item-list-name">
					{single_product.product_name}
				</div>
				<div className="item-list-price">
					₹{single_product.details.selling_price}
				</div>
			</div>
			<div className="add-item-button">
				{this.props.order_product_list[index].item_ordered === 0 ?
					<div className="add-item-button-in"
					     onClick={(e)=>{
					     	this.changeCountItems(single_product.item_ordered + 1, index);
					     }}>
						Add
					</div> : 
					<div className="add-item-button-in display-dc-flex jst-fy-dc-sp-btwn">
						<div className="icon-icon-icon-count"
						     onClick={(e)=>{
						     	this.changeCountItems(single_product.item_ordered - 1, index);
					     }}>
							<i className="fa fa-minus"></i>
						</div>
							{single_product.item_ordered}
						<div className="icon-icon-icon-count"
						     onClick={(e)=>{
						    	this.changeCountItems(single_product.item_ordered + 1, index); 	
					     }}>
							<i className="fa fa-plus"></i>
						</div>
					</div>
				}
				
			</div>
		</div>)}
								</div>
							</div>

							<div className="order-items-page" id="myDIV" ref={ (divElement) => { this.divElement = divElement } }
    							 style={this.state.position_div}>
								<div className="orders-items-page-in">
									<div className="ordered-item-heading">
										Ordered Items
									</div>

									<table className="table-item-order">
										<thead className="thead-item-order">
											<tr className="trhead-item-order">
												<th>Item Name</th>
												<th>Quantity</th>
												<th>Price</th>
											</tr>
										</thead>
										<tbody className="tbody-item-order">
											{this.state.order_product_list.map((single_product,index)=>
												single_product.item_ordered!==0 ?
												<tr className="trbody-item-order">
													<td>{single_product.product_name}</td>
													<td>{single_product.item_ordered}</td>
													<td>{single_product.item_ordered * single_product.details.selling_price}</td>
												</tr>: null
											)}
										</tbody>
									</table>
									<div className="total-price display-dc-flex jst-fy-dc-sp-btwn">
										<div className="total-price-head">
											Total
										</div>
										<div className="total-price-amt">
											₹{this.state.total_ordered_amount}
										</div>
									</div>
									<div className="display-dc-flex margin-dc-20-pxl-b">
										<div className="offer-page"
										     onClick={(e)=>{
										     	this.setState({
										     		offer_product:10
										     	})
										     }}>
											10% OFF
										</div>
										<div className="offer-page"
										     onClick={(e)=>{
										     	this.setState({
										     		offer_product:20
										     	})
										     }}>
											20% OFF
										</div>
									</div>
									<div className="flex-dc-dir-row-rev display-dc-flex">
									<SingleInput form_data={add_new_order_data}
												 form_name={"Add New Order"}
						             			 button={false}/>
						             </div>
									<div className="order-item-button-or"
									     onClick={(e)=>{
									     	this.props.addNewOrderInfo(this.state.order_product_list, this.props.user_order_info, this.state.offer_product).then(res=>{
									     		this.props.UpdateInStock(this.state.order_product_list);
									     	});
									     }}>
										Order Items
									</div>
								</div>
							</div>
						</div>
					</div>
				</ProcessMain>
			</div>
		)
	}
}

const WrappedComponent = connect(({addNewOrderReducer}) => {
  return {
  	order_product_list: addNewOrderReducer.order_product_list,
  	user_order_info: addNewOrderReducer.user_order_info
  };
}, (dispatch) => {
	return {
    fetchProducts:() => dispatch(fetchProducts()),
    addNewOrderInfo:(order_product_list, user_order_info, offer_product) => 
    	dispatch(addNewOrderInfo(order_product_list, user_order_info, offer_product)),
    UpdateInStock:(product) => dispatch(UpdateInStock(product))
}})(OrderNewItem);

export default WrappedComponent