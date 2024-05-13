// 1)
/* let arr = [1, 4, 5, 6, 3, 2, 1, 4, 6, 7];
for (let i = 0; i < arr.length; i++) {
  if (i % 2 !== 0) {
    console.log(arr[i]);
  }
} */

// 2)
/* let arr = [1, 4, 5, 60, 3, 2, 10, 44, 6, 70];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 5 === 0) {
    console.log(arr[i]);
  }
} */

// 3)
/* let arr = [1, 14, 5, 60, 3, 21, 10, 44, 6, 70, 40];
let yeddiyeBolunenlerMassivi = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 7 === 0) {
    yeddiyeBolunenlerMassivi.push(arr[i]);
  }
}
console.log(yeddiyeBolunenlerMassivi[yeddiyeBolunenlerMassivi.length-1]);
 */

// 4)
/* const changePlace = ([...arr]) => {
  let enBoyuk = arr[0];
  let enKicik = arr[0];
  let temp;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > enBoyuk) {
      enBoyuk = arr[i];
    }
    if (arr[i] < enKicik) {
      enKicik = arr[i];
    }
  }
  temp = enKicik;
  enKicik = enBoyuk;
  enBoyuk = temp;
  console.log("enBoyuk --" + enBoyuk, "enKicik --" + enKicik);
};
changePlace([5, 90, 20, 10, 2]); */

// 5)
/* let arr = [1, 14, 5, 60, 3, 21, 10, 44, 6, 70, 40];
let i = Math.floor(Math.random() * arr.length);
console.log(arr[i]); */

// 6)
/* for (let i = 1; i <= 100; i++) {
  let str = i.toString()
  if (str[str.length - 1] === "1") {
    console.log(i);
  }
} */

// 7)
// alqoritmasi tamamile ozume aiddir:)
/* let ifade = "alma";
let results = [];

// eger cutlu ifadedirse:
if (ifade.length % 2 === 0) {
  for (let i = 0; i < ifade.length / 2; i++) {
    // 1-ciynen sondan 1cini, 2ci ile sondan ikincini yoxlasin deye:
    let compare = ifade[i] === ifade[ifade.length - (i + 1)];
    results.push(compare);
  }
} else {
  // teklilerde 1-i chixiriq length-den
  for (let i = 0; i < ifade.length / 2 - 1; i++) {
    // 1-ciynen sondan 1cini, 2ci ile sondan ikincini yoxlasin deye:
    let compare = ifade[i] === ifade[ifade.length - (i + 1)];
    results.push(compare);
  }
}
results.includes(false)
  ? console.log(ifade + " ifadesi polindrom deyil")
  : console.log(ifade + " ifadesi polindromdur");
 */

// 8)
/* let soz1 = "osla";
let soz2 = "asoa";

if (soz1.length === soz2.length) {
  let soz1arr = soz1.split("");
  for (let i = 0; i < soz1arr.length; i++) {
    console.log(soz2.includes(soz1arr[i]));
  }
} else {
  console.log("anaqram deyiller");
} */

// 9)
/* let saitler = ["a", "ı", "o", "u", "e", "ə", "i", "ö", "ü"];
let metn = "Salam, how are you doing?";

for (let i = 0; i < saitler.length; i++) {
  metn = metn.replaceAll(saitler[i], "");
}
console.log(metn); */

// 10)
// Initialize an empty array to store the alphabet
/* let istifadechiStaticInserti = 3;
var alphabetsNumbers = [];
// Loop through ASCII codes for uppercase letters ('A' to 'Z')
for (let i = 65; i <= 90; i++) {
  // Convert ASCII code to its corresponding character and push it to the array
  alphabetsNumbers.push(String.fromCharCode(i).toLowerCase());
}
// added numbers too:
for (let j = 0; j < 10; j++) {
  alphabetsNumbers.push(j);
}

let outputResult = "";
for (let g = 0; g < istifadechiStaticInserti; g++) {
  let indexWithMath = Math.floor(Math.random() * istifadechiStaticInserti);
  outputResult += alphabetsNumbers[indexWithMath];
}

console.log(outputResult); */ //nese ancaq insert sayi qeder bashliqdan goturur niyese..

// 11)
// let soz = "Salam, hi, hey, he.";
// let clearedWord = soz.replace(/[^A-z]/gi, '');
// let saitCount = [];
// let samitCount = 0;

// let saitler = ["a", "ı", "o", "u", "e", "ə", "i", "ö", "ü"];
// for (let i = 0; i < clearedWord.length; i++) {
//   if (saitler.includes(clearedWord[i].toLowerCase())) {
//     saitCount.push(clearedWord[i]);
//   }
//   else {
//     samitCount++
//    }
// }

// console.log(saitCount.length, "sait var");
// console.log(samitCount, "samit var");

// 12)
/* let daxilOlanEded = 8;
let total = 0;
let isMukemmelEded = false;

for (let i = 1; i <= daxilOlanEded; i++) {
  if (daxilOlanEded % i === 0 && daxilOlanEded !== i) {
    total += i;
    if (total === daxilOlanEded) {
      isMukemmelEded = true;
    }
  }
}
console.log(
  daxilOlanEded + (isMukemmelEded
    ? " mukemmel ededdir!"
    : " mukemmel eded deyil!"),
); */

// 13)
/* let daxilOlanEdedinReqemleriCeminiTap = (reqem) => {
  let reqemAsString = reqem.toString();
  let reqemAsArray = reqemAsString.split("");
  let total = 0;
  for (let i = 0; i < reqemAsArray.length; i++) {
    total += +reqemAsArray[i];
  }
  console.log(total);
};

daxilOlanEdedinReqemleriCeminiTap(3467); */

// 14)
/* let str = "hi dear!"
let substringByG = (a, b) => {
  return str.substring(a, b);
}
console.log(substringByG(1,2)); */

// 15)
/* let str = "hi dear hi!";
let indexOfGh = (a, b) => {
  return str.indexOf(a, b);
}

console.log(indexOfGh("hi", 1));  //8 gorsenir niye???????
 */

// 16)
// 1990-01-31T21:00:00.000Z   <--- 1-de 31 qaytardi.
/* let tarix1 = new Date(2015, 1, 1).toLocaleDateString();
let tarix2 = new Date(1990, 2, 31).toLocaleDateString();

let tarix1Arr = tarix1.split("/");
let tarix2Arr = tarix2.split("/");

let ferqleri = "";
let ay;
let gun;
let il;

for (let i = 0; i < tarix1Arr.length; i++) {
  let result = tarix1Arr[i] - tarix2Arr[i];
  ferqleri += result.toString().replace("-", "") + "/";
  let ferqleriArr = ferqleri.split("/");
  ay = ferqleriArr[0] + " ay";
  gun = ferqleriArr[1]+" gun";
  il = ferqleriArr[2] + " il";
}

console.log(il + ", " + ay + ", " + gun); */
