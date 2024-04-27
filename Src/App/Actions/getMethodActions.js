import {ACTION_CONSTANTS}
 from "../Utils/Constants";
import axios from "axios";
import {CONSTANT_TYPES} from "../Core/ActionConstants";

export function fetchProducts() {
  return {
    type: ACTION_CONSTANTS.FETCH_PRODUCTS,
    payload: axios.get("/api/products")
  }
}

export function fetchSingleProduct(product_id) {
  return {
    type: ACTION_CONSTANTS.FETCH_SINGLE_PRODUCT,
    payload: axios.get("/api/product/"+product_id)
  }
}

export function fetchProductCount() {
  return {
    type: ACTION_CONSTANTS.FETCH_PRODUCT_COUNT,
    payload: axios.get("/api/products/count")
  }
}

export function fetchExpenses() {
  return {
    type: ACTION_CONSTANTS.FETCH_EXPENSES,
    payload: axios.get("/api/expenses")
  }
}

export function fetchTotalExpenses() {
  return {
    type: ACTION_CONSTANTS.FETCH_TOTAL_EXPENSES,
    payload: axios.get("/api/expenses/total")
  }
}

export function fetchUsedRevenue() {
  return {
    type: ACTION_CONSTANTS.FETCH_USED_REVENUE,
    payload: axios.get("/api/expenses/usedrevenue")
  }
}

export function fetchTotalRevenue() {
  return {
    type: ACTION_CONSTANTS.FETCH_TOTAL_REVENUE,
    payload: axios.get("/api/orders/totalrevenue")
  }
}

export function fetchOrders() {
  return {
    type: ACTION_CONSTANTS.FETCH_ORDERS,
    payload: axios.get("/api/orders")
  }
}

export function fetchSingleOrder(order_id) {
  return {
    type: ACTION_CONSTANTS.FETCH_SINGLE_ORDER,
    payload: axios.get("/api/product/"+order_id)
  }
}

export function fetchOrdersCount() {
  return {
    type: ACTION_CONSTANTS.FETCH_ORDERS_COUNT,
    payload: axios.get("/api/orders/count")
  }
}

export function fetchUserAdmin(){
  return {
    type: ACTION_CONSTANTS.FETCH_USER_ADMIN,
    payload: axios.get("/api/useradmin")
  }
}

export function fetchEarnedRevenue(){
  return {
    type: ACTION_CONSTANTS.FETCH_EARNED_REVENUE,
    payload: axios.get("/api/orders/earned/revenue")
  }
}

export function fetchUniqueCustomers(){
  return {
    type: ACTION_CONSTANTS.FETCH_UNIQUE_CUSTOMERS,
    payload: axios.get("/api/orders/unique/customers")
  }
}