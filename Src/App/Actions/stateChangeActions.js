import {ACTION_CONSTANTS}
 from "../Utils/Constants";
import axios from "axios";
import {CONSTANT_TYPES} from "../Core/ActionConstants";

export function addProductPage(product_page_status) {
  return {
    type: ACTION_CONSTANTS.ADD_PRODUCT_PAGE,
    product_page_status
  }
}

export function addExpensePage(expense_page_status) {
  return {
    type: ACTION_CONSTANTS.ADD_EXPENSE_PAGE,
    expense_page_status
  }
}

export function dashboardPageUpdate(page_name, field_name){
	return {
		type: ACTION_CONSTANTS.DASHBOARD_PAGE_UPDATE,
		page_name, field_name
	}
}

export function enterUserOrderInfo(user_order_info){
  return {
    type: ACTION_CONSTANTS.ENTER_USER_ORDER_INFO,
    user_order_info
  }
}