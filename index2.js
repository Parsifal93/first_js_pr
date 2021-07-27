//const array = [0, 2, 4 ,6 , 8, 10];
// console.log(array);
// array.splice(2, 2)
// console.log(array);

//  console.log(array);
//  array.splice(2, 2, 4, 4.5)
// console.log(array);


//  for( let i = 1; i < array.length;i++) {
//      if(i % 2 === 1) {
//     array.splile(i , 0 , i);
//  } 
// }
//  console.log(array);

// const str = 'this is string'; 
// const arrayStr = str.split(" ")
// console.log(arrayStr);

/////1////
const numbers = [1, 2,3,5,6,7,8,9];
console.log(numbers.filter(function(value) {
    return value % 2 ===1;
}));


///////2///////

const strings = ["Игнат", "Валерия", "Игорь", "Александр"];

console.log(strings.filter(function (value){
    return value.charAt(0) === "И"
}));
