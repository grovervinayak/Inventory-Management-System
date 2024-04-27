import {ACTION_CONSTANTS}
 from "../Utils/Constants";
import axios from "axios";
import {CONSTANT_TYPES} from "../Core/ActionConstants";

export function updateProduct(product_id, product) {
  return {
    type: ACTION_CONSTANTS.UPDATE_PRODUCT,
    payload: axios.put("/api/product/update/"+product_id, product)
  }
}

export function UpdateInStock(product) {
	var update_stock = {
		"ordered_items":[]
	};
	product.forEach((single_product, index)=>{
		if(single_product.item_ordered > 0){
			var single_item={
				"id":single_product._id,
				"in_stock":single_product.item_ordered
			};
			update_stock.ordered_items.push(single_item);
		}
	})
  return {
    type: ACTION_CONSTANTS.UPDATE_IN_STOCK,
    payload: axios.put("/api/product/updateinstock", update_stock)
  }
}

export function editProductStock(product_id, edit_stock) {
  return {
    type: ACTION_CONSTANTS.EDIT_PRODUCT_STOCK,
    payload: axios.put("/api/product/editstock/"+product_id, edit_stock)
  }
}

export function addProductStock(product_id, new_stock) {
  return {
    type: ACTION_CONSTANTS.ADD_PRODUCT_STOCK,
    payload: axios.put("/api/product/addnewstock/"+product_id, new_stock)
  }
}