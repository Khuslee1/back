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
        for (a=0; a<array.length; a++){
            if (array[i] == array[a] && i!=a){
                hos.push(array[i])
            }
        }
    }
    console.log(hos)
}

let array = [3,2,1,4,3,6,6,66,66];
hos(array)