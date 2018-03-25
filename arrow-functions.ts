
// Functions which don't have Name/identifiers are considered as Anonymous functions. These functions are dynamic and called during runtime

let getName = function(fname:string,lName:string) {

	return "My name is " + fname + " " + lName;
}

console.log(getName("Rajashekar Reddy", "Busireddy"));


// Arrow/Lambda functions are concise mechanism to represent anonymous functions


let getNameArrrow =(fword:string,lword:string) => { return "This is an example to represent " + fword + " " + lword; }

console.log(getNameArrrow("Arrow ", "Functions"));