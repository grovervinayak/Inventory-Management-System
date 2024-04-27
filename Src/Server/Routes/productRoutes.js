const mongoose=require('mongoose');
var Product = require("../Models/ProductSchema");

module.exports = app => {

	app.post('/api/product/new',(req,res)=>{
		Product.findOne({product_name:req.body.product_name, 
			             'details.cost_price':req.body.cost_price,
			             'details.selling_price':req.body.selling_price}).then((product)=>{
			var product_data={
						"product_name":req.body.product_name,
						"product_image":req.body.product_image,
						"details":{
							"cost_price":req.body.cost_price,
							"selling_price":req.body.selling_price,
							"in_stock":req.body.in_stock,
							"total_quantities":req.body.total_quantities,
							"profit_rate":req.body.profit_rate
						}
					};
			if(product){
				if(product.details.cost_price === req.body.cost_price && 
			   	   product.details.selling_price === req.body.selling_price){
					res.status(400).send({'message':'The Product is already Present'});
				}
				else{
					
					new Product(product_data).save().then((pro)=>{
						res.status(200).send({'message':'Product is added successfully'});
					})
					.catch(err=>{
						res.status(400).send({'message':'Unable to add product'});
					})
				}
			}
			else{
				new Product(product_data).save().then((pro)=>{
					res.status(200).send({'message':'Product is added successfully'});
				}).catch(err=>{
						res.status(400).send({'message':'Unable to add product'});
					})
			}
		})
		.catch(err=>{
			res.status(400).send({'message':'Unable to add product'});
		})
	});


	app.get("/api/products",(req,res)=>{
		Product.find({}).then(products=>{
			res.status(200).send(products);
		})
		.catch(err=>{
			res.status(400).send({'message':'Unable to Find Products'});
		})
	})


	app.get("/api/product/:id",(req,res)=>{
		Product.findById(req.params.id).then(product=>{
			res.status(200).send(product);
		})
		.catch(err=>{
			res.status(400).send({'message':'Unable to Find the Product'});
		})
	})


	app.get("/api/products/count",(req,res)=>{
		Product.find({}).countDocuments().then(count=>{
			res.status(200).send({'count':count});
		})
		.catch(err=>{
			res.status(400).send({'count':'Unable to Find the Number of Products'});
		})
	})


	app.put("/api/product/update/:id",(req,res)=>{
		Product.findByIdAndUpdate(req.params.id, req.body).then(product=>{
			res.status(200).send({'message':'Updated successfully'});
		})
		.catch(err=>{
			res.status(400).send({'message':'Unable to Update the Product'});
		})
	})


	app.delete("/api/product/delete/:id",(req,res)=>{
		Product.findByIdAndDelete(req.params.id).then(product=>{
			res.status(200).send({'message':'Product is successfully Deleted'});
		})
		.catch(err=>{
			res.status(400).send({'message':'Unable to Delete the Product'});
		})
	})

	app.put("/api/product/updateinstock", (req,res)=>{
		var obj_values = req.body.ordered_items;
		var message = "";
		obj_values.forEach((single_item,index)=>{
			Product.findById(single_item.id, (err, product)=>{
				product.details.in_stock = product.details.in_stock - single_item.in_stock;
				product.save();
			})
		})
		res.send({'message':"message"});
	})

	app.put("/api/product/editstock/:id", (req,res)=>{
		Product.findById(req.params.id).then(product=>{
			product.details.in_stock = parseInt(req.body.in_stock,10);
			product.save().then(pro=>{
				res.status(200).send({'message':'The Stocks are Updated Successfully'});
			})
			.catch(err=>{
				res.status(400).send({'message':'Due to some Issues, Unable to update the Stocks'});
			});	
		})
		.catch(err=>{
			res.status(400).send({'message':'Due to some Issues, Unable to update the Stocks'});
		});
	})

	app.put("/api/product/addnewstock/:id", (req,res)=>{
		Product.findById(req.params.id).then(product=>{
			product.details.in_stock = product.details.in_stock + parseInt(req.body.in_stock,10);
			product.details.total_quantities = product.details.total_quantities + parseInt(req.body.in_stock,10);
			product.save().then(pro=>{
				res.status(200).send({'message':'New Stocks are Added Successfully'});
			})
			.catch(err=>{
				res.status(400).send({'message':'Due to Some Issues, Unable to Add New Stocks'});
			})
		})
		.catch(err=>{
			res.status(400).send({'message':'Due to Some Issues, Unable to Add New Stocks'});
		})
	})


};