// #8 - Grocery List
function buyFruit(groceryList) {
  return groceryList.flatMap(fruit => repeatFruit(fruit));
}

const repeatFruit = item => new Array(item[1]).fill(item[0]);

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
