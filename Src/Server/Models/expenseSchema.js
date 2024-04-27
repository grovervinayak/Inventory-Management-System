const mongoose=require('mongoose');
const {Schema}=mongoose;
const expenseSchema=new Schema({
	expense_name:String,
	expense_price:Number,
	revenue_used:Boolean,
	expense_division:{
		vinayak:Number,
		viplove:Number,
		rudraksh:Number,
		abhishek:Number
	}
});
module.exports = mongoose.model('expense',expenseSchema);