const userEmail = "h@gmail.com";

if(userEmail){
    console.log(`User email is verified`);
} else {
    console.log(`User email is not verified`);
}

if(userEmail.length === 0){
    console.log(`User email is verified`);
} else {
    console.log(`User email is not verified`);
}

let val2;
val2 = 5 ?? 10;
console.log(val2);

const iceTeaPrice = 100;
iceTeaPrice > 80 ? console.log(`You can buy this item`) : console.log(`You cannot buy this item`);