class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  get email() {
    return `${this._email} - updated email `;
  }
  set email(value) {
    this._email = value.toUpperCase();
  }

  get password() {
    return `${this._password} -updated password`;
  }
  set password(value) {
    this._password = value.toUpperCase();
  }
}

const mihir = new User("mihirpatel@gmail.com", "abc123");
console.log(mihir.password);
console.log(mihir.email);
 