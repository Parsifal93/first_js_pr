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
// const numbers = [1, 2,3,5,6,7,8,9];
// console.log(numbers.filter(function(value) {
//     return value % 2 ===1;
// }));


// ///////2///////

// const strings = ["Игнат", "Валерия", "Игорь", "Александр"];

// console.log(strings.filter(function (value){
//     return value.charAt(0) === "И"
// }));


//////первое задание///////
// const array = [];
// const num = array.push (1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// console.log(array);
// console.log(num);


//////второе задание/////
// const array = [1, 2, 3, 4, 5, 6];

// console.log(array.unshift(0));
// console.log(array);

// //////третье задание////////
// const array = [1, 2, 3, 4, 5, 6];
// array.pop()
// array.shift()

// console.log(array);


//////четвернтое/пятое задание////////
// const array = [1, 2, 3, 4, 5, 6];
// const remov = array.splice(3,1, 9);

// console.log(array);

////////шестое/седьмое задание/////////
// const array = [1, 2, 3, 4, 5, 6];
// const clone = Object.assign([],array);
// if (clone.length>3){
//     clone.length = 3;
// }

// console.log(array);
// console.log(clone);

//////восьмое задание///////
// const  array = [[],[],[],[],[],[],[],[]];

// console.log(array);

///////девятое задание///////
// const  array = [[],[],[],[],[],[],[],[]];

// console.log(array.fill(0,0,4));


///////десятое задание////////
// const array = [1,2,3,4,5,6,7,8,9,10];





//////////////////////////////////////////////////
// const mobiles = [{prise: 120}, {price: 200}, {price: 150}];

// const reduceSumm = (accum, value) => {
//     console.log(accum);
//      return Number(accum) + value.price;
// }

// const summPrices = mobiles.reduce(reduceSumm, 0);
// console.log(summPrices);



class User {
    constructor(email, phone, imgSrc, gender, age) {
        if(age < User.ageRestriction) {
            throw new Error(
                "Age must be greater than " + User.ageRestriction + "years"
            );
        }
        this.email = email;
        this.phone = phone;
        this.imgSrc = imgSrc;
        this.gender = gender;
        this.score = 0;

        this.id = ++User.userCount;
    }
        sendSms(message) {
            console.log(`Number phone sent to ${this.phone} whith sms: ${message} `);
        }
        sendEmail(message) {
            console.log(`email sent to ${this.email} with message: ${message}`);
        }
        addScore(amount) {
            this.score += amount;
            return this.score;
           
        }
        
    }

