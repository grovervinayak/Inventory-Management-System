import React from "react";
import {render} from "react-dom";

export class Header extends React.Component{
	render(){
		return(
			<div className="header-main box-dc-shadow-big">
				<div className="header-in">
					<img src="../Images/snacks_on_steps_logo.png" style={{'height':'54px', 'marginRight':'20px'}}/>
					<p className="header-context">
						 
					</p>
				</div>
			</div>
			)
	}
}