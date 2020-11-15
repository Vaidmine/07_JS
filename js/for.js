const kiek = 5;

for (let i=0; i < kiek; i++ ) {
//     //logika
    console.log('labas rytas', i);
 }
 console.log('pabaiga');

//template sample:

 // for (let index = 0; index < Array.length; index++) {
 //    const element = Array[index];
 // }

let number = 7;
console.log(number);
number++;
console.log(number);
number++;
console.log(number);
number++;
console.log(number);


//********************** */
console.log('-------')

console.log(number);
number--;
console.log(number);
number--;
console.log(number);
number--;
console.log(number);

//********************** */
console.log('-------')

/*
jei kas men zmogus uzdiba 5000, kiek pajamu per metus?
*/ 

const alga = 5000;
const menesiu = 12;
const pajamos = 0;

for (let i = 1; i <= menesiu; i++) {
   
    console.log(`${i}) ${i*alga} pinigu`);

}
/*
parasyti skaicius nuo 8 iki 4 imtinai.
*/ 
console.log('---------');

for (let i=8; i>=4 ;i--) {
    console.log(i);

}

/* isvardinti cferblato skaicius nuo duotos valandos iki galo*/ 

console.log('---------');

const valanda = 10;
const maxValandu = 12;

for(let val = valanda; val<= maxValandu; val++ ) {
    console.log(val + ' val.');
}

console.log('---------');

/* Duotas miestu sarasas, isvardinti kieviena aplnakyta miesta.
Spausdiname:
"Aplankiau: Miesto pavadinimas." */ 

const miestai = ['Vilnius', 'Kaunas', 'Klaipeda', 'Anyksciai'];

// console.log}`Aplankiau: ${miestai}`[0]};

for (let i=0; i < miestai.length; i++){
    const miestoPavadinimas = miestai[i];
    console.log(`Aplankiau: ${miestoPavadinimas}.`);
}

console.log('---------');
/* isvardinti saraso narius is galo */ 


const abc = [ 'a', 'b', 'c', 'd', 'e', 'f' ]

console.log(abc);
for (let pozicija = abc.length - 1; pozicija >=0; pozicija--) {
    console.log(abc[pozicija]);
}

console.log('---------');

/* console isvalymas */ 
/*console.clear();*/

const text = 'dodekahedronas';

console.log(text [0]);
console.log(text.length);

console.log('---------');

console.log(text);

for (let i=0; i < text.length; i++){
    console.log(text [i]);
}

console.log('---------');
//console.clear();
 /* dotas zodis, is jo isrintii kas antra raide ir isspausdinti
 pvz abcdef -->> bdf 
 pvz pomidoras (2) -->> oioa 
 pvz pomidoras (3) -->> mos
 pvz pomidoras (4) -->> ia  
 pvz pomidoras (5) -->> d
 */ 

 const zodis = 'pomidoras';
 const step = 3;
 const pirmosRaidesPozicija = step - 1
 let rez = ' ';

 for (let i = step - 1; i < zodis.length; i = i + step) {
    const raide = zodis [i];
     console.log(raide);
     rez  = rez + raide;
   
 }



