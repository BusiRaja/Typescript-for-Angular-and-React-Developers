// Interfaces are used for type-checking

interface studentInfo {
	Name: string,
	Age: Number,
	Phone: Number
}

let student:studentInfo = {
	Name: "Raja",
	Age: 28,
	Phone: 1234567890
}

let studentsList:studentInfo[] = [
    { Name: "James", Age: 30, Phone: 1234567890 },
    { Name: "Jack", Age: 28, Phone: 1234567890 },
    { Name: "Jill", Age: 24, Phone: 1234567890 }
];

function studentData(student:studentInfo[]) {
	student.forEach(element => {
    	console.log("My name is " + element.Name + ". I am " + element.Age + " years old. My phone number is " + element.Phone);
	});
}

studentData(studentsList);