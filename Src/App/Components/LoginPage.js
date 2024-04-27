import React from "react";
import {render} from "react-dom";

import SingleInput from "./CommonComponents/SingleInput";

import {user_admin_data} from "../Core/UserAdminData"; 

export default class LoginPage extends React.Component{
	render(){
		const
		return(
			<div className="login-admin-page">
				<div className="login-admin-page-in">
					<div className="login-heading">
						<p>Admin Login</p>
					</div>
					<SingleInput form_data={user_admin_data}
						         form_name={"User Admin Login Page"}/>
				</div>
			</div>
			)
	}
}