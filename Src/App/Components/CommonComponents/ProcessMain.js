import React from "react";

export function ProcessMain(props){
	return(
		<div className="process-upper box-dc-shadow-hd-lt-grey bkground-dc-white"
		     style={props.style}>
			{props.children}
		</div>
	);
}
