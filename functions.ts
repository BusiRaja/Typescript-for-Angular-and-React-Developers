// Functions are the fundamental build block 

//  Parameters with types

var studentsList = [
    { Name: "James", Age: 30, Phone: 1234567890 },
    { Name: "Jack", Age: 28, Phone: 1234567890 },
    { Name: "Jill", Age: 24, Phone: 1234567890 }
];
 
function studentData(student) {
	student.forEach(element => {
    	console.log(studentsList.indexOf(element) + "My name is " + element.Name + ". I am " + element.Age + " years old. My phone number is " + element.Phone);
	});
}

studentData(studentsList);

// Rest Parameters don't restrict the number of values that you can pass to a function  The values passed must be of same data type

function GetnumberList(...nums: number[]) {
	nums.forEach(value => {
		console.log("Number:" + value)
	})
}

GetnumberList(1,2,3,4);

// Default Parameters

function GetInfo(info = "Hello World") {
	console.log(info);
}

GetInfo("Default parameter replaced with this text");