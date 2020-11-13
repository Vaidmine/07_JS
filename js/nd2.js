console.log(123456789);
console.log('-------------------');

let i = [1,5,10,15,20];
console.log(i);
console.log('tekstas');

//"function(e)" is the event handling function (on event, object is created). "e" is the object handler (object is made accessible).

for(e in i) {console.log(e)};
console.log('A*******************');

for(e in i) {console.log(i[e])};
console.log('-------------------');

for(e in i) {console.log(i[e] * 5)};
console.log('*******************');
for(e in i) {
    const suma = i[e] * 5; 
    console.log(i[e] * 5);
    console.log(suma);
}

function myFunction() {

    let input =  document.getElementById("input").value;
    console.log(input)

    let input2 =  document.getElementById("input2").value;
    document.getElementById("langelis").innerHTML = input + ' ' + input2 ;
    document.body.style.backgroundColor = "aqua";
    console.log(input2)
  }

  
