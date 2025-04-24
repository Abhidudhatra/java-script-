// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toDateString());
// console.log(typeof(myDate));

// let createdate =new Date(2023,0,23 ,5 ,5,52)
// //console.log(createdate.toDateString());
// console.log(createdate.toLocaleString());


// let myTimestamp =Date.now();
// console.log(Math.floor(Date.now()/1000));
// console.log(myTimestamp);


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
newDate.toLocaleDateString('default',
    {weekday:"long",
    }
)