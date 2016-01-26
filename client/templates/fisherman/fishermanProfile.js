Template.fishermanProfile.created = function(){

};

Template.fishermanProfile.rendered = function(){

};

Template.fishermanProfile.helpers({
	formData: function(){
    	return Meteor.user().profile;
  	}
});

Template.fishermanProfile.events({
	'submit form': function(event) {
		event.preventDefault();
		var fisherman = {
			displayName: event.target.displayName.value,
			firstName: event.target.firstName.value,
			lastName: event.target.lastName.value,
			phone: event.target.phone.value,
			bio: event.target.bio.value,
			licLoc: event.target.licLoc.value,
			licName: event.target.licName.value,
			licNum: event.target.licNum.value,
			licEx: event.target.licEx.value,
			loc: event.target.loc.value,
			gear: event.target.gear.value
		};
		console.log("fisherman", fisherman);
		Meteor.call('updateFisherman', fisherman, function(error, success) {
			if(error){
				console.log(error.reason);
			}
			if(success){
				console.log(success);
				Router.go('/managePosts');
			}
		});
	}
});