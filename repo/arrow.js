const user = {
    userName: "Mikepatel",
    price: 299,

    welcomeMessage: function(){
        console.log(` ${this.userName} and price is ${this.price}, welcome to website`);
        // console.log(this);
    }
}
// console.log(this);

// user.welcomeMessage();
// user.userName = "Mike";
// user.price = 399;
// user.welcomeMessage();

// function chai(){ 
//     let userName = "Mike";
// console.log(this.user);
// }
// chai();

// const chai= function (){
//     let userName = "Mike";
//     console.log(this.user); 
// }
// chai();


// const chai=  () =>{
//     let userName = "Mike";
//     console.log(this); 
// }
// chai();


// const addtwo = (num1, num2) =>   (num1 + num2)


// const addtwo = (num1, num2) =>   {userName = "Mike"; return (num1 + num2)   }

// console.log(addtwo(3, 7)); // 10