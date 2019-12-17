var pemainBola = [
	'Liverpool',
	1892,
	['jearsey','shoes','shocks'],
	{
		name: 'Salah',
		number: 10,
		lineUp: true
	},
	function(){return 'attacker'}
]

console.log(pemainBola[0]);
console.log(pemainBola[0+1+1]);
console.log(pemainBola[0+1+1][0]);
console.log(pemainBola[2][1]);
console.log(pemainBola[3]["name"]);
console.log(pemainBola[4]());

var Sepeda={
	color: ['black','white','blue'],
	jenis : 'BMX',
	year : 2018,
	maju : function (){return 'maju'},
	mundur: function (){return 'mundur'}
}

console.log(Sepeda);
console.log(Sepeda.color);
console.log(Sepeda.color[1]);
console.log(Sepeda.maju());
console.log(Sepeda.mundur());

console.log(Sepeda['color'][2]);
console.log(Sepeda['jenis']);
console.log(Sepeda['maju']());

var car = {
	made: 'honda',
	speed: 160,
	engine:{
		size: 2.5,
		made: 'Daihatsu',
		fuel: 'Pertamax',
		piston: [
			'2010',
			{make: 'China'},
			{make: 'Japan'}
		]
	},
	drive: function(){return 'drive';}
}

console.log(car);
console.log(car.made);
console.log(car.engine.piston[2].make);

console.log(car['engine']['size']);
console.log(car['drive']());
console.log(car['engine']['piston'][1]['make']);