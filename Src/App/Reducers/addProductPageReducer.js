import {ACTION_CONSTANTS}
 from "../Utils/Constants";
import {CONSTANT_TYPES} from "../Core/ActionConstants";

export default function reducer(state = {
	product_page_status:false,
	expense_page_status: false
}, action){
	switch(action.type){
		case ACTION_CONSTANTS.ADD_PRODUCT_PAGE: {
			return{...state,product_page_status:!action.product_page_status}
		}

		case ACTION_CONSTANTS.ADD_EXPENSE_PAGE: {
			return{...state,expense_page_status:!action.expense_page_status}
		}
	}
	return state;
}
