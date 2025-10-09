function even() {
  for (let i = 1; i <= 50; i++) {
    console.log(i * 2);
  }
}

function odd() {
  for (let i = 1; i <= 50; i++) {
    console.log(i * 2 - 1);
  }
}

// odd()
// even()

function max_utga(array) {
  let max = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    } else {
      max = max;
    }
  }
  // console.log(`maximium number= ${max}`)
  return max;
}

function niilber(array) {
  let niilber_had = 0;

  for (let i = 0; i < array.length; i++) {
    niilber_had = niilber_had + array[i];
  }
  console.log(`niilber= ${niilber_had}`);
}

// let array = [1, 1, 55, 1,1, 1,1,1,1];

// niilber(array)

function niilber_0(array) {
  let niilber_had = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      niilber_had = niilber_had + array[i];
    }
  }
  console.log(`0 ees ikh niilber= ${niilber_had}`);
}

// let array = [0, 1, 55, 1,1, 1,1,1,1];

// niilber_0(array)

function baga_too(array) {
  let min = array[0];

  for (let i = 0; i < array.length; i++) {
    if (min > array[i]) {
      min = array[i];
    } else {
      min = min;
    }
  }
  console.log(min);
}

// let array = [-1, -1, 55, -1,-1, -1,-1,-1,-1];

// baga_too(array)

// max_utga(array)

function index_max(array) {
  for (let i = 0; i < array.length; i++) {
    if (max_utga(array) == array[i]) {
      console.log(i + 1);
      return i + 1;
    }
  }
}

// let array = [1,2,3,4,5,6,66,66,-1];
// index_max(array);

function esreg_dar(array) {
  let es_arr = [];
  for (i = 0; i < array.length; i++) {
    es_arr.push(array[array.length - 1 - i]);
  }
  console.log(es_arr);
}
// let array = [1,2,3,4,5,6,66,66,-1];
// esreg_dar(array)

function uul(array) {
  let uul_too = [];
  for (i = 0; i < array.length; i++) {
    if (i == 0) {
      if (array[i] > array[i + 1]) {
        uul_too.push(array[i]);
      }
    }
    if (i == array.length - 1) {
      if (array[i] > array[i - 1]) {
        uul_too.push(array[i]);
      }
    }
    if (array[i] > array[i + 1] && array[i] > array[i - 1]) {
      uul_too.push(array[i]);
    }
  }
  console.log(uul_too.length);
}

// let array = [3, 2, 1, 4, 3, 6, 68, 66, 67];
// uul(array);

function hos(array) {
  // let hos=[]
  //     for (i=0; i<array.length; i++){
  //             for (a=i; a<array.length; a++){
  //             if (array[i] == array[a]&& i!=a){
  //                 hos.push(array[i])
  //             }
  //     }
  // }
  //     console.log(hos)
  for (i = 0; i < array.length; i++) {
    for (a = i; a < array.length; a++) {
      console.log(array[i], array[a]);
    }
  }
}

// let array = [3, 4, 2, 3];
// hos(array);

function niilber_hos(array, num) {
  let niil = [];
  for (i = 0; i < array.length; i++) {
    for (a = i; a < array.length; a++) {
      if (array[i] + array[a] == num && i != a) {
        niil.push(array[i]);
        niil.push(array[a]);
      }
    }
  }
  console.log(niil);
}

//  let array = [3,2,1,2,4,3,0,4];
//  niilber_hos(array,5)

function ogtol(array1, array2) {
  let ogt = [];
  for (i = 0; i < array1.length; i++) {
    //         for (a=i; a<array2.length; a++){
    //         if (array1[i]==array2[a]){
    //             ogt.push(array1[i])
    //             index1.push(i)
    //                   }
    // }
    if (array2.includes(array1[i])) {
      if (!ogt.includes(array1[i])) {
        ogt.push(array1[i]);
      }
    }
  }
  console.log(ogt);
}

//  let array1 = [3,2,1,2,4,3,0,7];
//  let array2 = [0,0,3,0,7,0,0,7];
//  ogtol(array1,array2)

