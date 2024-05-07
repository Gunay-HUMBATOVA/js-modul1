//I:
// 1-den 10a kimi ededlerin hasilini tapin:
/* let digit = 0;
let hasil = 1;
let cem = 0;
// // cem
// while (digit < 10) {
//   digit++;
//   cem += digit;
// }
// console.log(cem);   //55
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// // hasil
// while (digit < 10) {
//     digit++;
//     hasil *= digit;
// }
// console.log(hasil);   //3628800 */

// ----------------------------------------------------
// II:
// 1-den 100-e qeder 'cut ededleri' / onlarin cemini / hasilini tapin:
/* let cemi = 0;
let hasili = 1;

// cut ededleri
for (let i = 1; i <= 100; i++) {
    if (i%2==0) {
        cemi += i;
        hasili *= i;
    }
}
console.log(cemi, 'cemi');         // 2550 cemi
console.log(hasili, "hasili");     // 3.4243224702511973e+79 hasili */

// ------------------------------------------------------
// III.
// 3 reqemli ededlerin ededi ortasini(ededleri toplayib sayina bolunmesi) tapin:
/* let total = 0;
let sayi = 0;
let divide = 1;

for (let a = 100; a <= 999; a++) {
    sayi += 1;
    total += a;
}
divide = total / sayi;
console.log(divide, 'divide'); //549.5 divide */

// ------------------------------------------------------
// IV.
// 3 reqemlilerden 7 ve 8e bolunen ededleri tap:
/* for (let b = 100; b <= 999; b++) {
  if ((b%7)==0 && (b%8) == 0) {
    console.log(b);
  }
} */

// ------------------------------------------------------
// V.
// 3 reqemlilerden 7 ve 8e bolunen ededlerin cemini tap:
/* let result = 0;
for (let b = 100; b <= 999; b++) {
  if (b % 56 == 0) {
    result += b;
  }
}
console.log(result);    //8512 */

// ------------------------------------------------------
// VI.
// 3 reqemlilerden 7 ve 8e bolunen ilk ededi tap:
/* for (let c = 100; c <= 999; c++) {
  if (c % 56 == 0) {
      console.log(c);    //112 
      break;
  }
} */

// ------------------------------------------------------
// VII.
// 3 reqemlilerden 7 ve 8e bolunen son ededi tap:
/* for (let c = 999; c >= 100; c--) {
    if (c % 56 == 0) {
      console.log(c);    //952 
      break;
  }
} */

// ------------------------------------------------------
// VIII.
// 1-den 100e qeder sade ve murekkeb ededleri tapin:
/* console.log("Sade ve murekkeb ededler:");
for (let x = 2; x <= 100; x++) {
  let sadedir = true;

  for (let y = 2; y <= Math.sqrt(x); y++) {
    if (x % y === 0) {
      sadedir = false;
      break;
    }
  }

  if (sadedir) {
    console.log(x + " ~~ sade ededdir.");
  } else {
    console.log(x + " -- murekkeb ededdir. ");
  }
} */

// ------------------------------------------------------
// IX.
// verilmis 3 ededden en boyuk ve kiciyini tapin:
/* let a = 7;
let b = 77;
let c = 777;

let enBoyuk = 0
let enKicik = 0
if (a > b && a > c) {
    enBoyuk = a;
} else if (b > c) {
    enBoyuk = b;
} else {
    enBoyuk = c;
}

if (a < b && a < c) {
    enKicik = a;
} else if (c < b && c < a) {
    enKicik = c;
} else {
    enKicik = b;
}

console.log(enBoyuk);
console.log(enKicik); */

// ------------------------------------------------------
// X.
// tek cut oldugunu de
/* const isEvenOrAdd = +prompt("eded yazin");

if (isEvenOrAdd % 2 == 0) {
  console.log("cutdur");
} else if (isEvenOrAdd / isEvenOrAdd === 1) {
  console.log("eded tekdir");
} else {
  console.log("hecne");
}
 */

