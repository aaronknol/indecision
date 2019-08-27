const add = (a, b) => {
    return a + b;
}

const user2 = {
    name: 'Aaron',
    cities: ['Pakenham', 'London', 'Pontypridd'],
    printPlacesLived: function () {
        return this.cities.map( (city) => {
            return this.name + ' has lived in ' + city;
        });
        
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // });
        // return cityMessages;
    }
}

const multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 3,
    multiply: function () {
        return this.numbers.map((number) => {
            return number * this.multiplyBy
        });
    }
}

console.log(user2.printPlacesLived());
console.log(add(55, 1, 1003));
console.log(multiplier.multiply());