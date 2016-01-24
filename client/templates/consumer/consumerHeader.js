Template.consumerHeader.created = function(){

};

Template.consumerHeader.rendered = function(){

};

Template.consumerHeader.helpers({
	id: function() {
		return Meteor.user()._id;
	},
  profile: function() {
    return Meteor.user().profile;
  }
});

Template.consumerHeader.events({
	'click .js-logout': function(event){
		event.preventDefault();
		Meteor.logout();
    Router.go('/marketPlace');
	}
});