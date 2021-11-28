var num = prompt("enter your Number: ..")
var em = 0


if (num == 0 ){
    em = 1
} else {
for ( var i = 0; num / 10 != 0; i++){
    em++
    num = Math.floor(num / 10)
}
}
console.log(em)