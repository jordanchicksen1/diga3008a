//exercise 2

function exercise2()
{
 let x = 3
 let y = 3;
 let sum = x + y;

 if(x === y)
 {
    return sum*3;
 }
 else
 {
return sum;
 }

//return (x === y) ? sum*3: sum;
}

console.log(exercise2());

function exercise3()
{
//generate two random values exclusive of 51
let randomNum1 = Math.floor(Math.random()* 51);
let randomNum2 = Math.floor(Math.random()* 51);

if(randomNum1 === 50 || randomNum2 === 50 || (randomNum1 + randomNum2) === 50)
{
return true;
}
else
{
return false;
}
}

function exercise4()
{
let voltage = 3;
let current = 4;
let power = current * voltage;

return power;
}
console.log(exercise4());