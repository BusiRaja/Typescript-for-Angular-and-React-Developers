// Class encapsulates data for the object

class Students { 
	constructor(private fName,private lName) {}

	GetFullName():string {
		return this.fName + " " + this.lName;
	}
}

let s = new Students("Rajashekar Reddy","Busireddy");

console.log(s.GetFullName());