function racist(array1) {
  let nemeh = [];
  let hasah = [];
  let niit = [];
  for (i = 0; i < array1.length; i++) {
    if (array1[i] < 0) {
      hasah.push(array1[i]);
    } else if (array1[i] >= 0) {
      nemeh.push(array1[i]);
    }
  }
  console.log((niit = hasah.concat(nemeh)));
}

//  let array1 = [-3,2,-1,-2,4,-3,0,-7];
//  racist(array1)

function neg_dutuu(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] + 1 != arr[i + 1] && arr.length > i + 1) {
      console.log(arr[i] + 1);
    }
  }
}

// let arr=[1,2,3,4,5,6,8,9,10,12]
// neg_dutuu(arr)

function check_gerel(oarr) {
  for (let i = 1; i <= oarr.length; i++) {
    for (let hun = 1; hun <= oarr.length; hun++) {
      if (hun % i === 0) {
        oarr[hun - 1]++;
      }
    }
  }
  console.log(oarr);
}

let zero = [];

for (let i = 0; i < 100; i++) {
  zero.push(0);
}
// check_gerel(zero);

function davtalt(arr, num) {
  let zero = 0;

  for (i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
      zero++;
    }
  }
  console.log(zero);
}

// let arr = [1, 2, 3, 5, 4, 5, 5, 5, 5, 4, 1];
// davtalt(arr, 1);

function murdugch(arr, hulgaich) {
  let sherlok = 0;
  let unen = false;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == hulgaich) {
      sherlok++;
      unen = true;
    }
  }
  console.log(`hulgaich ene dotor ${sherlok} baina`);
  if (unen == true) {
    console.log(`Unen`);
  } else {
    console.log(`Hudal`);
  }
}

// murdugch(arr, 1);

function find_loser(arr) {
  let max1;
  max1 = max_utga(arr);
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == max1) {
      arr[i] = -999;
    }
  }
  console.log(`loser is ${max_utga(arr)}`);
}

// find_loser(arr);

function kei(arr, k) {
  let new_arr = [];

  for (let a = 0; a < arr.length; a++) {
    new_arr.push(arr[a]);
  }
  for (i = 0; i < k; i++) {
    for (j = 0; j < arr.length; j++) {
      if (j == 0) {
        new_arr[j] = arr[arr.length - 1];
      } else {
        new_arr[j] = arr[j - 1];
      }
    }
    for (h = 0; h < arr.length; h++) {
      arr[h] = new_arr[h];
    }
  }
  return new_arr;
}

// kei(arr, 6);
function eliminate(arr) {
  for (a = 0; a < arr.length; a++) {
    for (s = 0; s < arr.length; s++) {
      if (arr[a] == arr[s] && s != a) {
        arr.splice(s, 1);
      }
    }
  }
  console.log(arr);
}
// let arr = [1, 2, 3, 5, 4, 5, 5, 5, 5, 4, 1];
// eliminate(arr);

function bactral(arr) {
  let sum = 0;
  let bact = 1;
  for (i = 0; i < arr.length; i++) {
    for (b = 1; b <= arr[i]; b++) {
      bact = bact * b;
    }
    sum = sum + bact;
    bact = 1;
  }
  console.log(sum);
}
// let arr = [1, 2, 3, 4];
// bactral(arr);

function rotation_check(arr1, arr2) {
  for (i = 0; i < arr1.length; i++) {
    const rotatedArr = kei(arr1, i);

    let isSame = true;

    for (j = 0; j < arr1.length; j++) {
      if (rotatedArr[j] !== arr2[j]) {
        isSame = false;
      }
    }

    if (isSame) {
      return true;
    }
  }

  return false;
}

// let arr1 = [1, 2, 3, 4];
// let arr2 = [4, 1, 2, 3];
// const result = rotation_check(arr1, arr2);
// console.log(result);

function sort(arr1, arr2) {
  let arr = [];
  let index = [];
  for (i = 0; i < arr1.length; i++) {
    if (arr1[i] > arr2[0]) {
      index.push(i);
    }
  }
  console.log(index);
}

let arr1 = [1, 2, 3, 4];
let arr2 = [2, 3, 4, 5, 6];
sort(arr1, arr2);
