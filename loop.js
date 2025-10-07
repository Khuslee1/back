function even(){
for (let i=1; i<=50; i++) {
console.log(i*2);
}}

function odd(){
for (let i=1; i<=50; i++) {
console.log(i*2-1);
}}

// odd()
// even()

function max_utga(array) {
let max=array[0]

for (let i=0 ;i<array.length; i++) {
if (array[i]>max) {
    max=array[i]
}
else {
    max=max
}
}
// console.log(`maximium number= ${max}`)
return max;
}

function niilber(array) {
    let niilber_had=0

for (let i=0 ;i<array.length; i++) {
    niilber_had=niilber_had+array[i]
}
console.log(`niilber= ${niilber_had}`)
    
}

// let array = [1, 1, 55, 1,1, 1,1,1,1];

// niilber(array)

function niilber_0(array) {
    let niilber_had=0

for (let i=0 ;i<array.length; i++) {
    if (array[i]>0){
    niilber_had=niilber_had+array[i]
    }
}
console.log(`0 ees ikh niilber= ${niilber_had}`)
    
}

// let array = [0, 1, 55, 1,1, 1,1,1,1];

// niilber_0(array)

function baga_too(array) {
    let min=array[0];

    for (let i=0 ;i<array.length; i++) {
    if (min>array[i]){
   min=array[i]
    }
    else {
           min=min
    }
}
console.log(min);
}


// let array = [-1, -1, 55, -1,-1, -1,-1,-1,-1];

// baga_too(array)

// max_utga(array)

function index_max(array) {

    for (let i=0; i<array.length; i++){
    if (max_utga(array) == array[i]){
        console.log(i+1)
        return i+1;
    }
        }
}

// let array = [1,2,3,4,5,6,66,66,-1];
// index_max(array);

function esreg_dar(array) {
    let es_arr=[];
for (i=0; i<array.length; i++){
    es_arr.push(array[(array.length-1)-i])
}
console.log(es_arr)
}
// let array = [1,2,3,4,5,6,66,66,-1];
// esreg_dar(array)

function uul(array) {
    let uul_too=[]
for (i=0; i<array.length; i++){
    if (i==0){
        if (array[i]>array[i+1]){
            uul_too.push(array[i]);
        }
    }
        if (i==(array.length-1)){
        if (array[i]>array[i-1]){
            uul_too.push(array[i]);
        }
    }
    if (array[i]>array[i+1] && array[i]>array[i-1]) {
uul_too.push(array[i]);
    }
}
console.log(uul_too)
}


// let array = [3,2,1,4,3,6,68,66,67];
// uul(array)

function hos(array) {
    let hos=[]
    for (i=0; i<array.length; i++){
            for (a=i; a<array.length; a++){
            if (array[i] == array[a] && i!=a){
                hos.push(array[i])
                array.splice(i,1);
                array.splice(a,1);
            }
    }
}
    console.log(hos)
}

// let array = [3,2,1,4,3,6,6,66,66,66,6,66,6];
// hos(array)

function niilber_hos(array,num) {
    let niil =[];
 for (i=0; i<array.length; i++){
            for (a=i; a<array.length; a++){
            if (array[i]+array[a] == num && i!=a){
                niil.push(array[i])
                niil.push(array[a])
            }
    }
}
console.log(niil)
}

//  let array = [3,2,1,2,4,3,0];
//  niilber_hos(array,4)


function ogtol(array1,array2) {
    let ogt =[];
    let index1 =[];
    let index2 =[];
 for (i=0; i<array1.length; i++){
            for (a=i; a<array2.length; a++){
            if (array1[i]==array2[a]){
                ogt.push(array1[i])
                index1.push(i)
                      }
    }
}
console.log(ogt)
console.log(`array1 index ${index1}`)
}

//  let array1 = [3,2,1,2,4,3,0,7];
//  let array2 = [0,0,1,0,0,3,5,7];
//  ogtol(array1,array2)

function racist(array1) {
    let nemeh =[];
    let hasah =[];
    let niit=[];
 for (i=0; i<array1.length; i++){
            
            if (array1[i]<0){
                hasah.push(array1[i])
                      }
                      else if (array1[i]>=0){
                nemeh.push(array1[i])
                      }
}
console.log(niit = hasah.concat(nemeh))
}

//  let array1 = [-3,2,-1,-2,4,-3,0,-7];
//  racist(array1)

function neg_dutuu(arr) {
    for (i=0; i<arr.length; i++){
        if (arr[i]+1 != arr[i+1] && arr.length>i+1){
console.log(arr[i]+1)
        }
    }
}

// let arr=[1,2,3,4,5,6,8,9,10,12]
// neg_dutuu(arr)