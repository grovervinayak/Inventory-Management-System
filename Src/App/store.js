import {applyMiddleware, createStore,combineReducers} from "redux";
import {logger} from "redux-logger"
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import getMethodReducer from "./Reducers/getMethodReducer";
import addProductPageReducer from "./Reducers/addProductPageReducer";
import totalExpensesReducer from "./Reducers/totalExpensesReducer";
import totalOrdersReducer from "./Reducers/totalOrdersReducer";
import dashboardPageUpdateReducer from "./Reducers/dashboardPageUpdateReducer";
import addNewOrderReducer from "./Reducers/addNewOrderReducer";

const middleware = applyMiddleware(promise, thunk, logger);

let combinedReducer = combineReducers({
	getMethodReducer: getMethodReducer,
	addProductPageReducer: addProductPageReducer,
	totalExpensesReducer:totalExpensesReducer,
	totalOrdersReducer: totalOrdersReducer,
	dashboardPageUpdateReducer: dashboardPageUpdateReducer,
	addNewOrderReducer: addNewOrderReducer
});

export default createStore(combinedReducer, middleware)
