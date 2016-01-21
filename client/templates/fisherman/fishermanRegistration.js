Template.fishermanRegister.created = function(){

};

Template.fishermanRegister.rendered = function(){

};

Template.fishermanRegister.helpers({});

Template.fishermanRegister.events({
	'submit form': function(event){
		event.preventDefault();
		var fisherman = {
			firstName: event.target.firstName.value,
			lastName: event.target.lastName.value,
			phone: event.target.phone.value,
			licLoc: event.target.licenceLoc.value,
			licName: event.target.licenceName.value,
			licNum: event.target.licenceNum.value,
			licEx: event.target.licenceEx.value,
		};
		var email = event.target.email.value;
		var password = event.target.password.value;
		Meteor.call("newFisherman", email, password, function(error, success) {
			if(error) {
				console.log(error.reason);
			}
			if(success) {
				Meteor.call("isFisherman", fisherman, function(error, success) {
					if(error) {
						console.log(error.reason);
					}
					if(success) {
						console.log('is fisherman', success);
					}
				});
				console.log('created', success);
			}
		});
		
		Meteor.loginWithPassword(event.target.email.value, event.target.password.value);
		Router.go('/marketPlace');
	}
});