class Animal {
    constructor(name, age, color, gender) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.gender = gender;
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

class Zoo {
    constructor(name, animals, ticketPrice) {
        this.name = name;
        this.animals = animals;
        this.ticketPrice = ticketPrice;
    }

    getOldestAnimal() {
        let oldest = this.animals[0];

        this.animals.forEach(animal => {
            if (animal.age > oldest.age) {
                oldest = animal;
            }
        });
        return oldest;
    }

    getAnimalsAmount() {
        return this.animals.length;
    }

    sayHi() {
        return ("Hi " + this.name)
    }

    getAmountOfFemales() {
        let females = [];

        this.animals.forEach(animal => {
            if(animal.gender === 'female') {
                females.push(animal);
            }
        });
        return females;

    }

    getAmountOfMales() {
        let males = [];

        this.animals.forEach(animal => {
            if(animal.gender === 'male') {
                males.push(animal);
            }
        })
        return males;
    }
}

let elephant = new Animal("Elephant", 3, "grey", 'female');
let tiger = new Animal("Tiger", 2, 'orange', 'male');
let monkey = new Animal( 'Monkey', 5, 'black', 'male');
let dog = new Animal('Dog',7,'white', 'female');
let cat = new Animal('Cat', 2, 'white', 'female');

const cityZoo = new Zoo("City Zoo", [elephant, cat, tiger], 5);
const jungleZoo = new Zoo('Jungle Zoo', [monkey, dog], 10);


//test

console.log(cityZoo.sayHi());
console.log('Количество животных в City Zoo:',cityZoo.getAnimalsAmount());
console.log("Самое старое животное в Jungle Zoo:", jungleZoo.getOldestAnimal().name);
console.log("Самки в City Zoo:", cityZoo.getAmountOfFemales().map(a => a.name));
console.log("Самцы в Jungle Zoo:", jungleZoo.getAmountOfMales().map(a => a.name));
