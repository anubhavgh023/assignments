/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

//HashMaping -> Category : Price
function calculateTotalSpentByCategory(transactions) {
  let map = new Map();
  for (let i in transactions) {
    if (map.has(transactions[i].category)) {
      let totalSpend = map.get(transactions[i].category) + transactions[i].price;
      map.set(transactions[i].category,totalSpend);
    }
    else {
      map.set(transactions[i].category, transactions[i].price);
    }  
  }  
  
  //Converting map to object
  let mapObj = Object.fromEntries(map);

  //pushing each {cat:price} object into result
  let result = [];

  for (let key in mapObj) {
    let resultElement = {};
    resultElement.category = key;
    resultElement.totalSpent = mapObj[key];
    result.push(resultElement);
  }
  
  return result;
}  


module.exports = calculateTotalSpentByCategory;
