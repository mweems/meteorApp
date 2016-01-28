Template.fishermanRegister.created = function(){

};

Template.fishermanRegister.rendered = function(){

};

Template.fishermanRegister.helpers({
	licExYearSelect: function(){
		var years = '';
		for(var i=2016; i<=2030; i++){
			 years += '<option value='+i+'>'+i+'</option>';
		};
		return years;
	},
	licExDaySelect: function(){
		var days = '';
		for(var i=1; i<=31; i++){
			days += '<option value='+i+'>'+i+'</option>';
		};
		return days;
	}
});

Template.fishermanRegister.events({
	'submit form': function(event, template){
		event.preventDefault();
		
		var licExDate = function(){
			var licMonth = event.target.licMonth.value;
			var licYear = event.target.licYear.value;
			var licDay = event.target.licDay.value;
			console.log(moment(licYear + ' ' + licMonth + ' ' + licDay, 'YYYY MM DD').unix());
			return moment(licYear + ' ' + licMonth + ' ' + licDay, 'YYYY MM DD').unix();
		}
		var fisherman = {
			firstName: event.target.firstName.value,
			lastName: event.target.lastName.value,
			phone: event.target.phone.value,
			licLoc: event.target.licLoc.value,
			licName: event.target.licName.value,
			licNum: event.target.licNum.value,
			licEx: licExDate(),
			dateJoined: moment().unix()
		};
		var email = event.target.email.value;
		var password = event.target.password.value;
		Meteor.call("newUser", email, password, function(error, success) {
			if(error) {
				console.log(error.reason);
			}
			if(success) {
				Meteor.call("updateFisherman", fisherman, function(error, success) {
					if(error) {
						console.log(error.reason);
					}
					if(success) {
						console.log('is fisherman', success);
					}
				});
				console.log('created', success);
			}
		});
		
		Meteor.loginWithPassword(event.target.email.value, event.target.password.value);
		Router.go('/marketPlace');
	}
});