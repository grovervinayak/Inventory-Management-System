import React from "react";

export function SingleDashboardIcon(props){
	return(
		<div className={`dashboard-sidebar-icon csr-dc-pointer ${props.icon_info.active}`}
		     onClick={(e)=>{
		     	props.dashboardPageUpdate(props.icon_info.page_name,props.icon_info.field_name);
		     	props.changeActiveIcon(props.icon_info.field_name);
		     }}>
            <div className="dashboard-sidebar-icon-icon">
                {props.icon_info.icon_name}
            </div>
            <div className="dashboard-sidebar-icon-name">
                {props.icon_info.field_name}
            </div>
        </div>
		)
}