//complete this code
class Person {
	constructor(name, age){
		this._name =  name;
		this._age = age;
	}

	
	set age(age){
		this._age = 10;
	}
	get name(){
		console.log(this._name)
	}
}

class Student extends Person {
	constructor(name, age){
		super(name, age);
	}
	
	function study(){
		console.log(`${this.name} is studying`);
	}
}

class Teacher extends Person {
	constructor(name, age){
		super(name, age);
	}
	function teach(){
		console.log(`${this.name} is teaching`);
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
