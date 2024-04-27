const mongoose=require('mongoose');
var Expense = require("../Models/expenseSchema");

module.exports = app => {
	app.post("/api/expense/new",(req,res)=>{
		new Expense(req.body).save().then(exp=>{
			res.status(200).send({'message':'Expense is Added Successfully'});
		})
		.catch(err=>{
			res.status(400).send({'message':'Unable to Add Expense'});
		})
	})

	app.get("/api/expenses",(req,res)=>{
		Expense.find({}).then(expenses=>{
			res.status(200).send(expenses);
		})
		.catch(err=>{
			res.status(400).send({'message':'Unable to Find Expenses'});
		})
	})

	app.get("/api/expenses/total", (req,res)=>{
		var expense_total = 0;
		Expense.find({}).then(expenses=>{
			expenses.forEach((single_expense,index)=>{
				expense_total = expense_total + single_expense.expense_price;
			});
			res.status(200).send({'total_expense':expense_total});		
		})
		.catch(err=>{
			res.status(400).send({'total_expense':'Unable to fetch the total expenses'});
		})
	})

	app.get("/api/expenses/usedrevenue", (req,res)=>{
		var used_revenue_total = 0;
		Expense.find({}).then(expenses=>{
			expenses.forEach((single_expense,index)=>{
				if(single_expense.revenue_used === true){
					used_revenue_total = used_revenue_total + single_expense.expense_price;
				}
			});
			res.status(200).send({'used_revenue_total':used_revenue_total});		
		})
		.catch(err=>{
			res.status(400).send({'used_revenue_total':'Unable to fetch the total expenses'});
		})
	})
};