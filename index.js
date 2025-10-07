

function judge(a, b, c) {
 if (a == b) {
    // console.log(b), console.log("b = a")
    return b
} else if (b == c) {
    // console.log(b)
    // console.log("b = c")
    return b
} else if (c == a) {
    // console.log(c)
    // console.log("c = a")
    return c
}
else if (a>b){
    if (a>c){
        // console.log(a)
        return a
    }
    else {
        // console.log(c)
        return c
    }
}
else if (b>c){
    // console.log(b)
    return b
} else {
    // console.log(c)
    return c
}
}

// console.log(judge(5.5, 5, 6));

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
    if (baidal == "rainy") {
        console.log("Shuheree martavaa bro")
    }
    else if (baidal =="sunny") {
        if (temp >= 30) {
            console.log("Shatlaa")
        }

        else if (temp >= 20) {
            console.log("Saihan bainaa")
        }

       else if (temp< 20) {
        console.log("huiten bn ahdaa neg hiichih")
       }
    }
}

// zovloh(100, "sunny")

function nasnii_namar(nas,gender) {
    let dutuu_nas;
    if (gender== "er"){
    if (nas>=18) {
        console.log("mashin bariul baridoo odoo");
    }
    else {
       dutuu_nas= 18-nas;
       console.log("mashin ", dutuu_nas, " jiliin daraa bariul baridaa odoo")
    }
}
else if (gender == "em"){
    console.log("Za demiidee bro")
}
}

// nasnii_namar(15, "er");

function gurvaljin(a,b,c) {

    if (a == b) {
        if (b==c) {
            console.log("Zuvuu zuv")
        }
        else {
             console.log("Buruu!!!")
        }
    }
    else {
        console.log("Buruu!!!!")
    }
}

// gurvaljin (4,4,3)

function let_me_check(useg) {
    if (useg == "e") {
        console.log("vowel")
    }
    else if (useg == "u"){
         console.log("vowel")
    }
       else if (useg == "i"){
         console.log("vowel")
    }
       else if (useg == "o"){
         console.log("vowel")
    }
       else if (useg == "a"){
         console.log("vowel")
    }
      else if (useg == "y"){
         console.log("semi-vowel")
    }
      else if (useg == "w"){
         console.log("semi-vowel")
    }
    else {
        console.log("consonant")
    }
}

// let_me_check("y")

function gurvaljin_tal(a,b,c) {
   if(judge(a,b,c)== a) {
    if (a<(b+c)) {
        console.log("boljin")
    }
    else {
        console.log("bolohgui bnda")
    }
   } 
    else if(judge(a,b,c)== b) {
    if (b<(a+c)) {
        console.log("boljin")
    }
    else {
        console.log("bolohgui bnda")
    }
   } 
    else if(judge(a,b,c)== c) {
    if (c<(b+a)) {
        console.log("boljin")
    }
    else {
        console.log("bolohgui bnda")
    }
   } 
}

gurvaljin_tal(4,4,4)