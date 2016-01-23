Template.fishermanHeader.created = function(){

};

Template.fishermanHeader.rendered = function(){

};

Template.fishermanHeader.helpers({
	id: function() {
		return Meteor.user()._id;
	}
});

Template.fishermanHeader.events({
	'click .js-logout': function(event){
		event.preventDefault();
		Meteor.logout();
    Router.go('/marketPlace');
	}
});