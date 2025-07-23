class user{
    constructor(email,password){
        this.email=email;
        this.password=password

    }

    get email(){
        return this._email.toUpperCase()

    }
    set email(value){
        this._email=value


    }
    get password(){
        return `${this._password}password`

    }

    set password(value){
        this._password=value
    }

}

const hitesh=new user("hitesh@gmail.com","abhi")
console.log(hitesh.email);
console.log(hitesh.password);


