const mongoose=require('mongoose');
var UserAdmin = require("../Models/UserAdminSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = app => {
	app.post("/api/useradmin/new",(req,res)=>{
		UserAdmin.findOne({user_email:req.body.user_email}).then(user=>{
			if(user){
				res.status(200).send({'message':'User Already exist as Admin Member'})
			}
			else{
				const newUser = req.body;
				bcrypt.genSalt(10, (err, salt) => {
        		bcrypt.hash(newUser.user_password, salt, (err, hash) => {
          			if (err) throw err;
          			newUser.user_password = hash;
          			UserAdmin(newUser).save()
            		.then(user => res.json(user))
            		.catch(err => console.log(err));
        		});
      			});
			}
		})
	})

	app.get("/api/useradmin",(req,res)=>{
		UserAdmin.find({}).then(expenses=>{
			res.status(200).send(expenses);
		})
		.catch(err=>{
			res.status(400).send({'message':'Unable to Find Admin Member'});
		})
	})

	app.post("/api/useradmin/login", (req,res)=>{
		UserAdmin.findOne({user_email:req.body.user_email}).then(user=>{
			if(!user){
				res.status(200).send({'message':'E-Mail of the Admin Member Not Found'});
			}
			else{
				bcrypt.compare(req.body.user_password, user.user_password).then(isMatch => {
      				if (isMatch) {
        				jwt.sign({user_email:req.body.user_email},'user_admin_key',{expiresIn: 60*60*24},(err, token) => {
            				res.status(200).send({
              					'success': true,
              					'user_data':user,
              					'token': token
            				});
          				});
      				} 
      				else {
        				res.status(400).send({ 'message': "Entered Password is Incorrect" });
      				}
    			});
			}
		})
	})
};