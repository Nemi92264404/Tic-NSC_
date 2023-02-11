/*
let a = +prompt("Введіть число!");

let b = 7;
let c = 17;

if(a % b == 0 || a % c == 0){
    alert('Число'  +a  +'гарне' +":D" );
}
*/
/*
let a = +prompt("Введіть рік!");

let b = 100;
let c = 4;
let k = 400;

 if (a % b != 0 && a % c == 0 || a % k == 0) {
    alert("Рік" + a + "високосний");  
 } else {
    alert("Рік" + a + "не високосний");  }
    */

    
/*
let star = "";

for(a = 0 ; a < 7 ; a++ ){
star = star + " *";
console.log(star);
}
 */

  
/*   
let s = prompt("Введіть день тижня(Першу букву з великої будьласка!)");
function getDay(a){
switch(s){
case "Понеділок": return "Ви ввели коректний день тижня! Дякуемо :D"
case "Вівторок": return "Ви ввели коректний день тижня! Дякуемо :D"
case "Середа": return "Ви ввели коректний день тижня! Дякуемо :D"
case "Четверг": return "Ви ввели коректний день тижня! Дякуемо :D"
case "П'ятниця": return "Ви ввели коректний день тижня! Дякуемо :D"
default: return "Ти чого? Xіба це день тижня? Будь уважніше!"
}

}
let n = getDay(s);
alert(n);
*/

// - Завдання 1

/*
let dil = [];

var m
let min = 1;  // або let min = +prompt("Введіть мінімальне число");
let max = 20; // або let max = +prompt("Введіть максимальне число");

let rand =min + Math.random() * (max + 1 - min);

//console.log(Math.floor(rand));
m = Math.floor(rand);
console.log(m)
 

  for(a = 0; a < max ; a++){
if(m % a == 0){
    
    //console.log(a)
    dil.push(a)
}
  }

console.log(dil);


let dil2 =[];


for(p = 0; p <= dil.length; p++ ){
    
    for(b = 0; b < max; b++) {
     if(dil[p] % b == 0){
     dil2.push(b);
     }
    }  
   } console.log(dil2)
*/

// - Завдання 2
/*
let b = +prompt("Введіть число від 2 до 9");

for(a = 0; a <=10 ;a++){
console.log(b + "*" + a + "=" + a*b)
}
*/

// - Завдвння 3
/*
let a =  +prompt("Введіть число 1");
for(b = +prompt("Введіть число 2"); b > a; b--){
    let sum = a + b;
a++
b--
    //return sum
}console.log(sum)
*/
/*
let bl = [];
let a = +prompt("Число 1");
let b = +prompt("Число 2");

for(c = 0; a < b - 1; c++){

a++;
console.log(a);
bl.push(a);
}console.log(bl);
bl.push(b);
bl.unshift(a);

if(bl.length % 2 == 0){
    console.log((a+b) * (b-a)/2 );
}
else //if(bl.length % 2 != 0)
{
    console.log((a+b) * (b-a)/2 + (a+b)/2);
}
*/
/*
let bl = [];
let a = +prompt("Число 1");
let b = +prompt("Число 2");

for(c = 0; a < b - 1; c++){

a++;
console.log(a);
bl.push(a);
}console.log(bl);
bl.push(b);
bl.unshift(a);

if(bl.length % 2 == 0){
    console.log((a+b) * (b-a)/2 );
}
else //if(bl.length % 2 != 0)
{
    console.log((a+b) * (b-a)/2 + (a+b)/2);
}*/



/*              
let a = +prompt("Число 1");
let b = +prompt("Число 2");


let sum1 = a + b;
let sum2 = b/2 - a/2;
let sum3 = a/2 + b/2;


    console.log(sum1 * sum2 + sum3);
*/


