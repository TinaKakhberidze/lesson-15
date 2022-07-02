// let totalPrice = 400;
// let distance = 15;
// let deliveryPrice = 5;

// if (distance < 10) {
//   console.log(`delivery price is 5GEL`);
// }

// if (distance < 10) {
//   console.log(`delivery price is  GEL`);
// } else {
//   console.log(`delivery price is 10 GEL`);
// }

// let distance = 55;

// if (distance < 10) {
//   console.log(`delivery price is 2 GEL`);
// } else if (distance >= 10 && distance < 20) {
//   console.log(`delivery price is 10 GEL`);
// } else if (distance >= 20 && distance < 50) {
//   console.log(`delivery price is 15 GEL`);
// } else {
//   console.log(`delivery price is 20 GEL`);
// }
// let totalPrice = 400;
// // let distance = 15;
// let deliveryPrice = 5;

// console.log(distance, totalPrice);

// if (distance < 10 || totalPrice > 400) {
//   console.log(`delivery price is 2 GEL`);
// }

// switch (distance) {
//   case 5:
//     console.log(`delivery price is 2 GEL`);

//     break;
//   case 15:
//     console.log(`delivery price is 6 GEL`);

//     break;

//   default:
//     console.log(`delivery price is 11 GEL`);
//     break;
// }

// let distance = 15;

// let message = " ";
// if (distance < 20) {
//   message = `delivery price is 2GEL`;
// } else {
//   message = `delivery price is 4GEL`;
// }

// message = distance < 10 ? `delivery price is 2GEL` : `delivery price is 4GEL`;
// console.log(message);

//1.
const currentDay = new Date().getDay();
switch (currentDay) {
  case 0:
    console.log("კვირა");

    break;
  case 1:
    console.log("ორშაბათი");

    break;
  case 2:
    console.log("სამშაბათი");

    break;
  case 3:
    console.log("ოთხშაბათი");

    break;
  case 4:
    console.log("ხუთშაბათი");

    break;
  case 5:
    console.log("პარასკევი");

    break;
  case 6:
    console.log("შაბათი");

    break;
}

// 2.
for (let i = 0; i < 99; i++) {
  console.log("you are beautiful", i);
}

//3.

let j = 0;
while (j < 50) {
  console.log(j, `hey`);
  j++;

  //   if (i == "4") {
  //     console.log(i, "break");
  //     break;
  //   }
}

//4.
let t = 0;
do {
  console.log("Great job", t);
  t++;
} while (t < 150);

//5.
let myArr = [];
let i = 0;
let myArrLength = myArr.length;
myArr.push(i * i);
console.log(myArr);

for (let i = 0; i < 1000; i++) {
  console.log(myArr, i, "stop");
}
