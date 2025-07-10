// problam 01
let mark = 30;

if (mark >= 80 && mark <= 100) {
    console.log('Letter grade A+ and Grade point 5.00');
} else if (mark >= 70 && mark <= 79) {
    console.log('Letter grade A and Grade point 4.00');
} else if (mark >= 60 && mark <= 69) {
    console.log('Letter grade A- and Grade point 3.50');
} else if (mark >= 50 && mark <= 59) {
    console.log('Letter grade B and Grade point 3.00');
} else if (mark >= 40 && mark <= 49) {
    console.log('Letter grade C and Grade point 2.00');
} else if (mark >= 33 && mark <= 39) {
    console.log('Letter grade D and Grade point 1.00');
} else if (mark >= 0 && mark < 33) {
    console.log('Fail');
} else {
    console.log('Invalid mark');
}
//problam 02
let number=30;
if(number%2==0)
{
    console.log('Your Number is Even');
}
else
{
    console.log('Your Nunber is Odd');
    
}
//problam 03
let numbers=[2,5,7,8,3,9,1,];
for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 0; j < numbers.length - i - 1; j++) {
        if (numbers[j] > numbers[j + 1]) {
            let temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
        }
    }
}
console.log(numbers);
//problam 04
let year=2023;
if(year%4==0)
{
    console.log('This Year is lipar');
    
}
else if(year%100==0 && year%400==0)
{
    console.log('This Year is lipar');
    
}
else
{
    console.log('This Year is not lipar');
    
}
//problam 05
let num=50;
let list=[]
for(let i=0;i<=num;i++)
{
    if( i%3==0 &&i%5==0)
    {
        list.push(i);
    }
}
console.log(list);
//problam 06
var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
var bigName=friends[0]
for(var i=0;i<friends.length;i++)
{
    if(bigName.length<friends[i].length)
    {
        bigName=friends[i]
    }
}
console.log(bigName);
//problam 07
var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

var uniqueNumbers = numbers.filter((value, index, array) => {
    return array.indexOf(value) === index;
});

console.log(uniqueNumbers);
//problam 08

var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
var bigNumber=numbers[0];
for(var i=0;i<numbers.length;i++)
{
    if(bigNumber<numbers[i])
    {
        bigNumber=numbers[i];
    }
}
console.log(bigNumber);

let arry= [900,2700,3400];
let Living_cost=10000;
let SumArray=0;
for(let i=0;i<arry.length;i++)
{
    if(arry[i]>=3000)
    {
        arry[i]-=(arry[i]*0.20)
    }
    else
    {
        SumArray+=arry[i]
    }
}
// console.log(SumArray);

let ans=SumArray-Living_cost;
if(!Array.isArray(arry))
{
    console.log('invalid input');
}
else if(ans==0)
{
    console.log(0);
    
}
else if(ans<0)
{
    console.log('earn more');
}
else
{
    console.log(ans);
    
}
// console.log(ans);





 

