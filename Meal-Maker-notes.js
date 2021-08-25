//Object Literal with methods

const menu = {
  //Object that has the type of course and its getters and setters
  _courses: {
    _appetizers: [],
    _mains: [],
    _desserts: [],

    /*
    Getters and setters are not used properly
  
    Fix the getters and the setters
    */

    //Getters and Setters of appetizers
    get appetizers() {
      return this._appetizers;
    },
    set appetizers(appetizersIn) {
      this._appetizers = appetizersIn;
    },

    //Getters and Setters of mains
    get mains() {
      return this._mains;
    },
    set mains(mainsIn) {
      this._mains = mainsIn;
    },

    //Getters and Setters of desserts
    get desserts() {
      return this._desserts;
    },
    set desserts(dessertsIn) {
      this._desserts = dessertsIn;
    },

    //Getter of object courses
    get courses() {
      return {
        appetizers: this._courses.appetizers,
        mains: this._courses.mains,
        desserts: this._courses.desserts,
      };
    },
  },
  ///===============================================================

  //Method that lets you add any type of course with the dish name and price.
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = { //It uses the object dish to create a property for the dish name and price.
      name: dishName,
      price: dishPrice,
    };

    //Pushes the object dish to the corresponding type of course
    this._courses[courseName].push(dish);
  },


  //Method that returns a random dish from a specific type of course
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName]; //const that has the array of a specific course type
    const randomIndex = Math.floor(Math.random() * dishes.length); //const that gives a random number based the # of indexes of the specific course type
    return dishes[randomIndex]; //returns a random dish by returning a random index of the course type array
  },


  //Method that returns a random meal
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers'); //Gets a random appetizer
    const main = this.getRandomDishFromCourse('mains');           //Gets a random main
    const dessert = this.getRandomDishFromCourse('desserts');     //Gets a random dessert
    const totalPrice = appetizer.price + main.price + dessert.price; //Adds the total price

    return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name}. The price is $${totalPrice.toFixed(2)}.`;
  },
};

menu.addDishToCourse('appetizers', 'Ceasar Salad', 4.25);
menu.addDishToCourse('appetizers', 'Prawn Coctail', 4.25);
menu.addDishToCourse('appetizers', 'Garlic Bread', 3.50);

menu.addDishToCourse('mains', 'Lasagna', 9.75);
menu.addDishToCourse('mains', 'Ribeye Steak', 14.95);
menu.addDishToCourse('mains', 'Fish & Chips', 12.95);

menu.addDishToCourse('desserts', 'Cheese Cake', 4.50);
menu.addDishToCourse('desserts', 'Creme Brule', 4.25);
menu.addDishToCourse('desserts', 'Cheese Board', 3.25);

console.log(menu.appetizers);

//Assing variable to generateRandomMeal()
let meal = menu.generateRandomMeal();

//Console log result
console.log(meal);

//TrY ulitttfsadfsad
//asfdsf
//fasdfdsafgitfasdf 