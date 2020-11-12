//primityvus kintamieji = pavieniai skaiciai ar reiksmes
//kompleksinis kintamasis = sarasas
const age = 99;
console.log(age)

const year = 2020
console.log(year)

const name1 = 'Johny';
console.log(name1);

const city = 'Abu dabi'
console.log(city);

const marks = [10, 7, 4, 8, 6];
console.log(marks);
    
const lottery = [13, 7 , 24 ,2];
console.log(lottery);

const cities = ['NY', 'Sydney', 'Lisabona', 'LA'];
console.log(cities);

const names = ['Chuck', 'Bruce', 'Algimantas', 'Xena'];
console.log(names);

//VEIKSMAI
//*******************/

const sum = age + year + luckynumber;
console.log(sum);

const aaa = name1 + ' ' + city + ' ' + airplain;
//const aaa = `${name1} ${city} ${airplaine}`;
console.log(aaa);

//marks, lottery
//logika 1-2+3-4+5
//10-7+4-8+6 (pattern) = 5 
//const marksMath = marks [0] + marks[2] - marks[3] + marks[4];

let marksMath = 0;
marksMath = marksMath + marks[0];
marksMath = marksMath - marks[1];

console.log(marksMath);


//4 sujungti sarasu vertes (cities ir names)
let allCities = '';

//allCities = allCities + cities[0] + ', ';
//allCities = allCities + cities[1] + ', ';
//allCities = allCities + cities[2] + ', ';

allCities = allCities + cities[0];
allCities = allCities + ', ' + cities[1];
allCities = allCities + ', ' + cities[2];
allCities = allCities + ', ' + cities[3];

console.log(allCities);


