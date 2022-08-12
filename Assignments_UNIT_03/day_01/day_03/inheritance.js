// Implement the inheritance model of your family both using Object.create().
//Starting from your grandparents to your parents you.

function UzumakiClan(){

    this.grandma = "Mito Uzumaki",
    this.grandpa = "Hashirama Senzu"
}

var firstGeneration = new UzumakiClan();

firstGeneration.son = "Namikaze";
firstGeneration.daughterinLaw = "Senju"

var secondGeneration = Object.create(firstGeneration);

secondGeneration.son = "Namikaze MInato";
secondGeneration.daughterinLaw = "Kushina Uzumaki"

var thirdGeneration = Object.create(secondGeneration);

thirdGeneration.son = "Naruto"

console.log(thirdGeneration);


/* Create your custom Array constructor which should return an Array Object.
It should have the property as length depending upon the total no of arguments passed to the constructor function.
Whatever arguments are being passed, add them as a key-value pair in our Array object.
Here, the key will be the index number, starting from zero. */



function MyArray() {
    this.length = arguments.length;
    
    Object.defineProperty(this, "length", {
    writable: true,
    enumerable: false,
    });
    
    for (let i = 0; i < this.length; i++) {
    this[i] = arguments[i];
    }
 }

 let a1 = new MyArray(2,3,5,6);
 console.log(Object.values(a1))


 /* Use the .Prototype property available on constructor functions to add custom methods to your Array constructor function.
    Add the following methods
    Pushing a new value to the array
    Reversing the array and returning it
    Return first element from the array
    printing the array in Array format, not the object one. 
*/

MyArray.prototype.पुश = function (el) {
    //masai_arr[3] = el
    
    this[this.length] = el;
    this.length++;
    };
    
    MyArray.prototype.हटाओ = function () {
    let index = this.length - 1;
    
    delete this[index];
    
    this.length--;
    };
    
    let new_arr = new MyArray(1, 2, 3);

    
    console.log("new_arr:", Object.values(new_arr));
