const mongoose=require('mongoose');
const {Schema}=mongoose;
const productSchema=new Schema({
	product_name:String,
	product_image:String,
	details:{
		cost_price:Number,
		selling_price:Number,
		total_quantities:Number,
		in_stock:Number,
		profit_rate:Number
	}
});
module.exports = mongoose.model('product',productSchema);