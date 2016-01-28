Router.configure({
	layoutTemplate: 'baseLayout'
});

Router.route('', {
	path: '/',
	template: 'marketPlace',
	subscriptions: function() {
		return Meteor.subscribe('ads');
	},
	data: function() {
		return Ads.find({}, {sort: {createdAt: -1}});
	}
});
Router.route('marketPlace', {
	path: '/marketPlace',
	template: 'marketPlace',
	subscriptions: function() {
		return Meteor.subscribe('ads');
	},
	data: function() {
		return Ads.find({}, {sort: {createdAt: -1}});
	},
});
Router.route('managePosts', {
	path: '/managePosts',
	template: 'managePosts',
	subscriptions: function() {
		return [
			Meteor.subscribe('fishermanAds'),
			Meteor.subscribe('thisUser'),
		];
	},
	data: function() {
		return Ads.find({}, {sort: {createdAt: -1}});
	}
});
Router.route('fishermanRegister', {
	path: '/fishermanRegister',
	template: 'fishermanRegister'
});
Router.route('consumerRegister', {
	path: '/consumerRegister',
	template: 'consumerRegister'
});
Router.route('fishermanProfileDisplay', {
	path: '/fishermanProfileDisplay/:_id',
	template: 'fishermanProfileDisplay',
	subscriptions: function() {
		return Meteor.subscribe('userProfile', this.params._id);
	},
	data: function() {
		return Meteor.users.findOne({_id: this.params._id});
	} 
});
Router.route('consumerProfile', {
	path: '/consumerProfile/:_id',
	template: 'consumerProfile',
});
Router.route('adForm', {
	path: '/newAd',
	template: 'adForm',
});
Router.route('ad', {
	path: '/ad/:_id',
	template: 'ad',
	subscriptions: function() {
		return Meteor.subscribe('adDetail', this.params._id);
	},
	data: function() {
			return Ads.findOne({_id: this.params._id});
		}
});
