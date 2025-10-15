let obj = {
  ner: {
    batsaihan: { nas: 12, dun: 95 },
    baljinyam: { nas: 12, dun: 70 },
    gonchigperenlei: { nas: 12, dun: 60 },
  },
};

// console.log(obj.ner.batsaihan.dun);

const Arr = [1, 2, 3, 4, 5, 5, 6, 67, 7, 87];

const result = Arr.map((a) => {
  return a * a;
});

// // console.log(result);
// function Insertion(arr1) {
//   let arr = arr1;
//   for (j = 0; j < arr.length; j++) {
//     for (i = j + 1; i > 0; i--) {
//       if (arr[i] < arr[i - 1]) {
//         let temp = arr[i];
//         arr[i] = arr[i - 1];
//         arr[i - 1] = temp;
//       }
//     }
//   }
//   return arr;
// }

// function hadgalah(arr) {
//   let ob = { dun: [], id: [] };
//   for (i = 0; i < arr.length; i++) {
//     ob.dun.push(arr[i]);
//     ob.id.push(i + 1);
//   }
//   console.log(ob);
//   return ob;
// }
// let arr = [55, 66, 78, 34, 23, 87, 91];
// let ob = hadgalah(arr);

// let sorted = ob.dun.sort((a,b) => a-b);

// const ikh = Arr.find((element) => element <= 2);
// console.log(ikh);
// const ikha = Arr.filter((a, index) => a <= 2);
// console.log(ikha);

// const sorta = Arr.sort((a, b) => a - b);
// console.log(sorta);

let str = "ads";

const reversestr = (str) => {
  return str.split("").reverse().join("");
};

// console.log(reversestr(str));

const palind = (sda) => {
  return sda.split("").reverse().join("") == sda;
};

// console.log(palind("sdads"));
let arr = ["a", "e", "u", "i", "o"];
const vowel = (vo) => {
  return vo.split("").filter((vow) => arr.includes(vow)).length;
};

// console.log(vowel("asduiouk"));

const long = (str) => {
  return str.split(" ").filter(
    (word) =>
      word.length ==
      str
        .split(" ")
        .map((a) => a.length)
        .sort((a, b) => b - a)[0]
  );
};

// console.log(long("i love you dear"));

const occ = (sda) => {
  return sda.split("").reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});
};

// console.log(Object.values(occ("lovel")).sort((a, b) => b - a)[0]);

// console.log(occ("lovel"));

const yesh = (arr) => {
  let obj = arr.map((num, ind) => {
    return { index: ind + 1, number: num };
  });
  let sorted = [...arr].sort((a, b) => b - a);
  let arra = [];
  console.log(sorted);
  console.log(obj);
  for (i in sorted) {
    for (j in sorted) {
      obj[i].number == sorted[j] ? arra.push(j - -1) : (arra = arra);
    }
  }
  return arra;
};

console.log(yesh([95, 64, 23, 56, 24]));

const ovog = (obj) => {
  let O = obj.lastname.split("")[0].toUpperCase();
  let O2 = obj.firstname.split("")[0].toUpperCase();
  let O3 = obj.firstname
    .split("")
    .filter((el, num) => num !== 0)
    .join("");
  let fullname = O + ". " + O2 + O3.toLowerCase();
  return fullname;
};

// const name = { firstname: "bataaaashi", lastname: "CHold" };
// console.log(ovog(name));
