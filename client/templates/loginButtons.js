Template.loginButtons.created = function(){
};

Template.loginButtons.rendered = function(){
};

Template.loginButtons.helpers({});

Template.loginButtons.events({
	'submit form': function(event, data){
		event.preventDefault();
		var email = event.target.loginEmail.value;
		var password = event.target.loginPassword.value;
		Meteor.loginWithPassword(email, password);
		Router.go('/marketPlace');
	}
});