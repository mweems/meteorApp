Template.fishermanHeader.created = function(){

};

Template.fishermanHeader.rendered = function(){

};

Template.fishermanHeader.helpers({
	id: function() {
		return Meteor.user()._id;
	},
  profile: function() {
    return Meteor.user().profile;
  }
});

Template.fishermanHeader.events({
	'click .js-logout': function(event){
		event.preventDefault();
		Meteor.logout();
    Router.go('/marketPlace');
	}
});