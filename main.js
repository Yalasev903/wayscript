// const inputNum = 11;
// document.body.innerHTML('<input type="1+1">');

// function plusNumber(inputNum) {
//      let plus = inputNum + 1;
//      return plus
// }

// console.log(plusNumber(inputNum));

// let string = 'less one';
// let lengsString = string.length;
//  console.log(lengsString)


// function sum(a, b) {
//      let result = a + b;
//      return result;
// }

// console.log(sum(110, 10));

// +===================================================================================================================+\

// let sec = Math.random(1, 10)

// console.log(sec);


// var a1 = 1;
// var amp = `+`;
// var b = 4;
// let res = 'Hello'

// function calculate(a1, b) {
// if (a >= b) {
//      var result = res;
// }
// return result;
// }


//   let hello = document.write('Hello Yarik');

//  var ri = document.setTimeout(document.write('Hello Yarik'), 2000);

// let amount =20;
// let cockiePrise = 7;
// let candyPrise = 8;
// let rest = amount - cockiePrise;

// if (rest >= candyPrise) {
//      document.write('i have enough money')
// } else {
//      document.write('i do not have enough money')
// }

// let amount = 90;
// let cockiePrise = 7;
// let candyPrise = 8;
// amount = amount - cockiePrise;

// if (amount >= candyPrise) {
//      document.write('i have enough money')
// } else {
//      document.write('i do not have enough money')
// }


// const a = "string";
// const aType = typeof a;
// console.log(aType);

// console.log('\xa9'); //00 - FF
// console.log('\u23F3');//0000 - FFFF(UTF-16)
// console.log('\u{1F514}');//0 - 10FFFF(UTF-32)

// const s1 = '<div class="spinner">Loading...</div>';

// console.log(s1);
// debugger;
// const a = 2;
// const b = 5;

// const s2 = `
// <h1>Title</h1>
// <ul>
// <li>${a} + ${b} = ${a + b}</li>
// <li>${a} * ${b} = ${a * b}</li>
// <li>${a} / ${b} = ${a / b}</li>
// </ul>
// `;

// console.log(s2);

// function getString(){
//      const greeting = 'Hello, Mate Academy!'
//      return greeting
//    }

//    console.log(getString());

// function getString (){
//      return 'I am learning JavaScript';
//    }
   
//    const result = getString ();

//    console.log(getString());


// const getString = () => {
//      let jobTitle = 'I am a programmer';
   
//      return jobTitle ;
//    }


// function greeter (name){
     
//      return `Hi, ${name}!`;
//     }

//     console.log(greeter('Ярослав'));

// function canBuyBeer(age) {
//      if (age >= 18) {
//        return 'You can buy beer';
//      } else {
//        return 'You can not buy beer';
//      }
//    }

//    console.log(canBuyBeer(19));



//Тернарные операторы (для выбора значения в зависимости от условия НЕ ИСПОЛЬЗОВАТЬ В СЛОЖНЫХ КОНСТРУКЦИЯХ)
// let age = 2;

// let message = (age > 18) 
// ? ('Adult') 
// : (age > 7)
//   ? ('Child')
//   : ('Baby');
  
//   console.log(message);


// function calculateTaxes(income) {
// const rate1 = 0.02;
// const rate2 = 0.03;
// const rate3 = 0.05;
// const tax1 = 1000;
// const tax2 = 10000;


//      if(income <= tax1) {
   
//      return income * rate1;
//    }
   
//    if(income <= tax2) {
//      return tax1 * rate1 + (income - tax1) * rate2;
//    } 
//    if(income > tax2) {
//      return tax1 * rate1 + (tax2 - tax1) * rate2 + (income - tax2) * rate3;
//    }
//     }

// console.log(calculateTaxes(10001));

// function getLargestExpressionResult(a, b) {
//      const sum = a + b;
//      const min = a - b;
//      const mult = a * b;
//      const div = a / b;
   
//      if (sum >= min && sum >= mult && sum >= div) {
//        return sum;
//      }
   
//      if (min >= sum && min >= mult && min >= div) {
//        return min;
//      }
   
//      if (mult >= min && mult >= sum && mult >= div) {
//        return mult;
//      }
   
//      if (div >= min && div >= mult && div >= sum) {
//        return div;
//      }
//    }

//    console.log(getLargestExpressionResult(1, 3));


// const value = 2;

// switch (value) {
//      case 5:
//          console.log('A few');
//          break;
//      case 10:
//      console.log('Many');
//      break;
//           default:
//      console.log('Some');
// }

// switch (true) {
//      case (value < 5):
//           console.log('A few');
//           break;
//      case (value > 10):
//           console.log('Many');
//           break;
//           default:
//      console.log('Some');
// }

function getDirection(direction) {

     switch(direction) {
   
       case 'forward':
   
         return format(0, 1);
   
       case 'back':
   
         return format(0, -1);
   
       case 'right':
   
         return format(1, 0);
   
       case 'left':
   
         return format(-1, 0);
   
       default:
   
         return format(0, 0);
     }
   }
   
   function format (x, y) {
     return `hor=${x} ver=${y}`;
   }
   
   console.log(getDirection('forward'));