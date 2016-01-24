Template.consumerRegister.created = function(){

};

Template.consumerRegister.rendered = function(){

};

Template.consumerRegister.helpers({});

Template.consumerRegister.events({
	'submit form': function(event){
		event.preventDefault();
		var consumer = {
      displayName: event.target.displayName.value,
			firstName: event.target.firstName.value,
			lastName: event.target.lastName.value,
			phone: event.target.phone.value,
		};
		var email = event.target.email.value;
		var password = event.target.password.value;
		Meteor.call("newUser", email, password, function(error, success) {
			if(error) {
				console.log(error.reason);
			}
			if(success) {
				Meteor.call("updateConsumer", consumer, function(error, success) {
					if(error) {
						console.log(error.reason);
					}
					if(success) {
						console.log('is consumer', success);
					}
				});
				console.log('created', success);
			}
		});

		Meteor.loginWithPassword(event.target.email.value, event.target.password.value);
		Router.go('/marketPlace');
	}
});