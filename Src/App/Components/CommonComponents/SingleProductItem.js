import React from "react";
import {render} from "react-dom";

export function SingleProductItem(props){
	return(
		props.order_product_list.map((single_product,index)=>
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
				{single_product.item_ordered === 0 ?
					<div className="add-item-button-in"
					     onClick={(e)=>{
					     	single_product.item_ordered = single_product.item_ordered + 1;
					     	props.changeItemNumber(single_product);
					     }}>
						Add
					</div> : 
					<div>
						Hello
					</div>
				}
				
			</div>
		</div>)
	);
}