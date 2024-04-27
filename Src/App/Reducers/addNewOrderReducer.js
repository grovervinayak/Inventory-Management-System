import {ACTION_CONSTANTS, FETCH_PRODUCTS}
 from "../Utils/Constants";
import {CONSTANT_TYPES} from "../Core/ActionConstants";

export default function reducer(state = {
	order_product_list:[{
		"details": {
            "cost_price": 0,
            "selling_price": 0,
            "total_quantities": 0,
            "in_stock": 0,
            "profit_rate": 0
        },
        "product_name": "",
        "product_image": "",
        "item_ordered":0
	}],
	user_order_info:{}
}, action){
	switch(action.type){
		case FETCH_PRODUCTS(CONSTANT_TYPES.FULFILLED): {
			var product_list = [];
			action.payload.data.forEach((single_product, index)=>{
				single_product["item_ordered"] = 0;
				product_list.push(single_product);
			})
			return{...state, order_product_list: product_list}
		}

		case ACTION_CONSTANTS.ENTER_USER_ORDER_INFO: {
			return{...state, user_order_info: action.user_order_info}
		}
	}
	return state;
}
