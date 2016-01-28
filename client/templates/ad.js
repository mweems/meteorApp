Template.ad.created = function(){

};

Template.ad.rendered = function(){

};

Template.ad.helpers({});

Template.ad.events({
	'click .contact': function(event) {
		event.preventDefault();
		var adId = $(event.currentTarget).parent('.ad').data('id');

	},
	'click .js-fishermanName': function(event,template){
		var userId = Template.instance().data.owner;
		Router.go("/fishermanProfileDisplay/" + userId);
	}
});
