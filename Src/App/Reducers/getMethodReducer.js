import {ACTION_CONSTANTS, FETCH_PRODUCTS, FETCH_PRODUCT_COUNT, FETCH_SINGLE_PRODUCT, FETCH_TOTAL_EXPENSES,
        FETCH_USED_REVENUE, FETCH_TOTAL_REVENUE, FETCH_ORDERS, FETCH_ORDERS_COUNT, FETCH_EARNED_REVENUE,
    	FETCH_UNIQUE_CUSTOMERS}
 from "../Utils/Constants";
import {CONSTANT_TYPES} from "../Core/ActionConstants";

export default function reducer(state = {
	product_list:[{
		"details": {
            "cost_price": 0,
            "selling_price": 0,
            "total_quantities": 0,
            "in_stock": 0,
            "profit_rate": 0
        },
        "product_name": "",
        "product_image": "",
        "width_style":"",
        "color_style":""
	}],
	orders_list:{
		"customer_number": 0,
		"order_date": "",
		"total_amount": 0,
		"cost_to_company": 0,
		"ordered_items": [
		{
			"item_name": "",
			"item_quantity": 0,
			"item_price": 0,
			"item_total_price": 0
		}],
	},
	total_expenses: 0,
	total_revenue: 0,
	used_revenue: 0,
	total_items:0,
	total_orders:0,
	total_earned_revenue:0,
	total_unique_customers:0
}, action){
	switch(action.type){
		case FETCH_PRODUCTS(CONSTANT_TYPES.FULFILLED): {
			var product_list=[];
			var color_list=["#d92550", "#3ac47d", "#267313", "#f7b924", "#ff5722", "#f7b924","#673ab7", "#e91e63",
			                "#d92550", "#3ac47d", "#267313", "#f7b924", "#ff5722", "#f7b924","#673ab7", "#e91e63",
			                "#d92550", "#3ac47d", "#267313", "#f7b924", "#ff5722", "#f7b924","#673ab7", "#e91e63"]
			action.payload.data.forEach((single_product, index)=>{
				var width_style=(single_product.details.in_stock/single_product.details.total_quantities) * 100
				width_style=width_style+"%";
				single_product['width_style'] = width_style;
				single_product['color_style'] = color_list[index];
				product_list.push(single_product);
			})
			return{...state,product_list:product_list}
		}

		case FETCH_TOTAL_EXPENSES(CONSTANT_TYPES.FULFILLED): {
			return{...state,total_expenses:action.payload.data.total_expense}
		}

		case FETCH_TOTAL_REVENUE(CONSTANT_TYPES.FULFILLED): {
			return{...state,total_revenue:action.payload.data.total_revenue}
		}

		case FETCH_USED_REVENUE(CONSTANT_TYPES.FULFILLED): {
			return{...state,used_revenue:action.payload.data.used_revenue_total}
		}

		case FETCH_ORDERS(CONSTANT_TYPES.FULFILLED): {
			return{...state,orders_list: action.payload.data}
		}

		case FETCH_ORDERS_COUNT(CONSTANT_TYPES.FULFILLED): {
			return{...state,total_orders: action.payload.data.count}
		}

		case FETCH_PRODUCT_COUNT(CONSTANT_TYPES.FULFILLED): {
			return{...state,total_items: action.payload.data.count}
		}

		case FETCH_EARNED_REVENUE(CONSTANT_TYPES.FULFILLED): {
			return{...state,total_earned_revenue: action.payload.data.earned_revenue}
		}

		case FETCH_UNIQUE_CUSTOMERS(CONSTANT_TYPES.FULFILLED): {
			return{...state,total_unique_customers: action.payload.data.unique_customers}
		}
	}
	return state;
}
