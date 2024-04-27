import React from "react";
import {render} from "react-dom";

export function MainPage(props){
		return(
			<div className="main-page bkground-dc-lt-grey fp-dc-color-disp padding-dc-60-pxl-t padding-dc-20-pxl-b">
				{props.children}
			</div>
		);
}

export function MainSidePage(props){
	return(
		<div className="main-side-page">
			{props.children}
		</div>
		)
}