

function judge(a, b, c) {
 if (a == b) {
    console.log(b), console.log("b = a")
} else if (b == c) {
    console.log(b)
    console.log("b = c")
} else if (c == a) {
    console.log(c)
    console.log("c = a")
}
else if (a>b){
    if (a>c){
        console.log(a)
    }
    else {
        console.log(c)
    }
}
else if (b>c){
    console.log(b)
} else {
    console.log(c)
}
}

// judge(5.5, 5, 6);

function tav(a) {
    if (a%5 === 0) {
        return true;
    }
    else {
return false
    }
}

// console.log(tav(10.0))

function racist(a) {
    if (1<a) {
        if (a<100) {
        console.log("Include")
        }
           else {
        console.log("exclude")
    }
    }
               else {
        console.log("exclude")
    }
}

//  racist(90)

function olimp(year) {
    if ((year-1896)%4 == 0) {
        console.log("Yes mate!!")
    }
    else {
        console.log("No mate!!")
    }
}

// olimp(1905)

function chi_muu_suragch_uu(dun) {
if (dun>=90) {
    console.log("A")
}
else if (dun>=70){
    console.log("B")
}
else if (dun>=60){
    console.log("C")
}
else if (dun>=50) {
    console.log("D")
}
else if (dun<50) {
    console.log("Ta surguulias huugdluu")
}
}

// chi_muu_suragch_uu(50)

function uliral(sar) {
    if (sar>=11) {
        console.log("Ovol")
    }
    else if (sar>=8){
        console.log("Namar")
    }
    else if (sar>=5) {
        console.log("Zun")
    }
    else if (sar>=2){
        console.log("Havar")
    }
    else if (sar==1){
        console.log("Ovol")
    }
}

// uliral(2)

function mend(tsag) {
    if (tsag>=19) {
        console.log("Oroin mend")
    }
    else if (tsag>=12){
        console.log("Udriin mend")
    }
    else if (tsag>=6) {
        console.log("Ogloonii mend")
    }
    else {
        console.log("unt2")
    }
}

// mend(11)

function zovloh(temp, baidal) {
    
}