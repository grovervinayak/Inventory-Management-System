import {ACTION_CONSTANTS}
 from "../Utils/Constants";
import axios from "axios";
import {CONSTANT_TYPES} from "../Core/ActionConstants";

export function deleteProduct(product_id) {
  return {
    type: ACTION_CONSTANTS.DELETE_PRODUCT,
    payload: axios.delete("/api/product/delete/"+product_id)
  }
}

export function deleteOrder(order_id) {
  return {
    type: ACTION_CONSTANTS.DELETE_ORDER,
    payload: axios.delete("/api/orders/delete/"+order_id)
  }
}