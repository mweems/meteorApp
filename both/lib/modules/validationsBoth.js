Modules.both.validators = {
	phoneNumber: function(number){
		var reg = /[0-9]/g;
		var num = number.match(reg).join('');
		console.log(num);
		var error = {};
		if(num.length === 10){
			return num;
		} else {
			error.phoneError = "number not right length";
		}
		return error;
	}
};