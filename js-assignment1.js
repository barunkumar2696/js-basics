// Question 1:
var str1 = 'Today is' ;
var str2 = '      a beautiful day     ';
var str3 = ' In Hawaii.     ';
console.log(str1+str2.replace('      ',' ').trimEnd()+str3.trimEnd());

// Question 2:
//Write a program to check vowel, consonant or non-alphabet using switch case. Change value of enteredAlphabet and check if your code works fine.
var enteredAlphabet = 'G';
switch(enteredAlphabet)
{
case 'a':
case 'e':
case 'i':
case 'o':
case 'u':
case 'A':
 case 'E':    
case 'I':
case 'O':
case 'U':
console.log("Input is vowel");
break;
default: console.log(" Input is Not an vowel or Non Alphabet");
break;
}
// Question 3:
// Write a JavaScript program to create menu driven calculator that performs basic arithmetic operations (add, subtract, multiply and divide) using switch case. The calculator should input two numbers and an operator: +, -, *, / from the user. It should perform operation according to the operator entered and must take input in given format.

// program for a simple calculator
var result;

// take the operator input
const operator = prompt('Enter operator ( either +, -, * or / ): ');

// take the operand input
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

switch(operator) {
   case '+':
        result = number1 + number2;
       console.log(`${number1} + ${number2} = ${result}`);
       break;

   case '-':
        result = number1 - number2;
       console.log(`${number1} - ${number2} = ${result}`);
       break;

   case '*':
        result = number1 * number2;
       console.log(`${number1} * ${number2} = ${result}`);
       break;

   case '/':
        result = number1 / number2;
       console.log(`${number1} / ${number2} = ${result}`);
       break;

   default:
       console.log('Invalid operator');
       break;
}
// Question 4:
// Write a JavaScript program to input sides of a triangle and check whether a triangle is equilateral, scalene or isosceles triangle using if else.
const firstSide=parseInt(prompt("Enter First side:"));
const secondSide=parseInt(prompt("Enter Second side:"));
const thirdSide=parseInt(prompt("Enter Third side"));
if(firstSide==secondSide&&secondSide==thirdSide){
 console.log("Triangle is Equilateral");
}

else if(firstSide==secondSide||firstSide==thirdSide||secondSide==thirdSide)
{
 console.log("Triangle  is Isocles");
}
else{
 console.log("Triangle is scalene");
}
// Question 5:
// Write a JavaScript program to input electricity unit charge and calculate the total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit. An additional surcharge of 20% is added to the bill.
// For example, input: 20 units then bill is Rs10
// Total Units: 300
// 100 * 0.75 = 75
// 100 * 1.2 = 120
// 50 * 1.5 = 75
// Total = 295 + 20% surcharge on 295
// Result = INR 354
var Totalunit=parseInt(prompt("Enter total units"));
var price;
var price1;
var netprice;
var price3;
var price4;
var exclusiveprice;
if(Totalunit<=50){
 price=Totalunit*0.50;
 console.log(price);
}
else if(Totalunit>50&&Totalunit<=150){
  price= (50) * 0.50;
 price1=(Totalunit-50)*0.75;
 netprice=price+price1;
 console.log(netprice);
}
else if(Totalunit>150&&Totalunit<=250){
  price= (50) * 0.50;
 price1=(100)*0.75;
 price3=(Totalunit-150)*1.20;
 netprice=price+price1+price3;
 console.log(netprice);
}
else if(Totalunit>250){
 price= (50)*0.50;
 price1=(100)*0.75;
 price3=(100)*1.20;
 price4=(Totalunit-250)*1.50;
 netprice=price+price1+price3+price4;
 exclusiveprice=netprice+20/100*(netprice);
 console.log(exclusiveprice);
}
else{
 console.log("Invalid Input");
}
