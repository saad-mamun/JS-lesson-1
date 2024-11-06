// default paramiter
function say(message="Hello Liotn, thanks for calling me"){
    console.log(message);
}
say()


// rest paramiter 
// n tomo pod er moto kaj kore.
// function myli(...n) ai ta othoba nicher ta 
function myli(a,b,c,d,...n){
    console.log(a,b,c,d,n);
}
 myli(1,2,3,4,5,6,7,8,9)