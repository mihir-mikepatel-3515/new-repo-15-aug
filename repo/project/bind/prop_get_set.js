// 

const User={
    _email:"mihirpatel@gmail.com",
    _password:"abc123",
    get email(){
        return this._email.toUpperCase();
    },
    set email(value){
        this._email=value.toUpperCase();
    },
}

const tea = Object.create(User);
console.log(tea.email); 
console.log(tea.password);

tea.email="mihirpatel@gmail.com";
console.log(tea.email);
tea.password="abc123";
console.log(tea.password);  