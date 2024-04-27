import {getCorrectConstant} from '../Core/ActionConstants';

export const ACTION_CONSTANTS = {
	FETCH_PRODUCTS:"FETCH_PRODUCTS",
	FETCH_SINGLE_PRODUCT:"FETCH_SINGLE_PRODUCT",
	FETCH_PRODUCT_COUNT:"FETCH_PRODUCT_COUNT",
	ADD_PRODUCT:"ADD_PRODUCT",
	ADD_EXPENSE:"ADD_EXPENSE",
	UPDATE_PRODUCT:"UPDATE_PRODUCT",
	DELETE_PRODUCT:"DELETE_PRODUCT",
	ADD_PRODUCT_PAGE:"ADD_PRODUCT_PAGE",
	ADD_EXPENSE_PAGE:"ADD_EXPENSE_PAGE",
	FETCH_EXPENSES: "FETCH_EXPENSES",
	FETCH_TOTAL_EXPENSES:"FETCH_TOTAL_EXPENSES",
	FETCH_USED_REVENUE:"FETCH_USED_REVENUE",
	FETCH_TOTAL_REVENUE:"FETCH_TOTAL_REVENUE",
	FETCH_ORDERS:"FETCH_ORDERS",
	FETCH_SINGLE_ORDER:"FETCH_SINGLE_ORDER",
	FETCH_ORDERS_COUNT:"FETCH_ORDERS_COUNT",
	DASHBOARD_PAGE_UPDATE:"DASHBOARD_PAGE_UPDATE",
	FETCH_USER_ADMIN:"FETCH_USER_ADMIN",
	ADD_ORDER:"ADD_ORDER",
	ADD_NEW_USER_ADMIN:"ADD_NEW_USER_ADMIN",
	USER_ADMIN_LOGIN:"USER_ADMIN_LOGIN",
	UPDATE_IN_STOCK:"UPDATE_IN_STOCK",
	EDIT_PRODUCT_STOCK:"EDIT_PRODUCT_STOCK",
	ADD_PRODUCT_STOCK:"ADD_PRODUCT_STOCK",
	DELETE_ORDER:"DELETE_ORDER",
	FETCH_EARNED_REVENUE:"FETCH_EARNED_REVENUE",
	FETCH_UNIQUE_CUSTOMERS:"FETCH_UNIQUE_CUSTOMERS",
	CHANGE_ITEM_NUMBER:"CHANGE_ITEM_NUMBER",
	ENTER_USER_ORDER_INFO:"ENTER_USER_ORDER_INFO",
	ADD_NEW_ORDER_INFO:"ADD_NEW_ORDER_INFO"
};

export const FETCH_PRODUCTS = (type) => {
  return getCorrectConstant(ACTION_CONSTANTS.FETCH_PRODUCTS,type)
};

export const FETCH_SINGLE_PRODUCT = (type) => {
  return getCorrectConstant(ACTION_CONSTANTS.FETCH_SINGLE_PRODUCT,type)
};

export const FETCH_PRODUCT_COUNT = (type) => {
  return getCorrectConstant(ACTION_CONSTANTS.FETCH_PRODUCT_COUNT,type)
};

export const ADD_PRODUCT = (type) => {
  return getCorrectConstant(ACTION_CONSTANTS.ADD_PRODUCT,type)
};

export const ADD_EXPENSE = (type) => {
  return getCorrectConstant(ACTION_CONSTANTS.ADD_EXPENSE,type)
};

export const DELETE_PRODUCT = (type) => {
  return getCorrectConstant(ACTION_CONSTANTS.DELETE_PRODUCT,type)
};

export const UPDATE_PRODUCT = (type) => {
  return getCorrectConstant(ACTION_CONSTANTS.UPDATE_PRODUCT,type)
};

export const FETCH_EXPENSES = (type) => {
  return getCorrectConstant(ACTION_CONSTANTS.FETCH_EXPENSES,type)
};

export const FETCH_TOTAL_EXPENSES = (type) => {
  return getCorrectConstant(ACTION_CONSTANTS.FETCH_TOTAL_EXPENSES,type)
};

export const FETCH_USED_REVENUE = (type) => {
  return getCorrectConstant(ACTION_CONSTANTS.FETCH_USED_REVENUE,type)
};

export const FETCH_TOTAL_REVENUE = (type) => {
  return getCorrectConstant(ACTION_CONSTANTS.FETCH_TOTAL_REVENUE,type)
};

export const FETCH_ORDERS = (type) => {
  return getCorrectConstant(ACTION_CONSTANTS.FETCH_ORDERS,type)
};

export const FETCH_SINGLE_ORDER = (type) => {
  return getCorrectConstant(ACTION_CONSTANTS.FETCH_SINGLE_ORDER,type)
};

export const FETCH_ORDERS_COUNT = (type) => {
  return getCorrectConstant(ACTION_CONSTANTS.FETCH_ORDERS_COUNT,type)
};

export const FETCH_USER_ADMIN = (type) => {
  return getCorrectConstant(ACTION_CONSTANTS.FETCH_USER_ADMIN,type)
};

export const ADD_ORDER = (type) => {
  return getCorrectConstant(ACTION_CONSTANTS.ADD_ORDER,type)
};

export const ADD_NEW_USER_ADMIN = (type) => {
  return getCorrectConstant(ACTION_CONSTANTS.ADD_NEW_USER_ADMIN,type)
};

export const USER_ADMIN_LOGIN = (type) => {
  return getCorrectConstant(ACTION_CONSTANTS.USER_ADMIN_LOGIN,type)
};

export const UPDATE_IN_STOCK = (type) => {
  return getCorrectConstant(ACTION_CONSTANTS.UPDATE_IN_STOCK,type)
};

export const EDIT_PRODUCT_STOCK = (type) => {
  return getCorrectConstant(ACTION_CONSTANTS.EDIT_PRODUCT_STOCK,type)
};

export const ADD_PRODUCT_STOCK = (type) => {
  return getCorrectConstant(ACTION_CONSTANTS.ADD_PRODUCT_STOCK,type)
};

export const DELETE_ORDER = (type) => {
  return getCorrectConstant(ACTION_CONSTANTS.DELETE_ORDER,type)
};

export const FETCH_EARNED_REVENUE = (type) => {
  return getCorrectConstant(ACTION_CONSTANTS.FETCH_EARNED_REVENUE,type)
};

export const FETCH_UNIQUE_CUSTOMERS = (type) => {
  return getCorrectConstant(ACTION_CONSTANTS.FETCH_UNIQUE_CUSTOMERS,type)
};

export const ADD_NEW_ORDER_INFO = (type) => {
  return getCorrectConstant(ACTION_CONSTANTS.ADD_NEW_ORDER_INFO,type)
};
