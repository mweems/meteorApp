Template.consumerProfile.created = function(){

};

Template.consumerProfile.rendered = function(){

};

Template.consumerProfile.helpers({
	formData: function(){
    	return Meteor.user().profile;
  	}
});

Template.consumerProfile.events({
	'submit form': function(event) {
		event.preventDefault();
		var consumer = {
			displayName: event.target.displayName.value,
			firstName: event.target.firstName.value,
			lastName: event.target.lastName.value,
			phone: event.target.phone.value,
			bio: event.target.bio.value,
			loc: event.target.loc.value
		};
		Meteor.call('updateConsumer', consumer, function(error, success) {
			if(error){
				console.log(error.reason);
			}
			if(success){
				console.log(success, "hi therer");
				Router.go('/managePosts');
			}
		});
	}
});