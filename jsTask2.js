// 1)
/* let arr = [5, 8, 6, 2, 1, 4];
let cem = 0;
let hasil = 1;

for (let i = 0; i < arr.length; i++) {
    cem += arr[i];
    hasil *= arr[i];
}
console.log(cem , hasil); */

// 2)
/* let arr = [1, 8, 8, 9, 3, 3, 4, 6, 4];

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j]) {   //1ci i indexini j ile beraberliyini yoxlayanda j-- etmeye ehtiyac qalmadan duz gosterir. lessons jsDavam taskinda yazilandan ferqli.
      arr.splice(j, 1);
    }
  }
}
console.log(arr); */

//3)
/* let arr = ["a", true, 1, 7, "g", 5, false];
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
        arr.splice(i, 1);
        i--;   //silende o birini sildiyinin yerine yazdirir deye bir de geriye qayidib yoxlasin.
    }
}
console.log(arr); */

//4)
/* let arr = [6, 8, 1, 10, 33]; //iki for loopu ile hell etmeye chalishanda 10-un birden kichikmish goturulmesi problemi.
let max = arr[0];
let min = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
  if (arr[i] < min) {
    min = arr[i];
  }
}
console.log(max + " max", min + " min"); */

// 5)
/* let text = "Salam, necesiniz?";
let arr = text.split("");
console.log(arr.length); */

// 6)
/* let arr = [9, 10, 11, 12, 13, 14, 15]
let newArr = arr.map((item) => {
    return item * 2
})
console.log(newArr); */

// 7)
/* let arr = [3, 4, 5, 6, 7]
for (let i = arr.length-1; i >= 0; i--) {
    console.log(arr[i]);
} */

// 8)
/* let arr1 = [8, 9, 10, 11, 12, 14];
let arr2 = [8, 19, 1, 11, 2, 3];
for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i] + arr2[i]);
} */

//9)
/* let word = "fullstack";
let result = "";
for (let i = word.length - 1; i >= 0; i--) {
  result += word[i];
}
console.log(result); */

// 10)
/* let sentence = "Salam menim adim Gunaydir";
let arr = sentence.split(" ");
let result = "";

for (let i = arr.length - 1; i >= 0; i--) {
  result += arr[i] + " ";
}
console.log(result); */

//11)
/* let data = +prompt("uch reqemli bir eded daxil edin");
let teklikler = [
  "bir",
  "iki",
  "uch",
  "dord",
  "besh",
  "alti",
  "yeddi",
  "sekkiz",
  "doqquz",
];
let onluqlar = [
  "on",
  "iyirmi",
  "otuz",
  "qirx",
  "elli",
  "altmish",
  "yetmish",
  "seksen",
  "doxsan",
];
if (data > 100 || typeof data !== "number") {
  alert("uch reqemli ve eded daxil edin!");
} else {
  if (data < 10) {
    alert(teklikler[data]);
    // console.log(teklikler[data - 1]);
  } else if (data >= 10 && data < 20) {
    alert(onluqlar[0] + teklikler[data.toString().split("")[1] - 1]);
    // console.log(onluqlar[0] + teklikler[data.toString().split("")[1] - 1]);
  } else if (data >= 20 && data < 30) {
    alert(onluqlar[1] + teklikler[data.toString().split("")[1] - 1]);
    // console.log(onluqlar[1] + teklikler[data.toString().split("")[1] - 1]);
  } else if (data >= 30 && data < 40) {
    alert(onluqlar[2] + teklikler[data.toString().split("")[1] - 1]);
    // console.log(onluqlar[2] + teklikler[data.toString().split("")[1] - 1]);
  } else if (data >= 40 && data < 50) {
    alert(onluqlar[3] + teklikler[data.toString().split("")[1] - 1]);
    // console.log(onluqlar[3] + teklikler[data.toString().split("")[1] - 1]);
  } else if (data >= 50 && data < 60) {
    alert(onluqlar[4] + teklikler[data.toString().split("")[1] - 1]);
    // console.log(onluqlar[4] + teklikler[data.toString().split("")[1] - 1]);
  } else if (data >= 60 && data < 70) {
    alert(onluqlar[5] + teklikler[data.toString().split("")[1] - 1]);
    // console.log(onluqlar[5] + teklikler[data.toString().split("")[1] - 1]);
  } else if (data >= 70 && data < 80) {
    alert(onluqlar[6] + teklikler[data.toString().split("")[1] - 1]);
    // console.log(onluqlar[6] + teklikler[data.toString().split("")[1] - 1]);
  } else if (data >= 80 && data < 90) {
    alert(onluqlar[7] + teklikler[data.toString().split("")[1] - 1]);
    // console.log(onluqlar[7] + teklikler[data.toString().split("")[1] - 1]);
  } else if (data >= 90 && data < 100) {
    alert(onluqlar[8] + teklikler[data.toString().split("")[1] - 1]);
    // console.log(onluqlar[8] + teklikler[data.toString().split("")[1] - 1]);
  } else {
      alert("yuz");
      console.log("yuz");
  }
} */

