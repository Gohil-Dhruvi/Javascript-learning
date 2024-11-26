class Animal{
    speak(){
        throw new Error("This method must be implemented by subclasses");
    }
}

class Dog extends Animal{
    speak(){
        console.log("Dog barks");
    }
}

const dog = new Dog();
dog.speak();

