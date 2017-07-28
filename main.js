// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1 () {
  // Answer:
  var total = 0
  var average = 0
  for (var i = 0; i < data.length; i++) {
    total += data[i].price
  }
average = Math.round((total/data.length)*100)/100;

console.log("The average price is $" + average);

return average;
}


// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  // Answer:
  cost_filter_search_array = [];
  for (var i = 0; i < data.length; i++) {
    if (data[i].price >= 14.00 && data[i].price <= 18.00) {
      cost_filter_search_array.push(data[i].title)
    }
  }
  console.log(cost_filter_search_array);

return cost_filter_search_array;
}


// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  // Answer:
  var item_number_currency = 0;
  for (var i = 0; i < data.length; i++) {
    if (data[i].currency_code === "GBP") {
      item_number_currency = i;
    }
  }
  console.log(data[item_number_currency].title + " costs " + Math.round(data[item_number_currency].price) + " pounds.");

return item_number_currency;
}


// 4: Display a list of all items who are made of wood.
function question4 () {
  // Answer:
  var items_wood = [];
  for (var i = 0; i < data.length; i++) {
    for (var j = 0; j < data[i].materials.length; j++) {
      if (data[i].materials[j] === "wood") {
        items_wood.push(data[i].title);
      }
    }

  }
  console.log(items_wood);

  return items_wood;
}


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
  // Answer:
  var eight_material_items = [];
  // list of index numbers of items that have 8 or more materials.
  for (var i = 0; i < data.length; i++) {
    if (data[i].materials.length >= 8) {
      eight_material_items.push(i);
    }
  }
  //array of arrays (materials lists). One for each item. Indicies match.
  var materials_lists = [];
  for (var i = 0; i < eight_material_items.length; i++) {
    materials_lists.push([]);
    materials_lists[i] = data[eight_material_items[i]].materials;
  }

  for (var i = 0; i < eight_material_items.length; i++) {
    console.log(data[eight_material_items[i]].title + " has " + data[eight_material_items[i]].materials.length + " materials: \n")
    for (var j = 0; j < materials_lists[i].length; j++) {
      console.log("\t - " + materials_lists[i][j] + "\n");
    }
  }
}


// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  // Answer:
  var self_made_count = 0;
  for (var i = 0; i < data.length; i++) {
    if (data[i].who_made === "i_did") {
      self_made_count += 1;
    }
  }
  console.log(self_made_count + " items were made by there sellers.");
}
