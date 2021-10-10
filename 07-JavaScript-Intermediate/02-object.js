// soal 1
const person = {
    name: "person A",
    age: 100,
    favDrinks: [
      "coffee",
      "jamu temulawak",
      "tea"
    ],
    greeting: function() {
      console.log("hello world")
    }
  }
  
  /// EDIT HERE
    person.name = "jesslyn"
    person.favDrinks[1] = "tap water"
    person.greeting = function(name) {
      return `"Hello, ${name}"`
    }
  
  /// STOP
  
  console.log(person.name);
  console.log(person.age);
  console.log(person.favDrinks);
  console.log(person.greeting("John Watson"));
  

// soal 2
function getObjectValue(object, value) { 
  value = value.split('.');
  for (let i=0; i<value.length; i++){
    object = object[value[i]];
  }
  if (object==undefined){
    return null
  }
  return object;
}

const milkBasedCoffee = {
  name: "latte",
  ingredients: {
    espresso: {
      origin: "lampung",
      roastProfile: "medium to dark",
      ratio: 1
    },
    milk: {
      brand: "susu murni",
      isVegan: false,
      ratio: 5
    }
  },
}

const espresso = getObjectValue(milkBasedCoffee, "ingredients.espresso.origin");
const coffeeBrand = getObjectValue(milkBasedCoffee, "ingredients.espresso.brand");
const isMilkVegan = getObjectValue(milkBasedCoffee, "ingredients.milk.isVegan");

console.log(espresso);
console.log(coffeeBrand);
console.log(isMilkVegan)

//output espresso should be "lampung"
// coffeeBrand should be null
// isMilkVegan should be false


//soal 3
// dibawah ini merupakan history transasksi yang telah kalian lakukan
const items = [
  {
    btc: { buy: 10, sell: 9 },
    eth: { buy: 8, sell: 7.5 },
    doge: { buy: 7, sell: 6.5 },
    day: 1,
  },
  {
    btc: { buy: 9, sell: 5 },
    eth: { buy: 7, sell: 4 },
    doge: { buy: 6, sell: 3 },
    day: 2,
  },
  {
    btc: { buy: 5, sell: 10 },
    eth: { buy: 4, sell: 6 },
    doge: { buy: 3, sell: 4 },
    day: 3,
  },
];

const calculateIncome = (items) => {
  /// EDIT DOWN HERE
  return items.reduce((tot, val) => {
    const tbtc = val.btc.sell - val.btc.buy;
    const tdoge = val.doge.sell - val.doge.buy;
    const teth = val.eth.sell - val.eth.buy;
    return {
      btc: tot.btc + tbtc,
      doge: tot.doge + tdoge,
      eth: tot.eth + teth,
    };
  }, {
    btc:0, doge:0, eth:0
  }
  );
}

console.log(calculateIncome(items))
