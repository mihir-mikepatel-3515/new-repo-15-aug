// // const promiseOne = new Promise(function(resolve,reject){
// //     setTimeout(function(){
// //         console.log('Async task is complete');
// //         resolve()

// //     },1000)
// // })

// // promiseOne.then(function(){
// //     console.log("Promise consumed");

// // })

// // new Promise(function(resolve,reject){
// //     setTimeout(function(){
// //         console.log("Asyn task 2");
// //         resolve()
// //     },1000)
// // }).then(function(){
// //     console.log("task 2");
    
// // })

// // const promiseThree = new Promise(function(resolve,reject){
// //     setTimeout(function(){
// //         resolve({username :"Chai" , email:"chai@gmail.com"})
// //     },1000)
// // })

// // promiseThree.then(function(user){
// //     console.log(user)

// // })


// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true;
//         if (!error) {
//             resolve({username:"mihir",password:"123"})
//         }
//         else{
//             reject('ERROR:SOMETHING WENT WRONG')
//         }

//     },1000)

// })

// promiseFour
// .then((user) =>{
//     console.log(user);
//     return user.username
// })
// .then((username)=> {
//     console.log(username);
// })
// .catch(function(error){
//     console.log(error)
// })
// .finally(()=> console.log("the promise is either reject or resolved"))


// const promiseFive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true; // Changed to false
//         if (!error){
//             resolve({username:"mihir", password:"123"});
//         }
//         else{
//             reject('error');
//         }
//     } , 1000);
// });

// async function consumePromiseFive() {
//     try{
//         const response = await promiseFive;
//     console.log(response);

//     }
//     catch (error)
//     {
//         console.log(error)
//     }
// }
// consumePromiseFive();


// async function getAllUsers (){
//   try{
//      const reponse=await fetch('https://jsonplaceholder.typicode.com/users')
//     //  console.log(reponse)
//    const data = await reponse.json()
//    console.log(data);
//   }
//   catch(error){
//     console.log("e:",error);
//   }
// }

// getAllUsers()

fetch ('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error) => console.log(error))


