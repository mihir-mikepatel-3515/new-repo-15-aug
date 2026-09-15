// const tinderUser = new Object();
// const tinderUser1 = {};
// console.log(tinderUser);
// console.log(tinderUser1);
const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = "John";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);
const regularUser = {
    email: "mike@gmial.com",
    fullName: {
        userFullName: {
            firstName: "Mike",
            lastName: "Smith"
        }
    }
}
// console.log(regularUser.fullName.userFullName.firstName);
// console.log(regularUser["fullName"]["userFullName"]["lastName"]);
const obj1 = {1:"a",2:"b",3:"c"};
const obj2 = {4:"q",5:"bw",6:"e"};
// const obj3 = {obj1,obj2};
const obj3 = Object.assign({},obj1,obj2);
// console.log(obj3);

const obj4 = {...obj1,...obj2};
// console.log(obj4);

const user = [
    { id: 1, email: "mike@gmial.com" },
    { id: 2, email: "1mike@gmial.com" },
    { id: 3, email: "asas@gmial.com" }
];

user[1].email 
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(tinderUser.hasOwnProperty("name"));