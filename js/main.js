//spausdinmame sveikaji skaiciu
console.log(88888888);

//du skaiciai vs desimtaine
console.log(3.14)
console.log(3, 14)

//kaip atvaizduojamas txt
console.log("labas rytas")
console.log('labas rytas')

//kintamieji
******************************
//inicijavimo budai:
    //const - tai musu pirmasis pasirinkimas
    //let - galima jei yra reikalas keisti reiksme
    //var - nenaudotinas

//kintamuju tipai:
    //skaiciai (number)
    //tekstai (string) - 'ka tu?'
    //logines (boolean) - true, false
    //sarasai (array) - []
    //objektai (object) {}

const pirmasSkaicius = 7;
const antrasSkaicius = 3;
const suma = pirmasSkaicius + antrasSkaicius;

console.log(suma)



const vardas = "vardenis";
const amzius = 99;
console.log(vardas)
console.log(amzius);

//Vardenis yra 99 metu amziaus
//-------- yra -------- metu amziaus

const sakinys = vardas + ' yra ' + amzius + " metu amziaus.";
console.log(sakinys);

const suo = "Rikis";
const maistas = "kaulas";

//Rikis megstamas maistas yra kaulas.

const sakinys2= suo + ' megstamas maistas yra ' + maistas + '.';
console.log(sakinys2);

const heroName =  'Chuck';
const heroLastname = 'Norris';
const birth = 1940;
const currentYear = 2020;
const age = currentYear - birth;

// Chuck Norris (80)
const sakinys3 = heroName + ' ' + heroLastname + ' ' + '(' + (age) + ')';
console.log(sakinys3);

console.clear();

let pinigine = 7;
const sausis = 100;
const vasaris = 200;
const kovas = 70;

const sausioPajamaos = pinigine + sausis;
console.log(sausioPajamaos);

const vasarioPajamos = sausioPajamaos + vasaris;
console.log(vasarioPajamos);

////

pinigine = pinigine + sausis;
console.log(pinigine);

pinigine = pinigine + vasaris;
console.log(pinigine);

pinigine = pinigine + kovas;
console.log(pinigine);

