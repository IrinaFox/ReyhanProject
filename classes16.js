class Animal {
    constructor(name, age, color) {
        this.name = name;
        this.age = age;
        this.color = color;
    }

    sayHi() {
        console.log("Hi" +' '+ this.name);
    }

    sayTheYearOfBirthday() {
        console.log("You are " + this.age + " years old");
    }

    sayColor() {
        console.log("Your color is " + this.color);
    }
}

//test

const myAnimal = new Animal('Pig', 5, 'red');
myAnimal.sayHi();
myAnimal.sayTheYearOfBirthday();
myAnimal.sayColor();
