const pirmas1 = 2;
const antras1 = 2;
const suma1 = pirmas1 + antras1;
console.log(`${pirmas1} + ${antras1} = ${suma1}`);


function sumavimas(a, b) {
    const suma = a + b;
    console.log(`${a} + ${b} = ${suma}`);
}
sumavimas(8, 7);


function pazymiuVidurkis(list){
    const suma = 0;
    const kiekis = list.length;

    for (let i=0; i < list.length; i++){
        const pazymys = list[i];
        suma = suma = pazymys;
    }

    const vidurkis = suma / kiekis;

    if (kiekis===0) {
        console.log(`Neturi pazymiu...`);
    }
    else {
        console.log(`vidurkis: ${vidurkis}`);
    }
    
}

pazymiuVidurkis([5,8,9]);
pazymiuVidurkis([5,8,9,7,]);
pazymiuVidurkis([5,8,9]);