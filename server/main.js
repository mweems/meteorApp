// create dummy fishermen
if(Meteor.users.find().count() === 0){
	let dummyData = [
		{
			firstName : 'Bob',
			lastName : 'Jones',
			phone: '8086338787',
			licLoc: 'Oahu',
			licName: 'Bob Jones',
			licNum: '989898',
			licEx: moment.unix('subtract 5 days'),
			dateJoined: moment.unix('subtract 3 days')
		},
			{
			firstName : 'Jim',
			lastName : 'Bobsonem',
			phone: '8099938787',
			licLoc: 'Maui',
			licName: 'jimBodsonem',
			licNum: '988898',
			licEx: moment.unix('subtract 22 days'),
			dateJoined: moment.unix('subtract 5 days')
		},
			{
			firstName : 'Tom',
			lastName : 'Lee',
			phone: '0006338787',
			licLoc: 'Oahu',
			licName: 'Tom Lee',
			licNum: '989898',
			licEx: moment.unix('subtract 22 days'),
			dateJoined: moment.unix('subtract 2 days')
		}
    ];
    _.each(dummyData, function(user){
    	Meteor.users.insert(user);
    });
	
}
if(Ads.find().count() === 0){
	let dummyData = [
		{
			firstName : 'Bob',
			lastName : 'Jones',
			phone: '8086338787',
			fish: 'Ahi',
			size: '10-20lbs',
			quantity: 3,
			price: "$10",
			perPound: true,
			wholeFish: true,
			loc: 'Town',
			addDet: 'big kine fish',
			createdAt: moment.unix('subtract 3 days'),
			owner: Meteor.users.findOne({firstName: 'Bob'})._id 
		},
			{
			firstName : 'Bob',
			lastName : 'Jones',
			phone: '8086338787',
			fish: 'Mahi',
			size: '20-30lbs',
			quantity: 6,
			price: "$8",
			perPound: true,
			wholeFish: true,
			loc: 'Town',
			addDet: 'bigger kine fish',
			createdAt: moment.unix('subtract 3 days'),
			owner: Meteor.users.findOne({firstName: 'Bob'})._id 
		},
			{
			firstName : 'Tom',
			lastName : 'Lee',
			phone: '0006338787',
			fish: 'Opa',
			size: '50lbs',
			quantity: 2,
			price: "$12",
			perPound: true,
			wholeFish: true,
			loc: 'NorthShore',
			addDet: 'Ho Brah come check dis fish',
			createdAt: moment.unix('subtract 3 days'),
			owner: Meteor.users.findOne({firstName: 'Tom'})._id 
		}
    ];
    _.each(dummyData, function(ad){
    	Ads.insert(ad);
    });
	
}