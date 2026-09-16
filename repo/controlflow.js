//if

// const isUserloggedIn = true;

// if (isUserloggedIn) {
//     console.log("User is logged in");
// }


// const balance = 1000;
// if (balance > 500) {
//     console.log("You can buy this item");
// } else {
//     console.log("You cannot buy this item");
// }   

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromFacebook = false;

if (userLoggedIn && debitCard && 2==2) {
    console.log("You can buy this item");
} else {
    console.log("You cannot buy this item");
}

if (userLoggedIn || debitCard || loggedInFromGoogle || loggedInFromFacebook) {
    console.log("You can buy this item");
} else {
    console.log("You cannot buy this item");
}   



