// // let message='22';
// // let user='User';
// // let num=2;

// // alert(num);
// // alert(user);
// // alert(message);
// // alert(num+user);
// // alert(message+num);

// // let num=22;
// // let str='text';
// // let num2=true;
// // let num3=false;
// // let srtoc='111';
// // let num4=222;

// // console.log(Number (srtoc)+num4);
// // console.log(num2+num3);
// // console.log(num3-num2);
// // console.log(Number(num+str));

// // let num=2;
// // let num2=3;
// // console.log(num>num2);

// // let num3="4";
// // let num4=5;
// // console.log(num3<num4);

// // let num5=5;
// // let num6=5;
// // let num7='5';
// // console.log(num5==num6||num5===num6 );

// // console.log(num5===num6&&num6===num7&&num5===num7);

// // console.log((190>150)&&(70<80));
// // console.log((190>150)||(70<80));

// // const num = 2;
// // const str='3';

// // const getSumOfTwo = function (num1, num2) {
// //     //checks
// //     if (isNaN(num1)|| isNaN(num2)) {
// //         return false;
// //     }
// //     const sum = parseFloat(num1) + parseFloat(num2);
// //     return sum;
// // }
// // const result = getSumOfTwo(num, str);
// // console.log(result);

// //  const a = 5;
// // const b = 8;
// // const getMaxOfTwo = function (num3, num4) {
// //   if (isNaN(num3) || isNaN(num4)) {
// // return false;
// //   }
// //   if (parseFloat(num3) < parseFloat(num4)) {
// //     return num4;
// //   }
// //    return num3;
// //  };
// //  const result = getMaxOfTwo(a, b);
// //  console.log(result);

// // const c = 10;
// // const d = 8;
// // const getMinOfTwo = function (num5, num6) {
// //   if (isNaN(num5) || isNaN(num6)) {
// //     return false;
// //   }
// //   if (parseFloat(num5) < parseFloat(num6)) {
// //     return num6;
// //   }
// //   return num5;
// // };
// // const result = getMaxOfTwo(c, d);
// // console.log(result);

// const isEven = function (number) {
//     if(isNaN(number)){
//         return null;
//     }

//     return number % 2 === 0;

// }

// console.log(isEven(1));

// const number = +prompt("Введите число между 0 и 3", "");
// switch (number) {
//   case 0:
//     alert("Вы ввели число 0");
//     break;
//   case 1:
//     alert("Вы ввели число 1");
//   case 2:

//   case 3:
//     alert("Вы ввели число 2, а может и 3");
//     break;
// }

// if (number === 0) {
//   alert('Вы ввели число 0');
// }

// if (number === 1) {
//   alert('Вы ввели число 1');
// }

// if (number === 2 || number === 3) {
//   alert('Вы ввели число 2, а может и 3');
// }

// function sayHello(user) {
//   if (true) {
//     let alex = 1;
//     console.log(username);
//   }

//   //console.log(alex);

//   const message = "Hello," + user + "!";
//   alert(message);
//   return;
// }

// //console.log(message)
// let username = "Sveta";
// sayHello(username);

// username = "Jhon";
// sayHello(username);

// username = "Ivan";
// sayHello(username);

// function calcRectSqare(sideA, sideB) {
//   if ((typeof sideA !== "numder" ||
//     typeof sideB !== "number") &&
//      ( typeof sideA !== "string" ||
//     typeof sideB !== "string")) {
//     return null;
//   }
//   if (isNaN(sideA) || isNaN(sideB)) {
//     return null;
//   }
//   return sideA * sideB;
// }
// console.log(calcRectSqare("4", "4"));

// function getNameColor(r, g, b) {

//   return   'rgb (' + r +',' + g +',' + b +')';

// }

//   console.log(getNameColor(23, 100, 134));

// function avg(num1, num2, num3) {
//   return (num1 + num2 + num3) / 3;
// }
// const avgRes = avg(3,3,6);
// console.log(avgRes);

// function getText(tex) {

//     let text = 'dsfrsdf' ;

//   //

//    return (text);
// }
// let a = getText(str);
// console.log(a);

// let num = 2;
// function MyNum(numss) {

//   let nums = 5 + numss;
//   return (nums);
// }
// let n = MyNum(num);
// console.log(n);

///

/*function sayStr() {
  
  return "str(" + "Hello" + "," + "s" + ")";
}

console.log(sayStr());*/

/*const giraffe = {
  age: 5,
  weight: 100, 
  sleeping_girafe = false,

}*/

const user = {
  firstName: "Jhon",
  lastName: "Doe",
  
  giveInfo: function () {
    console.log(this)
  },
  info: {
 
    
    giveInfo: function() {
      console.log (this)

    },
  }
}

user.info.giveInfo() 
