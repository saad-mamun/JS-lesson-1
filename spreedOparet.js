//constracting array literals

let valueone = [1,2,3,4,5];
let valuetwo = [...valueone,6,7,8,9,10];
console.log(valuetwo);

//Concatenting array
//multiple value add
let friends =["Nasim","Mahim","Asik"];
let family =['jorina',"ab-khalaque"];
let myintro = [...family,...friends]; //spreed oparetor
console.log(myintro);


//Coping in array
let country = ["country","india","australia"];
let worldCup = [...country];
console.log(worldCup);