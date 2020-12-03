console.log("labuka");
    const               skaicius                =    7;
// kintamojo tipas      kintamojo pavadinimas   = kintamajam suteikta reiksme;
//kintamojo tipas nurodomas tik karta, kuriant kintamaji. veliau jo nerasome.
// kintamuju tipai yra trys. var, let const.
// var - naudosit kai daugiau mokesit, jei reikes
// let - kintamasis, kurio reiksme galima modifikuoti
// const - konstanta. kintamajam reiksme priskiriama viena karta.


let tekstas = 'Labas rytas, skaicius ' + skaicius + ' yra nelyginis...';
let tekstas2 ='Labas rytas, skaicius 7 yra nelyginis';

let num = 10;
const num2 = 5;
num = num - num2; 
console.log(num);
num -= num2;
console.log(num);
num +=num2;
console.log(num);
num++;
console.log(num);
console.log("tekstas "+7+2+8);
console.log(7+2+8 + "tekstas ");
console.log("tekstas "+(7+2+8));

console.log();
console.log(tekstas);




const sk = 7;
if(true){
    console.log("visada tiesa");
}
if(sk===7){// skliausteliuose esanti patikra yra patenkinta, 7=7, teiginys yra teisingas, true
    console.log("skaicius yra 7");
}
if(sk===8){//jeigu sk lygus 8, spausdins teksta, jei NElygus, nedarys nieko.
    console.log("skaicius yra 8");
}

if(sk===8){//jeigu sk lygus 8, spausdins teksta
    console.log("skaicius yra 8");
}else{ //kitu atveju, spausdins else esanti teksta
console.log("sk nelygus 8");
}



//for(susikuriam kintamaji  ;  cia salyga. kol ji patenkinama, vykdomas kodas {}, tiek kartu kiek patenkinama salyga  ;  kintamaji padididnam vienetu){}

for (let i = 0; i < 7; i++) {
   console.log(i);
    
}
// 1ma iteracija for ( 0; 0 < 7(true); 0++(padideja vienetu)){
    //i reiksme = 0;  }
// 2ma iteracija for ( 1; 1 < 7; 1++){
    //i reiksme = 1;  }
    // 1ma iteracija for ( 2; 2 < 7; 2++){
    //i reiksme = 2;  }

console.log("----------------------------------");
    const str = "The greatest victory is that which requires no battle";
    //             0   1          2    3   4    5      6      7    8
    const wordArr = str.split(" ");
  for (let i = 0; i < wordArr.length; i++) {
   //  console.log(wordArr[i]);
      
  }
        // i = 8,   kol 8 > 0           8--(7)  / pirma iteracija
  for (let i = wordArr.length; i >= 0 ; i--) {
    console.log(wordArr[i]);
 }

 console.log("----------------------------------");
//  Write a function that returns a string in which firstname is swapped with last name.
// nameShuffler('john McClane'); => "McClane john"
// function nameShuffler(str){
//     str = str + " ";
//     return str.split("").reverse().join("")
//   }

//   Test Results:
// Expected: 'McClane john', instead got: ' enalCcM nhoj'

// function nameShuffler(str){
//     str = str + " ";
//     return str.split("str").reverse().join("")
//   }

function nameShuffler(str){
    let wordArr = str.split(" ");
    let wordArrRev = [];
    for(let i = wordArr.length-1; i >= 0 ; i--){
      wordArrRev.push( wordArr[ i ] );
    }
    let revStr = "";
     for(let i = 0 ; i <  wordArrRev.length; i++){
     revStr += wordArrRev[i];
       if(i < wordArrRev.length-1){
         revStr+=" ";
       }
    }
    return revStr;
  }

 console.log("----------------------------------");
 //KINTAMUJU PALYGINIMAS// 
 //Lyginant, jei rezultatas tenkina palyginimo sąlygą, tai į console išvesti žodį “Pomidoras”, o jei sąlyga nėra tenkinama, išvesti sakinį “Bandykite kitą kartą.”.
//Tarpusavyje palyginti skaičiaus tipok intamuosius:
//kuris didesnis
//kuris mažesnis
//ar jie lygūs
//ar jie nelygūs
//kuris didesnis arba lygus
//kuris mažesnis arba lygus

console.log("Turime skaicius"+ ' ' + num + ' ' + 'ir' + ' ' + sk);

