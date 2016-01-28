var isValid = function(fisherman){
	if(!Modules.both.validators.phoneNumber(fisherman.phone)){
		return false;
	};
	return true;
};

Meteor.methods({
	addData: function(ad) {
		return Ads.insert(ad);
	},
	newUser: function(email, password){
		return Accounts.createUser({
			"email": email,
			"password": password,
		});
	},
	updateFisherman: function(fisherman){
		if(isValid(fisherman)) {
			return Meteor.users.update({_id:this.userId},{$set: {profile: fisherman, fisherman:true,}});
		} else {
			return "data not valid";
		}
	},
	updateConsumer: function(consumer){
		return Meteor.users.update({_id:this.userId},{$set: {profile: consumer}});
	},
});
