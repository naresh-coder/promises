

const hiName = new Promise((resolve, reject) => {
    resolve(" Hi Naresh ");
}).then(data => {
    console.log(data);
})


const rejectPromise = new Promise((resolve, reject) => {
    reject(" who are you ? ");
}).then(data => {
    console.log(data);
}).catch(mes => console.log(mes))//console.log(hiName);



let t1 = 0;
let t2 = 1;

for(let i =0; i <5 ; i++){
    console.log(' ',t1,t2);
    let sum = t1+t2;
     t1 = t2;
     t2 = sum;
    
}