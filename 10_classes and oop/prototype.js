// let myname ="hitesh";
// console.log(myname.true);


let myhero =["thor","spiderman"];

let heroPower={
    thor:"hammer",
    spiderman:"sling",  

    getspiderpower:function(){
        console.log(`spidy power is ${this.spiderman}`);
        
    }
}
Object.prototype.hitesh=function(){
    console.log(`hitesh is present in all object`);
    
}
Array.prototype.heyhitesh=function(){
    console.log(`hitesh says hello`);
    
}
//heroPower.hitesh()
// myhero.hitesh()
//heroPower.heyhitesh()
//myhero.heyhitesh();


// inheritence 

const user ={
    name:"chai",
    email:"chai@gmail.com",


}

const teacher ={
    makevideo:true,

}
const TeachingSupport={
    isAvailable :false

}
const TAsuppot ={
    makeassignment:'js assignment',
    fulltime:true,
    __proto__:TeachingSupport,
}
teacher.__proto__ = user

Object.setPrototypeOf(TeachingSupport,teacher)

let anotherusername ="chaiaurcode      "
String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`true length is :${this.trim().length}`);
    
    
}
anotherusername.trueLength()
"hitesh".trueLength()
"icetea".trueLength()