// 12)
/* let sentence =
  "Javascript proqramlashdirma dilidir. Frontend uchun vacib bir dildir. Men bu dilde ishlemeyi xoshlayiram.";
let arr = sentence.split(" ");
console.log(arr.length); */

// 13)
/* let sentence = "  Salam,   siz   hara  lisiniz?  "
let arr = sentence.replace(/\s+/gi, " ").trim();
console.log(arr); */

// 14)
/* let sentence = "sentence ingilisce cumle demekdir.";
let result = "";
let arr = sentence.split(" ");
for (let i = 0; i < arr.length; i++) {
  result += arr[i].charAt(0).toUpperCase() + arr[i].substring(1) + " ";
}
console.log(result); */

// 15)
/* let arr1 = ["a", "b", "c"];
let arr2 = ["a", "b", "s"];
let result = [];

for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] !== arr2[i] || arr2.length !== arr1.length) {
    result.push(false);
  } else {
    result.push(true);
  }
}

if (result.includes(false)) {
  console.log("arraylar eyni deyil!");
} else {
  console.log("eynidir!");
} */

// 16)
/* let arr = [3, 6, 12, 8, 10, 7, 11, 9, 13];
let artma = [];
let azalma = [];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - i - 1; j++) {      //j = i-den 
    if (arr[j] > arr[j + 1]) {         //burda da j+1  evezine ele yuxaridakini i+1 kimi yazsaq daha aydin bashadushulen olar.
      let temp = arr[j];          //--1cini(i yazsaydin slice ehtiyac olmayacqdi deyesen.) yadda saxlayir
      arr[j] = arr[j + 1];        //1cini sonraki ile evez edirik.
        arr[j + 1] = temp;       // sonrakinina ise ilk evvel menimsetdiyimiz 1cinin deyerini qoyuruq.
    }                           //bu yuxaridaki komment izahlari 
  }
}
artma = arr.slice()

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] < arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
}
}
azalma = arr.slice();  //slice-siz olmurdu, niye
console.log(artma, "artma", azalma, "azalma",); */

// 17)
/* let data = prompt("eded yazin:")
alert(data.split("").join(" ")) */

//18)
/* let sentence = "Salam menim adim Gunaydir, Gunaydir menim adim";
let arr = sentence.replace(/[^A-z\s+]/gi, "").split(" ");
let tekrarSozler = []
for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            console.log(arr[j]);
        }
    }
} */

// 19)
/* let data = [
  {
    name: "eli",
    score: 20,
  },
  {
    name: "qerib",
    score: 100,
  },
];

for (let i = 0; i < data.length; i++) {
  if (data[i].score < 50) {
    delete data[i];
  }
}
console.log(data); */

// 20)
/* let metn1 = "hey there howre you.".replace(/[^A-z\s+]/gi, "").split(" ");
let metn2 = "hey there howre you.".replace(/[^A-z\s+]/gi, "").split(" ");
let result = [];

for (let i = 0; i < metn1.length; i++) {
  if (metn1[i] !== metn2[i]) {
    result.push(false);
  } else {
    result.push(true);
  }
}
if (result[0] !== true || result[1] !== true || result[2] !== true) {
  console.log("metnler eyni deyil!");
} else {
  console.log("eynidir!");
} */

// 21/22)
/* let oneHourSalary = 50;
let weekWorkHour = 45;
// find
let monthlyIncome = 0;
// heftelik 40-dan artiga emekhaqqi 2 qat:
let findP = function (oneHourSalary, weekWorkHour) {
  if (weekWorkHour > 40) {
    monthlyIncome = weekWorkHour * 2 * oneHourSalary * 4;
  } else {
    monthlyIncome = weekWorkHour * oneHourSalary * 4;
  }
  return monthlyIncome;
};

console.log(findP(50, 45)); */

// 23)
/* let a = "«ADNA»".replace("NA", "NSU");
console.log(a); */

//24)
/* let b = 867
let convertArr = b.toString().split("");
console.log(+convertArr[0] + +convertArr[1] + +convertArr[2]); */

// 25)
let cumle = "Salam, menim adim Gunaydir. Tanishligha shad oldum.";
let cumleler = cumle.split(".")
let reverse = ""
let b = ""; 
for (let i = 0; i < cumleler.length; i++) {
  let words = ((cumleler[i]).trim().split(" "));
  for (let j = words.length; j >= 0; j--) {
    console.log(words[j]);
    if (words[j] !== undefined) {
      reverse+= words[j] + " "
    }
  }
  reverse += ". "
  
}
let test = reverse.replace(/ . /g, ". ")
console.log(test);
