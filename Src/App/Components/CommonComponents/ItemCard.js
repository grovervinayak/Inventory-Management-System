import React from "react";

export function ItemCard(props){
	return(
	<div className="item-card box-dc-shadow-big">
		{props.children}
	</div>
	);
}