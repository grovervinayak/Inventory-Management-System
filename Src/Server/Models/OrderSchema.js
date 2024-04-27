const mongoose=require('mongoose');
const {Schema}=mongoose;
const orderSchema=new Schema({
	customer_number:Number,
	customer_address:String,
	order_date: String,
	total_amount:Number,
	cost_to_company:Number,
	total_revenue:Number,
	ordered_items:[
		{
			item_name:String,
			item_quantity:Number,
			item_price:Number,
			item_total_price:Number
		}
	]
});
module.exports = mongoose.model('order',orderSchema);