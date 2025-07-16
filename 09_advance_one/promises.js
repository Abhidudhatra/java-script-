const promiseone =new Promise(function(resolve,reject){
    //do async task
    //Db calls,network,cryptography

    setTimeout(function(){
        console.log('async task complete');
        resolve()
        
    },1000)


})
promiseone.then(function(){
    console.log("promise completed ");
    
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

const promisethree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"abhi" ,email:"abhi@ac.in"})


    },1000)
})

promisethree.then(function(user){
    console.log(user);

})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})


promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))


const promisefive =new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR:js went wrong')
        }
    }, 1000)
});

async function consumePromiseFive (){
    try{
    const response =await promisefive
    console.log(response);

    
} 
catch(error){
    console.log(error);
}
    
}
consumePromiseFive();


async function getAllUser(){
    try{
    const response =await fetch('https://randomuser.me/api/');
    
    const data = await(response.json());
    console.log(data);

    }
    catch(error){
        console.log("E:",error);
        
    }
    
}
getAllUser()

fetch('https://randomuser.me/api/').then((response)=>{
    return response.json()

})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=>console.log(error))


