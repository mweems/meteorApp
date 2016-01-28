IR_BeforeHooks = {
	isLoggedIn: function(){
		if(Meteor.userId()){
			this.next();
		}
		else{
			Router.go('/');
			this.next();
		}
	}
}