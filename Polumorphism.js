// Overriding

class Parent {
    greet(){
        console.log(`Hello from parent!`);
    }
}

class Child extends Parent {
    greet(){
        console.log(`Hello from child!`);
    }
}

const obj1 = new Parent();
obj1.greet();

const obj2 = new Child();
obj2.greet();

  