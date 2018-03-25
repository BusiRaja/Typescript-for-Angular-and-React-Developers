//  Creating reusable components  is generics i.e, being able to create a component that can work over a variety of types rather than a single one which allows users to consume these components and use their own types

interface studentInfo {
	Name: string,
	Age: Number,
	Phone: Number
}



let studentsList:Array<studentInfo> = [
    { Name: "James", Age: 30, Phone: 1234567890 },
    { Name: "Jack", Age: 28, Phone: 1234567890 },
    { Name: "Jill", Age: 24, Phone: 1234567890 }
];

function studentData(student:Array<studentInfo>) {
	student.forEach(element => {
    	console.log("My name is " + element.Name + ". I am " + element.Age + " years old. My phone number is " + element.Phone);
	});
}

studentData(studentsList);