if(num>sk){//jeigu num (6) > sk (7), spausdins "Pomidoras"
    console.log("Pomidoras");
}else{ // kitu atveju, spausdins else teksta
console.log("Bandykite kitą kartą");
}

if(num>=sk){
    console.log("Pomidoras");
}else{  
console.log("Bandykite kitą kartą");
}

if(num<sk){ 
    console.log("Pomidoras");
}else{  
console.log("Bandykite kitą kartą");
}

if(num<=sk){ 
    console.log("Pomidoras");
}else{ 
console.log("Bandykite kitą kartą");
}

if(num===sk){
    console.log("Pomidoras");
}else{ 
console.log("Bandykite kitą kartą");
}

if(num!==sk){
    console.log("Pomidoras");
}else{ 
console.log("Bandykite kitą kartą");
}
console.log("----------------------------------");
//Išvesti teksto tipo kintamųjų ilgius
console.log(tekstas);
console.log(tekstas.length);
console.log("Pasirdo, kad mano pirmo teksto ilgis yra 40 simboliu");
console.log(tekstas2);
console.log(tekstas2.length);
console.log("Pasirdo, kad mano antro teksto ilgis yra 37 simboliai");
console.log("----------------------------------");
//palyginti

if (tekstas>tekstas2) { //40>37
    console.log("Pomidoras"); // true
} else{
    console.log("Bandykite kitą kartą");
}

if (tekstas>=tekstas2) {  
    console.log("Pomidoras"); // true
} else{
    console.log("Bandykite kitą kartą");
}

if (tekstas<tekstas2) {  
    console.log("Pomidoras");
} else{
    console.log("Bandykite kitą kartą");
}

if (tekstas<=tekstas2) {  
    console.log("Pomidoras");
} else{
    console.log("Bandykite kitą kartą");
}

if (tekstas!=tekstas2) {  
    console.log("Pomidoras"); // true
} else{
    console.log("Bandykite kitą kartą");
}

if (tekstas===tekstas2) {  
    console.log("Pomidoras"); 
} else{
    console.log("Bandykite kitą kartą");
}

console.log("----------------------------------");
//išvesti sąrašo tipo kintamųjų ilgius, tarpusavyje palyginti sąrašo tipo kintamųjų ilgius

const sarasas = ['1', '2' , '3'];
const sarasas2 = ['Pomidoras', 'Vysnia' , 'Arbuzas' , "Melionas"];

console.log(sarasas);
console.log(sarasas.length);
console.log(sarasas2);
console.log(sarasas2.length);
console.log('Mano sarasu ilgis: 3 ir 4');
if (sarasas<sarasas2){ //3 < 4 
    console.log("Pomidoras")
}else{
    console.log("Bandykite dar karta");
    }

if (sarasas<=sarasas2){ //3 < 4 
    console.log("Pomidoras")
}else{
    console.log("Bandykite dar karta");
    }    

if (sarasas>sarasas2){ //3 < 4 
    console.log("Pomidoras")
}else{
    console.log("Bandykite dar karta");
    }

if (sarasas>=sarasas2) {
    console.log("Pomidoras");
}
else{
    console.log("Bandykite dar karta");
}

if (sarasas!=sarasas2) {
    console.log("Pomidoras");
}
else{
    console.log("Bandykite dar karta");
}

if (sarasas===sarasas2) {
    console.log("Pomidoras");
}
else{
    console.log("Bandykite dar karta");
}

for (let i = 0; i <= 10; i++) {
if (i===5) {
    console.log('Radau penketa');
}
console.log(i);
}

const masyvas = ['nulinis','pirmas','antras','trecias','ketvirtas'];
//                  0           1       2       3   

for (let i = 0; i < masyvas.length; i++) {
    if (masyvas[i]==='antras') {
        console.log("masyve yra elementas antras");
    }
console.log(masyvas[i]);   
}
console.log("--------------");
console.log(masyvas[3]);

//  sk = 7;
// sk%2 === 1 // skaicius neporinis
// sk%2 === 0 // skaicius porinis

// 7s

skMasyvas = [1,5,7,9,684,6,6981,19,16,6161,98];
console.log(skMasyvas);
for (let i = 0; i < skMasyvas.length; i++) {
    if (skMasyvas[i]%3===0) {
    console.log(skMasyvas[i]);
    }
    
}

console.log(skMasyvas[3]);
console.log(skMasyvas[4]);
console.log(skMasyvas[5]);
console.log(skMasyvas[6]);
console.log("----------------------------------");

