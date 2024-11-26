// 3 types of inheritance

// #1 Single inheritance

// class Parent {
//     DisplayParent() {
//         console.log(`Parent class is called...`);
//     }
// }
// class Child extends Parent{
//     Child() {
//         console.log(`Child class is called...`);
//     }
// }

// let obj = new Child();
// obj.DisplayParent();
// obj.Child();

// #2 Multiple

// class GrandParent{
//     GrandParent(){
//         console.log("GrandParent called...");
//     }
// }

// class Parent extends GrandParent{
//     Parent(){
//         console.log("Parent called...");
//     }
// }

// class Child extends Parent{
//     Child(){
//         console.log("Child called...");
//     }
// }

// const data = new Child();
// data.GrandParent();
// data.Parent();
// data.Child();

// #3 Hierarchical 

class Student{
    Student(){
        console.log(`Student called...`);
    }
}

class Total extends Student{
    Total(){
        console.log(`Total Marks called...`);
    }
}

class Person1 extends Total{
    Person1(){
        console.log(`Person1 called...`);
    }
}

class Person2 extends Total{
    Person2(){
        console.log(`Person2 called...`);
    }
}

class Average extends Student{
    Average(){
        console.log(`Average Marks called...`);
    }
}

// let object = new Total();
// object.Total();
// object.Student();

// let object = new Person2();
// object.Person2();
// object.Total();
// object.Student();

// let object = new Average();
// object.Average();
// object.Student();