// ------------------------------------------------------
// XI.
// 3 reqemli ededlerin ededi ortasini(ededleri toplayib sayina bolunmesi) tapin:
/* let count = 0;
let total = 0;
let result = 1;
for (let o = 100; o <= 999; o++) {
  total += o;
  count++;
  result = total / count;
}
console.log(result); //549.5;
 */
// XII.
/* let twoDigits = prompt("iki reqem daxil edin");
let riyaziEmel;
if (twoDigits.length > 2) {
  alert("2-den chox ve reqem olmayan ifadeler daxil etmeyin");
} else {
  riyaziEmel = prompt("bir riyazi emel daxil edin");
  if (
    riyaziEmel !== "+" &&
    riyaziEmel !== "-" &&
    riyaziEmel !== "/" &&
    riyaziEmel !== "*"
  ) {
    alert("bir Riyazi emel daxil edin");
  }
}
let birinciReqem = twoDigits.split("")[0];
let ikinciReqem = twoDigits.split("")[1];
const result = eval(+birinciReqem + riyaziEmel + +ikinciReqem)
alert("cavab: " + result);
 */
// XIII.
// Daxil edilmis ededin boluneni olan butun 3 reqemli ededleri chixarin.
/* let daxilEdilenEded = prompt(
  "eded daxil edin, butun 3 reqemli bolenlerini gosterek :)"
);
for (let i = 100; i < 999; i++) {
  if (+daxilEdilenEded % i === 0) {
    console.log(i);
  }
} */

// XIV.
// ededin butun mumkun tam bolenlerini tapin
/* let daxilEdilenEded = prompt(
  "eded daxil edin, butun tam bolenlerini gosterek :)"
);
for (let i = 0; i <= +daxilEdilenEded; i++) {
  if (+daxilEdilenEded % i === 0) {
    console.log(i);
  }
} */

// XV.
// 12 ededi hansi 2 ededin cemi ola biler: (hamisi)
/* for (let j = 0; j < 12; j++) {
  for (let i = 0; i < 12 / 2; i++) {
    if (j + i === 12) {
      console.log(i, j);
    }
  }
} */
// XVI.
// iki deyishenin deyerlerinin yerini deyishe bilen bir proqram yazin:
/* let x = 9,
  y = 10;

// 1ci usul:
let temp = x;
x = y;
y = temp;

// 2ci usul:
x = x + y;
y = x - y;
x = x - y;
 */

// XVII.
/* const tamOlduguYoxlanan = +prompt("eded daxil et, tam oldughu yoxlansin:");

if (Math.floor(tamOlduguYoxlanan) === tamOlduguYoxlanan) {
  alert(tamOlduguYoxlanan + " eded tam ededdir");
} else {
  alert("tam deyil, menfidir.");
} */

// XIX.
/* let havaDerecesi = +prompt("havanin derecesini yaz:");

if (havaninDerecesi < 0) {
  alert("chox soyuq");
} else if (havaninDerecesi > 15 || havaDerecesi < 0) {
  console.log("soyuq");
} else if (havaninDerecesi >= 30 || havaDerecesi > 15) {
  console.log("isti");
} else if (havaninDereces > 30) {
  console.log("chox isti");
} else {
  console.log("yanlishdir");
}*/

// XX.
/* let hefteninGunleri = +prompt("reqem yazin:");
switch (hefteninGunleri) {
  case 1:
    alert("Bazar ertesi");
    break;
  case 2:
    alert("Chershenbe axshami");
    break;
  case 3:
    alert("Chershenbe");
    break;
  case 4:
    alert("Cume axshami");
    break;
  case 5:
    alert("Cume");
    break;
  case 6:
    alert("Shenbe");
    break;
  case 7:
    alert("Bazar");
    break;

  default:
    alert("Yanlishdir");
    break;
} */

// XXI.
/* let ayReqemi = +prompt("reqem yazin:");

if (ayReqemi <= 3) {
  alert("Qish fesli");
} else if (ayReqemi >= 4 && ayReqemi <= 6) {
  alert("Yaz fesli");
} else if (ayReqemi >= 7 && ayReqemi <= 9) {
  alert("Yay fesli");
} else if (ayReqemi >= 10 && ayReqemi <= 12) {
  alert("Payiz fesli");
} */
