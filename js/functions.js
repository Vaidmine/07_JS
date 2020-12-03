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
// priešingu atveju, funkcija tęsia darbą į atskirą kintamąjį įsimena skaičių sudarančių skaitmenų kiekį, gražina skaitmenų kiekį
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


function skaitmenuKiekisSkaiciuje (skaic) {
    if ( typeof skaic !== 'number' ) {
        return "Pateikta netinkamo tipo reiksme." ;
    }
    skaic = skaic + '';
    let kiekis = skaic.length;
    
    return kiekis;
}
console.log("----------------------------------");
console.log(skaitmenuKiekisSkaiciuje(5), ' -> 1');
console.log(skaitmenuKiekisSkaiciuje(781), ' -> 3');
console.log(skaitmenuKiekisSkaiciuje(37060123456), ' -> 11');
console.log(skaitmenuKiekisSkaiciuje(true), );
console.log(skaitmenuKiekisSkaiciuje("asd"), );
console.log(skaitmenuKiekisSkaiciuje('a'), );
console.log(skaitmenuKiekisSkaiciuje(NaN), );

console.log("----------------------------------");
// Funkcija pavadinimu “didziausiasSkaiciusSarase”:
// priima vieną kintamąjį
// jei perduotas kintamasis nėra sąrašo tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
// jei sąrašas yra tuščias, tai išveda pranešimą “Pateiktas sąrašas negali būti tuščias.”
// priešingu atveju, funkcija tęsia darbą
// pereina per visą pateiktą sąrašą ir į atskirą kintamąjį įsimena skaičių, kuris tuo metu yra didžiausias
// gražina didžiausią surastą skaičių
// TESTAI:
// console.log( didziausiasSkaiciusSarase( [ 1 ] ) );
// rezultatas: 1
// console.log( didziausiasSkaiciusSarase( [ 1, 2, 3 ] ) );
// rezultatas: 3
// console.log( didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] ) );
// rezultatas: 78
// console.log( didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ] ) );
// rezultatas: 69
// console.log( didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ) );
// rezultatas: -1
// console.log( didziausiasSkaiciusSarase( “pomidoras” ) );
// rezultatas: “Pateikta netinkamo tipo reikšmė.”
// console.log( didziausiasSkaiciusSarase( [] ) );
// rezultatas: “Pateiktas sąrašas negali būti tuščias.”

console.log("--------------------------");

function didziausiasSkaiciusSarase(sarasas) {
        if (typeof sarasas!== 'object') {
        return "Pateikta netinkamo tipo reikšmė."
}
const size = sarasas.length;
if (size ===0) {
    return "Pateiktas sąrašas negali būti tuščias.";
}
let bugNum = sarasas[0];
for (let i = 0; i < size; i++) {
    const skaicius = sarasas[i];

    if (typeof skaicius !== "number") {
        continue;
    }
    if (bugNum < sarasas[i]) {
        bugNum = sarasas[i];    
    }
}
   return sarasas; 
}

console.log(didziausiasSkaiciusSarase([1]), '>>>', 1);
console.log(didziausiasSkaiciusSarase([1, 2, 3]), '>>>', 3);
console.log(didziausiasSkaiciusSarase([ -5, 78, 14, 0, 18 ]), '>>>', 78);
console.log(didziausiasSkaiciusSarase([69, 69, 69, 69, 66 ]), '>>>', 69);
console.log(didziausiasSkaiciusSarase([-1, -2, -3, -4, -5, -6, -7, -8 ]), '>>>', -1);
console.log(didziausiasSkaiciusSarase('pomidoras'));
console.log(didziausiasSkaiciusSarase([ ]));

console.log("--------------------------");

// priima du kintamuosius:
// pirmasis nurodo tekstą, su kuriuo reikės atlikti užduotį
// antrasis nurodo kas kelintą raidę išrinkti
// 
//patikrinti, ar pirmasis kintamasis yra teksto tipo:
// jei ne, išvedame pranešimą “Pirmasis kintamasis yra netinkamo tipo.”
// priešingu atveju tęsiame darbą

// patikrinti, ar pirmasis kintamasis yra ne tuščias tekstas ir ne didesnis nei 100 simbolių:
// jei ne, išvedame pranešimą “Pirmojo kintamojo reikšmė yra netinkamo dydžio.”
// priešingu atveju tęsiame darbą

// patikrinti, ar antrasis kintamasis yra skaičiaus tipo:
// jei ne, išvedame pranešimą “Antrasis kintamasis yra netinkamo tipo.”
// priešingu atveju tęsiame darbą

// patikriname, ar antrojo kintamojo vertė yra didesnė už nulį:
// jei ne, išvedame pranešimą “Antrasis kintamasis turi būti didesnis už nulį.”
// priešingu atveju tęsiame darbą

// patikriname, ar antrojo kintamojo vertė yra ne didesnė už pirmojo kintamojo ilgį:
// jei ne, išvedame pranešimą “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
// priešingu atveju tęsiame darbą

// išrenkame iš nurodyto teksto kas kelintą raidę (pagal antrojo kintamojo žingsnį)
// išrinktas raides sudėti į atskirą kintamąjį, kuris yra teksto tipo,
// gražina rezultatą

// TESTAI:
// console.log( isrinktiRaides( “abcdefg”, 2 ) );
// rezultatas: “bdf”
// console.log( isrinktiRaides( “abcdefghijkl”, 3 ) );
// rezultatas: “cfil”
// console.log( isrinktiRaides( “abc”, 0 ) );
// rezultatas: “Antrasis kintamasis turi būti didesnis už nulį.”
// console.log( isrinktiRaides( “abc”, 4 ) );
// rezultatas: “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
// console.log( isrinktiRaides( 1561, 2 ) );
// rezultatas: “Pirmasis kintamasis yra netinkamo tipo.”



function isrinktiRaides(text, step) {
    if (typeof text !== 'string') {
        return "Pirmasis kintamasis yra netinkamo tipo.";  
    }
    if (text === '') {
        return "Pirmojo kintamojo reikšmė yra netinkamo dydžio.";    
    }
    if (typeof step !== 'number') {
        return 'Antrasis kintamasis yra netinkamo tipo.';
    }
    if (step <= 0) {
        return 'Antrasis kintamasis turi būti didesnis už nulį.';
    }
}



console.log(isrinktiRaides('abcdefg', 2) '>>>' '???');