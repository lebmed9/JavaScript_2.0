// const example = () => {
//   console.log(this);
// };

// const testObject = {
//   testMethod: example,
// };
// testObject.testMethod();

// Practice\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\start///////////////////////////////

// const city = {
//   name: "NN",
//   population: 2000000,
//   showName: function () {
//     console.log(this.name);
//   },
//   showPopulation() {
//     console.log(this.population);
//   },
//   setName(name) {
//     this.name = name;
//   },
// };
// city.setName("San Jose");
// city.showName();
// console.log(city);

// Practice\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\end///////////////////////////////

// let user1 = { name: "Вяся" };
// let user2 = { name: "Петя" };

// function say(phrase, symbol) {
//   console.log(`${this.name}, ${phrase} ${symbol}`);
// }

// say.apply(user1, ["Привет", "!"]);
// say.call(user2, "И тебе привет", "!");

// let sayBound1 = say.bind(user1);
// sayBound1("Привет");
// let sayBound2 = say.bind(user1, "Привет");
// sayBound2();

// Practice\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\start///////////////////////////////

const city = {
  name: "NN",
  population: 2000000,
  showName: function () {
    console.log(this.name);
  },
  showPopulation() {
    console.log(this.population);
  },
  setName(name) {
    this.name = name;
  },
};

const city2 = {
  name: "San Jose",
  population: 1500000,
};

// city.setName("San Jose");
// city.showName();
city.showPopulation.call(city2);
let test = city.showPopulation.bind(city2);
let test2 = city.setName.bind(city2, "Santa Ana");
test2();
console.log(city2);
test2("Moscow");
console.log(city2);

test();
// Practice\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\end///////////////////////////////
