console.log(123456789);
console.log('-------------------');

let i = [5,3,2,6,8,7,];
console.log(i);
console.log('tekstas');

for(e in i) {console.log(e)};
for(e in i) {console.log(i[e])};
for(e in i) {console.log(i[e] * 5)};

for(e in i) {
    suma += i[e] * 5; 
    console.log(i[e] * 5);
    console.log(suma);
}