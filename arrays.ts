// Array is collection of values

let student = {
	Name: "Raja",
	Age: 28,
	Phone: 12345678
}

let studentsList = [
	{Name:"James",Age:30,Phone:1234567890},
	{Name:"Jack",Age:28,Phone:1234567890},
	{Name:"Jill",Age:24,Phone:1234567890}
]

studentsList.push(student);

studentsList.forEach(function(element){
	console.log(studentsList.indexOf(element) + " My name is " + element.Name + ". I am " + element.Age + " years old. My phone number is " + element.Phone  );
});


