Template.fishermanProfileDisplay.created = function(){
	console.log(this);
};

Template.fishermanProfileDisplay.rendered = function(){

};

Template.fishermanProfileDisplay.helpers({
  	formatDate: function(date){
  		return moment.unix(date).format("MMM DD YYYY");
  	},
  	isMyProfile: function(){
  		return Meteor.userId() === Template.instance().data._id;
  	}
});

Template.fishermanProfileDisplay.events({
});