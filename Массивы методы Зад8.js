funcrion compareAge (person1, person 2) {
	return person1.age - person2.age;
}

var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };

var people = [ vasya , masha , vovochka ];

for (var i = 0; i < people.length; i++) {
	console.log(people[i].name);
}

