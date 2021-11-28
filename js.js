var num1 = Number(prompt("enter Your number: ..."))
var sum = 0
for ( i = 0 ; (num1 / 10) != 0; i++){

    sum = sum + (num1 % 10)
    num1 = Math.floor(num1 / 10)  
}
console.log(sum)