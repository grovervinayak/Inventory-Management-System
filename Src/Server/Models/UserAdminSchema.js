const mongoose=require('mongoose');
const {Schema}=mongoose;
const userAdminSchema=new Schema({
	user_email:String,
	user_name:String,
	user_password:String,
	user_image:String,
	user_type:String,
	user_designation:String
});
module.exports = mongoose.model('user_admin',userAdminSchema);