## Make a Menu
list of food items with price in an array stored in this.state.foodItems

two separate arrays, one with foodItems and the other with price need to somehow be tied to one another and also able to easily change elements (i.e. price)

create object (i.e. hamburger) with two key value pairs - name: "hamburger" & price: 5.50


OR tie two arrays together by matching the indexes

## Two Arrays

We created foodItems: ["strings"] and foodPrices: [numbers] to keep track of food and prices, respectively. 

We created Plates.js to display foodItems and foodPrices
---------------------

# Goals and issues:
- Goal: Display foodItems: as a bulleted list of individual items
> We are trying to display the foodItems: in a bulleted list on Plates.js, but we can only get the whole array on one bullet.

- Goal: Display foodPrices: along side foodItems: so they are on the same line
    - Do they need to be tied together at this point, or just displayed next to each other??

- Goal: Create "add to basket" button
    - Make button to side of each item
    - Make checkboxes and add checked items to basket
    - Make menu item a button itself

- Goal: Create a basket: to store customer's order
    - How do we tie an item to a price?

- Self STRETCH Goal:
    - Create a button that removes individual items from basket.
    ALTERNATIVE: - Create a button that clears basket.