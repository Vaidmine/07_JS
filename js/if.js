/* Palyginimo salyga (if):
galimi operatoriai: >, <, >=, <=, ==, !=, ===, !==
naudotini: >, <, >=, <=,===, !==
nenaudotini: ==, !=
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