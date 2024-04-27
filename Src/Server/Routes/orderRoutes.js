const mongoose=require('mongoose');
var Order = require("../Models/OrderSchema");

module.exports = app => {
	app.post("/api/orders/new",(req,res)=>{
		new Order(req.body).save().then(exp=>{
			res.status(200).send({'message':'Order is Added Successfully'});
		})
		.catch(err=>{

			res.status(400).send({'message':'Unable to Add Order'});
		})
	})

	app.get("/api/orders", (req,res)=>{
		Order.find({}).then(order=>{
			res.status(200).send(order);
		})
		.catch(err=>{
			console.log(err);
			res.status(400).send({'message':'Unable to fetch the Orders'});
		})
	})

	app.get("/api/orders/count", (req,res)=>{
		Order.find({}).countDocuments().then(order_count=>{
			res.status(200).send({'count':order_count});
		})
		.catch(err=>{
			res.status(200).send({'count':'Unable to fetch the number of Orders'});
		})
	})

	app.get("/api/orders/totalrevenue", (req,res)=>{
		var total_revenue = 0;
		Order.find({}).then(orders=>{
			orders.forEach((single_order,index)=>{
				total_revenue = total_revenue + single_order.total_amount;
			})
			res.status(200).send({'total_revenue':total_revenue});
		})
		.catch(err=>{
			res.status(200).send({'total_revenue':'Unable to fetch the number of Orders'});
		})
	})

	app.get("/api/orders/:id", (req,res)=>{
		Order.findById(req.params.id).then(order=>{
			res.status(200).send(order);
		})
		.catch(err=>{
			res.status(400).send({'message':'Unable to Find the Order'});
		})
	})

	app.delete("/api/orders/delete/:id",(req,res)=>{
		Order.findByIdAndDelete(req.params.id).then(order=>{
			res.status(200).send({'message':'Order is successfully Deleted'});
		})
		.catch(err=>{
			res.status(400).send({'message':'Unable to Delete the Order'});
		})
	})

	app.get("/api/orders/earned/revenue", (req,res)=>{
		var earned_revenue = 0;
		Order.find({}).then(orders=>{
			orders.forEach((single_order, index)=>{
				earned_revenue = earned_revenue + single_order.total_revenue;
			})
			res.status(200).send({'earned_revenue':earned_revenue});
		})
		.catch(err=>{
			res.status(400).send({'earned_revenue':'Due to Some Issues, Unable to Fetch Earned Revenue'});
		})
	})

	app.get("/api/orders/unique/customers", (req,res)=>{
		Order.distinct('customer_number').then(numbers=>{
			res.status(200).send({'unique_customers':numbers.length});
		})
		.catch(err=>{
			res.status(400).send({'unique_customers':'Due to Some Issues, Unable to Fetch Unique Customers'});
		})
	})

};