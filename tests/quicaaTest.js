let name="sam"

name='nan'
console.log(name)

let fruits=['apple','mangoes','orange']

console.log(fruits[2]);

let [a,...rest]=fruits

console.log(rest);


// call back function...


function add (num1,num2,callback){

    
   let value=num1+num2;
   callback(value)

}

add(4,12,display)
function display(res){
    console.log(res);
}



const booking=new Promise((resolve,reject)=>{

const amount=900
if(amount>850){
    resolve(300)
}else{
    reject()
}


})

function sucess(amount){

console.log(`booking sucessfully done:Rs.${amount}`);


}


function failure(){

    console.log("booking failed");
}


booking.then(sucess(500)).catch(failure)