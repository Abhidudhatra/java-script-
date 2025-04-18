// primitive 
//string ,number, boolean,null undefined ,symbol,BigInt



const id=Symbol('123')
const another_id=Symbol('123')

console.log(id==another_id);


const outsidetemp = null
const isloggedin = false
let useremail;
const bignumber = 252525252525252n

// reference non primitive 
// array,objects,function 

const heros=["abhi","abhi","abhi"]
let my_obj = {
    name:"abhi",
    age : 22,
}

const myfunction =function(){
    console.log("hello world");
    
}
console.log(typeof myfunction);

