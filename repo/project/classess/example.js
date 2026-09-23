// // const user ={
// //  username:"mike",
// //  loginCount: 8,
// //  signedIn: true,
// //  getUserDetails: function(){
// //     //console.log("get user details");
// //     // console.log(`Username:${this.username}`);
// //     console.log(this);
// //  }
// // }



// // console.log(user.getUserDetails());
// // // console.log(user.username);

// // const promiseOne = new Promise();
// // const date = new Date();

// // function User(username, loginCount, isLoggedIn){
// //     this.username = username;
// //     this.loginCount =loginCount;
// //     this.isLoggedIn=isLoggedIn;

// //     this.greeting = function(){
// //         console.log(`welcome ${this.username}`)
// //     }

// //     return this
// // }

// // const userOne = new User("mihir",8,true);
// // const userTwo = new User("mike",13,false)
// // console.log(userOne.constructor);
// // // console.log(userTwo);


// // instanceof




// function multipleby5(num){
//     this.num = num;
//     return num*5
// }
// multipleby5.power = 2
// console.log(multipleby5(5));
// console.log(multipleby5.power);
// console.log(multipleby5.prototype);

// function createUser(username,score){
//     this.username = username;
//     this.score = score;
// }

// createUser.prototype.increment = function(){
//     this.score++;
// }
// createUser.prototype.printMe = function(){
//     console.log(`price is ${this.score}`);
    
// }


// const chai = new createUser("chai", 25);
// const tea = new createUser("tea", 250);


// chai.printMe();



// let myName = "mihir     ";
// console.log(myName.);



// let myHeros = ["thor", "spiderman"]


// let heroPower = {
//     thor :"hammer",
//     spiderman:"sling",
//     getSpiderPower: function(){
//         console.log(`spidy power is $(this.spiderman)`);
//     }
// }

// Object.prototype.mike = function(){
//     console.log(`mike is present in all object`);
// }

// Array.prototype.heymihir = function(){
//     console.log(`mike say hello`);
// }

// // heroPower.mike();

// myHeros.mike();
// myHeros.heymihir();
// // heroPower.heymihir();


// const User = {
//     name: "chai",
//     email:"mihir@gmail.com"
// }
// const Teacher = {
//     makeVideo : true 
// }
// const teachingSupport = {
//     isAvailable : true
// }
// const TaSupport = {
//     makeAssignment :'JS assignment',
//     fullTime: true,
//     __proto__: teachingSupport
// }

// Teacher.__proto__ = User; 

// console.log(TaSupport);

// Object.setPrototypeOf(teachingSupport,Teacher);

// let anotherUsername = "chaiaurcode.     ";
// String.prototype.trueLength = function(){
//     console.log(`${this}`);
//     // console.log(`this.name`);
//     console.log(`true length is :${this.trim().length}`);
    
    
// }
// anotherUsername.toString.prototype.trueLength();
// "mihir   ".trueLength();
// "krishaaa    ".trueLength();


// function Setusername(username){
//     this.username = username;
//     console.log("called");
// }
// function createUser (username,email,password){
//     Setusername.call(this, username)
//     this.email = email;
//     this.password = password
// }

// const chai = new createUser("chai", "chai@fb.com","123");
// console.log(chai);