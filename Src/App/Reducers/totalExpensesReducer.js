import {ACTION_CONSTANTS, FETCH_EXPENSES}
 from "../Utils/Constants";
import {CONSTANT_TYPES} from "../Core/ActionConstants";

export default function reducer(state = {
	expense_list_heading:["Expense Name", "Expense Price", "Revenue Used", "Vinayak", "viplove", "Rudraksh", "Abhishek"],
	expense_list_body:[{
		"expense_name":"",
		"expense_price":0,
		"revenue_used":false,
		"vinayak":"",
		"viplove":"",
		"rudraksh":"",
		"abhishek":""
	}]
}, action){
	switch(action.type){
		case FETCH_EXPENSES(CONSTANT_TYPES.FULFILLED): {
			var expense_list_body=[];
			action.payload.data.forEach((single_expense, index)=>{
				var expense_data = {
					"expense_name":single_expense.expense_name,
					"expense_price":single_expense.expense_price,
					"revenue_used":single_expense.revenue_used,
					"vinayak":single_expense.expense_division.vinayak,
					"viplove":single_expense.expense_division.viplove,
					"rudraksh":single_expense.expense_division.rudraksh,
					"abhishek":single_expense.expense_division.abhishek
				};
				expense_list_body.push(expense_data);
			})
			return{...state, expense_list_body:expense_list_body}
		}
	}
	return state;
}
