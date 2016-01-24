Template.adForm.created = function(){

};

Template.adForm.rendered = function(){

};

Template.adForm.helpers({
	formData: function(){
    	return Meteor.user().profile;
  	}
});

Template.adForm.events({
	'submit form': function(event) {
		event.preventDefault();

		var newAd = {
			firstName: event.target.firstName.value,
			lastName: event.target.lastName.value,
			phone: event.target.phone.value,
			species: event.target.species.value,
			size: event.target.size.value,
			quantity: event.target.quantity.value,
			price: event.target.price.value,
			perPound: event.target.perPound.value,
			wholeFish: event.target.wholeFish.value,
      filetsAvail: event.target.filetsAvail.value,
			loc: event.target.loc.value,
			addDet: event.target.addDet.value,
			createdAt: new Date(),
			owner: Meteor.userId(),
			id: Meteor.user()
		}
		console.log(newAd.fish);
		Meteor.call("addData", newAd, function(error, success) {
			if(error) {
				console.log(error);
			}
			if(success) {
				Router.go('/managePosts');
			}
		});
	}
});
