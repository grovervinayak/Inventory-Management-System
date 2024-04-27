import {ACTION_CONSTANTS, FETCH_ORDERS}
 from "../Utils/Constants";
import {CONSTANT_TYPES} from "../Core/ActionConstants";

export default function reducer(state = {
	orders_list_heading:["Customer Number","Ordered Items" , "Total Amount", "Total Cost", "Revenue"],
	orders_list_body:[{
		"customer_number": 0,
		"ordered_items":[{
			"item_name":"",
			"item_quantity":0,
			"item_price":0,
			"item_total_price":0
		}],
		"total_amount": 0,
		"cost_to_company": 0,
		"total_revenue":0
	}]
}, action){
	switch(action.type){
		case FETCH_ORDERS(CONSTANT_TYPES.FULFILLED): {
			var ordered_items_body = [];
			action.payload.data.forEach((single_order,index)=>{
				var order = {
					"customer_number":single_order.customer_number,
					"ordered_items":[],
					"total_amount":single_order.total_amount,
					"cost_to_company":single_order.cost_to_company,
					"total_revenue":single_order.total_revenue
				};
				single_order.ordered_items.forEach((single_item,index)=>{
					var ordered_item = {
						"item_name":single_item.item_name,
						"item_quantity":single_item.item_quantity,
						"item_price":single_item.item_price,
						"item_total_price":single_item.item_total_price
					};
					order.ordered_items.push(ordered_item);
				})
				ordered_items_body.push(order);
			})
			return{...state,orders_list_body: ordered_items_body}
		}
	}
	return state;
}
