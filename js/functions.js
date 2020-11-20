console.log('labas');

function pirma(){ //funkcija kuri kazka daro
    console.log('krabas');
    console.log('krabas');
}

pirma();
pirma();

console.log("----------------------------------");

function sum(sk1, sk2) { // funkcina kuri kazka grazina
    const suma = sk1+sk2;
    return suma;
}

const skaicius1=5;
const skaicius2=10;
sum(skaicius1,skaicius2);

let suma = sum(skaicius1,skaicius2);
console.log(suma);

console.log("----------------------------------");

let txtArr = ['nulinis tekstas', 'pirmas tekstas', 'antras tekstas', 'trecias tekstas', 'ketvirtas tekstas','penktas tekstas'];
let txtArr2 = ['zero text', 'one', 'two', 'three', 'four','five'];
let txtArr3 = ['Null Text', 'erster Text', 'zweiter Text', 'dritter Text', 'vierter Text', 'fünfter Text'];

console.log(txtArr);
console.log(txtArr2);
console.log(txtArr3);

console.log("----------------------------------");

CapsLock(txtArr);
console.log(txtArr);

CapsLock(txtArr2);
console.log(txtArr2);

CapsLock(txtArr3);
console.log(txtArr3);

function CapsLock(arr) {
    for (let i = 0; i < arr.length; i++) {
          arr[i] = arr[i].toUpperCase(); 

    }
}

console.log("----------------------------------");

console.log(suma);

const numArr = [1, 2, 5, 9, 569, 555, 987, 56, 86, 4];
console.log(numArr);

const averdge = avg(numArr);
console.log("saraso (numArr) vidrukis gavosi" + ' ' + averdge);

function avg(arr) {
    let sum =0;
    for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    // sum += arr[i];  analogiska uzrasymas 
    }
    // const avg = sum / arr.length
    // return avg;
    return sum / arr.length;
}

console.log("----------------------------------");
// FUNKCIJA pavadinimu “tusciaFunkcija”:
// nepriima jokių kintamųjų
// neatlieka jokios vidinės logikos
// gražina boolean tipo reikšmę “false”
// TESTAS:
// console.log( tusciaFunkcija() );
// rezultatas: false

function tusciaFunkcija() {
    return false;
}  

console.log(tusciaFunkcija());
console.log(tusciaFunkcija(5));
console.log(tusciaFunkcija('asdsf'));


console.log("----------------------------------");

// Funkcija pavadinimu “daugyba”:
// priima du skaičiaus tipo kintamuosius
// atskirame kintamajame įsimena sandaugos reikšmę
// gražina saudaugos rezultatą
// TESTAI:
// console.log( daugyba( skaicius1, skaicius2 ) );
// console.log( daugyba( skaicius3, skaicius2 ) );
// console.log( daugyba( skaicius1, skaicius3 ) );
// rezultatas: teisingos reikšmės;

// const skaicius1=5;  (buvome pasirase is anksciau)
// const skaicius2=10;

console.log('funkcija kuri turetu dauginti, bet kazkodel nedaugina?... o_O');

function multiply(sk1, sk2) { 
    const rez = sk1 * sk2;
    return rez;
}

console.log(multiply(skaicius1, skaicius2) );
console.log(multiply(2, 3) );





// priima vieną kintamąjį, jei perduotas kintamasis nėra skaičiaus tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
// priešingu atveju, funkcija tęsia darbą į atskirą kintamąjį įsimena skaičių sudarančių skaitmenų kiekį gražina skaitmenų kiekį
// TESTAI:
// console.log( skaitmenuKiekisSkaiciuje( 5 ) );
// rezultatas: 1
// console.log( skaitmenuKiekisSkaiciuje( 781 ) );
// rezultatas: 3
// console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
// rezultatas: 11
// console.log( skaitmenuKiekisSkaiciuje( true ) );
// rezultatas: “Pateikta netinkamo tipo reikšmė.”
// console.log( skaitmenuKiekisSkaiciuje( “asd” ) );
// rezultatas: “Pateikta netinkamo tipo reikšmė.”
// console.log( skaitmenuKiekisSkaiciuje( NaN ) );
// rezultatas: “Pateikta netinkamo tipo reikšmė.”


function skaitmenukiekisskaiciuje (skaic) {
    if typeof skaic !== 'number' ) {
        return "pateika netinkamo tipo reiksme";
       let kiekis = skaic.length;
       console.log(kiekis);

    }
    skaic = skaic + '';
    let kiekis = skaic.length;
    return kiekis;
}
console.log (skaitmenukiekisskaiciuje('labas")) '>>> 1');