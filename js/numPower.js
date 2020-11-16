/* 
Funkcija: duoto skaiciaus kelimas kvadratu
pvz.: 2 > 4 
pvz.: 3 > 9 
*/


function kvadratu(num) {
    const rez = num * num;
    console.log(num, ` > `, rez);
    
    return rez;
}

const dukv = kvadratu(2);
console.log(dukv);

//jei vienkartine operacija

console.log(kvadratu(-5));
console.log(kvadratu(3));

function laipsnis(base, power){
    //return base**power;
    //return ^ power;
    //return Math.pow(base, power);
}

const kubas2 = laipsnis(2,3);
console.log(kubas2,  '>' , 8)