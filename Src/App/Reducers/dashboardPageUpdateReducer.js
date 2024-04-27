import {
  ACTION_CONSTANTS
} from "../Utils/Constants.js";
import {CONSTANT_TYPES} from "../Core/ActionConstants.js";
import React from "react";
import DashboardPage from "../Components/DashboardPage";
export default function reducer(state = {
	dashboard_page_name:<DashboardPage/>,
	dashboard_field_name:"Dashboard"
}, action) {
  switch (action.type) {
    case ACTION_CONSTANTS.DASHBOARD_PAGE_UPDATE:{
		var dashboard_page_name=action.page_name;
	    var dashboard_field_name=action.field_name;

      return {dashboard_page_name:dashboard_page_name,dashboard_field_name:dashboard_field_name}
    }
  }
  return state;
}
