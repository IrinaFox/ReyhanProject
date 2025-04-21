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


//test
const ReyhanZoo = [
    {name: 'Pig', color: "pink", age: 15, gender: 'male'},
    {name: 'Hors', color: "brown", age: 31, gender: 'female'},
    {name: 'Elephand', color: "grey", age: 23, gender: 'male'},
    {name: 'Bear', color: "brown", age: 37, gender: 'male'},
];
const myZoo = new Zoo('Safari Park', ReyhanZoo, 25);

const oldest = myZoo.getOldestAnimal();
console.log ("Самое старое животное:");
console.log(oldest);

const females = myZoo.getAmountOfFemales();
console.log('Животные женского пола:');
console.log(females);

const males = myZoo.getAmountOfMales();
console.log("Животные мужского пола:");
console.log(males);

console.log(myZoo.getAnimalsAmount());
console.log(myZoo.sayHi());
