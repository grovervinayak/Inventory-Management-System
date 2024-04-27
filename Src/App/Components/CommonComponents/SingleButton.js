import React from "react";

export function AddButton(props){
	return(
		<button className={`button-tag-dc-dash ${props.background_color} trans-dc-3-s width-dc-82-cent height-dc-45-pxl`}
		        onClick={(e)=>{
		        	if(props.form_name === "Add Product Page"){
		        		props.addProduct(props.input_data).then(res=>{
		        			props.fetchProducts();
		        		});
		        	}
		        	else if(props.form_name === "Add Expense Page"){
		        		props.addExpense(props.input_data);
		        	}
		        	else if(props.button_name === "Add New Stock"){
		        		props.addProductStock(props.product_info.product_id, props.input_data).then(res=>{
		        			props.fetchProducts();
		        		});;
		        	}
		        	else if(props.button_name === "Edit Product Stock"){
		        		props.editProductStock(props.product_info.product_id, props.input_data).then(res=>{
		        			props.fetchProducts();
		        		});;
		        	}
		        }}>
			{props.children}
		</button>
	);
}