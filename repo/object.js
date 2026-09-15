
const mySym = Symbol('key1');

const JsUser={
    name:"John",
    [mySym]:"mykey1",
    age:30,
    location:"New York",
    email:"aaa@hh.com",
    isLoggedIn:true,
    lastLoginDays: ["Monday","Tuesday","Wednesday"] 

}
 JsUser.email="mihir333@gmail.com";
//  console.log(JsUser.email);
//  Object.freeze(JsUser);
 JsUser.email="sxsxnsnk@gmail.com";
// console.log(JsUser.email);

JsUser.greeting=function(){
    console.log("Hello JsUser");
}   
JsUser.greetingtwo=function(){
    console.log(`Hello JsUser,${this.name}`);
}   
console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());



// console.log(JsUser.name);
// // console.log(JsUser);
// console.log(typeof JsUser.mySym);
// console.log(mySym);
// console.log(JsUser[mySym]);