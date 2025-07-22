class user {
    constructor (username){
        this.username=username
    }
    logme(){
        console.log(`username id ${this.username}`);

        
    }
}

class teacher extends user{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password

    }
    addcourse(){
        console.log(`a new course was added by ${this.username}`);
        
    }
}
const chai = new teacher("chai","chai@gmail.com","123")
chai.addcourse()

const masalachai = new user("masalachai")
masalachai.logme()
chai.logme()
console.log(chai===masalachai);
console.log(chai===teacher);
console.log(chai instanceof teacher);
console.log(chai  instanceof user);



