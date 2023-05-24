// class Matrix {
//   constructor(width, height, element = (x, y) => undefined) {
//     this.width = width;
//     this.height = height;
//     this.content = [];

//     for (let y = 0; y < height; y++) {
//       for (let x = 0; x < width; x++) {
//         this.content[y * width + x] = element(x, y);
//       }
//     }
//   }

//   get(x, y) {
//     return this.content[y * this.width + x];
//   }
//   set(x, y, value) {
//     this.content[y * this.width + x] = value;
//   }
// }



// class MatrixIterator {
//   constructor(matrix) {
//     this.x = 0;
//     this.y = 0;
//     this.matrix = matrix;
//   }

//   next() {
//     if (this.y == this.matrix.height) return {done: true};

//     let value = {x: this.x,
//                  y: this.y,
//                  value: this.matrix.get(this.x, this.y)};
//     this.x++;
//     if (this.x == this.matrix.width) {
//       this.x = 0;
//       this.y++;
//     }
//     return {value, done: false};
//   }
// }

// Matrix.prototype[Symbol.iterator] = function(){
//   return new MatrixIterator(this);
// };

// let matrix = new Matrix(2,2, (x,y) => `value ${x}, ${y}`)
// for(let {x, y, value} of matrix) {
//   console.log(x, y, value);
// }


// ß
// let varyingSize = {
//   get size() {
//     return Math.floor(Math.random() * 100);
//   }
// };

// console.log(varyingSize.size);
// // → 73
// console.log(varyingSize.size);
// // → 49


// class Temperature {
//   constructor(celsius) {
//     this.celsius = celsius;
//   }
//   get fahrenheit() {
//     return this.celsius * 1.8 + 32;
//   }
//   set fahrenheit(value) {
//     this.celsius = (value - 32) / 1.8;
//   }

//   static fromFahrenheit(value) {
//     return new Temperature((value - 32) / 1.8);
//   }
// }



// let temp = new Temperature(22);
// console.log(temp.fahrenheit);
// // → 71.6
// temp.fahrenheit = 86;
// console.log(temp.celsius);
// // → 30
// let newTemp = Temperature.fromFahrenheit(100)
// console.log(newTemp.celsius)


// class SymmetricMatrix extends Matrix {
//   constructor(size, element = (x, y) => undefined) {
//     super(size, size, (x, y) => {
//       if (x < y) return element(y, x);
//       else return element(x, y);
//     });
//   }

//   set(x, y, value) {
//     super.set(x, y, value);
//     if (x != y) {
//       super.set(y, x, value);
//     }
//   }
// }

// class SymmetricMatrix{
//   constructor(size, element = (x,y) => undefined){
//     super(size, size, (x,y) => {
//       if (x < y) return element(y, x)
//       else return element(x,y)
//     })
//   }
//   set(x, y, value){
//     super.set(x,y, value)
//     if (x != y){
//       super.set(y, x, value)
//     }
//   }
// }

// let matrix = new SymmetricMatrix(5, (x, y) => `${x},${y}`);
// console.log(matrix.get(2, 3));
// // → 3,2

// for(let {x, y, value} of matrix) {
//   console.log(x, y, value);
// }

//A vector type
// class Vec{
//   constructor(x,y){
//     this.x = x 
//     this.y = y
//   }
//   plus(anotherVec){
//     return new Vec(this.x + anotherVec.x, this.y + anotherVec.y)
//   }
//   minus(anotherVec){
//     return new Vec(this.x - anotherVec.x, this.y - anotherVec.y)
//   }
//   get length(){
//     return Math.sqrt(this.x**2 + this.y**2)
//   }
// }

// console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// // → Vec{x: 3, y: 5}
// console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// // → Vec{x: -1, y: -1}
// console.log(new Vec(3, 4).length);
// // → 5


//Groups and iterable groups
// class Group{
//   constructor(){
//     this.values = []
//   }
//   add(value){
//     if(this.values.includes(value)) throw new Error("value already in group")

//     this.values.push(value)
//   }
//   delete(value){
//     if(!(this.values.includes(value))) throw new Error("value is not in group")

//     this.values = this.values.filter(e => e != value)
//   }
//   has(value){
//     return this.values.includes(value)
//   }
//   static from(collection){
//     let group = new Group
//     for( let value of collection){
//       group.add(value)
//     }
//     return group
//   }

//   [Symbol.iterator](){
//     return new GroupIterator(this)
//   }
// }

// let group = Group.from([10, 20]);
// console.log(group)
// console.log(group.has(10));
// // → true
// console.log(group.has(30));
// // → false
// group.add(40);
// group.delete(10);
// console.log(group.has(10));
// → false

// Your code here (and the code from the previous exercise)
// class GroupIterator{
//   constructor(group){
//     this.group = group
//     this.position = 0
//   }
//   next(){
//     if (this.position >= this.group.values.length){
//       return {done: true}
//     } else {
//       let result = {value: this.group.values[this.position],
//                     done: false}
//       this.position++
//       return result
//     }
//   }
// }
// for (let value of Group.from(["a", "b", "c"])) {
//   console.log(value);
// }
// → a
// → b
// → c


//Borrowing a method
let map = {one: true, two: true, hasOwnProperty: true};

// Fix this call
console.log(map.hasOwnProperty("one"));                  
// → true