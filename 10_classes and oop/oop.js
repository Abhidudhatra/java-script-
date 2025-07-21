
// const user = {
//      username:"abhi",
//      logincount:9,
//      signedin: true,

//      getuserdetails:function(){
//         // console.log("get user details from datbase");
//         console.log(`username:${this.username}`);
        
        
//      }

// }
// console.log(user.logincount);
// console.log(user.getuserdetails());
// console.log(this);


function user (username,logincount,isloggedin){
    this.username= username;
    this.logincount=logincount;
    this.isloggedin=isloggedin;
    this.greeting = function(){
        console.log(`welcome${this.username}`);
        
    }
     
    return this
}
const userone =  new user("abhi",12,true)
//const usertwo =  new user("abhidudhatra",11,false)
console.log(userone.constructor)


//console.log(usertwo);
