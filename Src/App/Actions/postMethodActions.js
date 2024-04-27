import {ACTION_CONSTANTS}
 from "../Utils/Constants";
import axios from "axios";
import {CONSTANT_TYPES} from "../Core/ActionConstants";

export function addProduct(product) {
  return {
    type: ACTION_CONSTANTS.ADD_PRODUCT,
    payload: axios.post("/api/product/new", product)
  }
}

export function addExpense(expense) {
	if(expense.revenue_used === ""){
		expense.revenue_used = false;
	}
	var new_expense = {
		"expense_name":expense.expense_name,
		"expense_price":parseInt(expense.expense_price,10),
		"revenue_used":expense.revenue_used,
		"expense_division":{
			"vinayak":expense.vinayak_share,
			"viplove":expense.viplove_share,
			"rudraksh":expense.rudraksh_share,
			"abhishek":expense.abhishek_share
		}
	}
  return {
    type: ACTION_CONSTANTS.ADD_EXPENSE,
    payload: axios.post("/api/expense/new", new_expense)
  }
}

export function addOrder(order) {
  return {
    type: ACTION_CONSTANTS.ADD_ORDER,
    payload: axios.post("/api/order/new", order)
  }
}

export function addNewUserAdmin(user_data) {
  return {
    type: ACTION_CONSTANTS.ADD_NEW_USER_ADMIN,
    payload: axios.post("/api/useradmin/new", user_data)
  }
}

export function userAdminLogin(user_data) {
  return {
    type: ACTION_CONSTANTS.USER_ADMIN_LOGIN,
    payload: axios.post("/api/useradmin/login", user_data)
  }
}

export function addNewOrderInfo(order_product_list, user_order_info, offer_product) {
	var order_date = new Date(Date.now()).toLocaleDateString();
	var total_amount = 0;
	var cost_to_company = 0;
	var ordered_items = [];
	order_product_list.forEach((single_product, index)=>{
		if(single_product.item_ordered > 0){
			var single_item = {
				item_name: single_product.product_name,
				item_quantity: single_product.item_ordered,
				item_price: single_product.details.selling_price,
				item_total_price: single_product.item_ordered * single_product.details.selling_price
			};
			ordered_items.push(single_item);
			total_amount = total_amount + single_item.item_total_price;
			cost_to_company = cost_to_company + (single_product.item_ordered * single_product.details.cost_price);
		}
	})
	total_amount = ((100- offer_product)/100)*total_amount;
	var new_order_info = {
		customer_number:user_order_info.customer_number,
		customer_address:user_order_info.customer_address,
		order_date: order_date,
		total_amount:total_amount,
		cost_to_company:cost_to_company,
		total_revenue:total_amount - cost_to_company,
		ordered_items:ordered_items
	};
  return {
    type: ACTION_CONSTANTS.ADD_NEW_ORDER_INFO,
    payload: axios.post("/api/orders/new", new_order_info)
  }
}