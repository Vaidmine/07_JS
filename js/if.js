/* Palyginimo salyga (if):
galimi operatoriai: >, <, >=, <=, ==, !=, ===, !==
naudotini: >, <, >=, <=,===, !==
nenaudotini: ==, !=
draudziami: 
*/

/* 
Galima struktura:
if() {}
if() {} else {}
if() {} else {} ....  else if {}

*/

const accountBalance = 200;
const transfer = 200;


if(accountBalance < transfer) {
    console.log('Banko zinute: saskaitoje truksta pinigu');
}

if(accountBalance >= transfer) {
    console.log('Banko zinute: pavedimas padarytas');
}

//console.log('Banko zinute: pavedimas padarytas');
//console.log('Banko zinute: saskaitoje truksta pinigu')

if(accountBalance >= transfer){
    console.log('Banko zinute: pavedimas padarytas');

} else {
    console.log('Banko zinute: saskaitoje truksta pinigu')
}

const  akys = 'blue';

if (akys == 'melynos') {
    console.log('grazus');
} else if (akys == 'zalios') {
    console.log('melagiai');
} else if (akys== 'raudonos') {
    console.log('programuotojas');
} else {
    console.log('ar tu zmogus?');
}

const  akys2 = 'red';
if (akys2 == "melynos") {
    console.log('grazus');
} else {
    if (akys2 =="zalios") {
    console.log('melagiai');
    } else {
    console.log('ar turi akis?');
    }
}

// 8 + '8' = 88 ;)

const pirmas = 8;
const antras = '8';

if(pirmas !== antras) {
    console.log(true);
}   else {
    console.log(false);
}

//ASCII table - kiekviena raide turi savo skaiciaus kombinacijos atitinkmeni ascii lentelejeif
const zodis1 = 'labas';
const zodis2 = 'rytas';

if(zodis1 < zodis2) {
    console.log(true);
}   else {
    console.log(false);
}


/*
- kintamieji
- salygos funkcijos
- ciklo funkcijos
- funkcijos
- event liners

*/

