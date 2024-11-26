// class & object 

// class Hello {
//     SayGreeting(){
//         console.log('Hello Guys...'); 
//     }
//     Display(){
//         return `Hello , Red & White students`
//     }
// }

// const data = new Hello()
// data.SayGreeting()
// console.log(data.Display());

// const obj = new Hello()
// obj.Display()

// class Hello {
    // constructor(){
    //     console.log(`Automatically Called`);
    // }
//     constructor(name,age){
//         this.name = "Dhruvi" ;
//         this.age = 20 ;
//         console.log(`Automatically Called`, this.name ,this.age );
//     }
//     SayGreeting(){
//         console.log('Hello Guys...'); 
//     }
//     Display(Age){
//         return (Age >= this.age)
//     }
// }

// const data = new Hello()
// data.SayGreeting()
// console.log(data.Display());

// Student Result 

function calculateResult() {
    const student = {
        name: "Gohil Dhruvi",
        class: 10,
        subjects: {
            math: 91,
            science: 90,
            english: 88,
            socialScience: 88,
            hindi: 87
        }
    };

    const totalMarks = Object.values(student.subjects).reduce((total, mark) => total + mark, 0);

    const subjectCount = Object.keys(student.subjects).length;
    const averageMarks = totalMarks / subjectCount;

    let grade = "";
    if (averageMarks >= 90) {
        grade = "A+";
    } else if (averageMarks >= 80) {
        grade = "A";
    } else if (averageMarks >= 70) {
        grade = "B";
    } else if (averageMarks >= 60) {
        grade = "C";
    } else {
        grade = "Fail";
    }

    console.log(`Student Name: ${student.name}`);
    console.log(`Class: ${student.class}`);
    console.log(`Total Marks: ${totalMarks}`);
    console.log(`Average Marks: ${averageMarks.toFixed(2)}`);
    console.log(`Grade: ${grade}`);
}

calculateResult();

// Person Bio-Data

class Person {
    constructor(name, age, gender, address, phone, email, occupation) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.occupation = occupation;
    }

    displayBioData() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Gender: ${this.gender}`);
        console.log(`Address: ${this.address}`);
        console.log(`Phone: ${this.phone}`);
        console.log(`Email: ${this.email}`);
        console.log(`Occupation: ${this.occupation}`);
    }
}

const personbio = new Person(
    "Gohil Dhruvi",
    20,
    "Female",
    "Surat, Gujarat",
    "XXXX465993",
    "gohildhruvi16 @gmail.com",
    "Software Engineer"
);

personbio.displayBioData();
