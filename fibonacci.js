//Serie Fibonacci =>  2,   2,   2 , 3, 5, 8, 13, 21,
                    //na   nb  temp
var numTope= 25;
var numa = 0;
var numb = 1;
var temp;

console.log(numa);
console.log(numb);
for(i = 1 ; i<=12; i++){
    temp = numa+numb;
    console.log(temp);
    numa = numb
    numb = temp;
}