//complete this code
class Person {
	Person(name, age){
		this.name =  name;
		this.age = age;
	}

	
	set age(age){
		this.age = 10;
	}
	get name(){
		console.log(this.name)
	}
}

class Student extends Person {
	function study(){
		console.log(`${this.name} is studying`);
	}
}

class Teacher extends Person {
	function teach(){
		console.log(`${this.name} is teaching`);
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
