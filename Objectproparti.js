function sayhi(username,info){
    return{
        username,
        info
    }
}
console.log(sayhi("liton","Al-mamun"));


//other rules 2
 let username = "liton",
     myinfo= "i'm from MokromPUR"

const MyInfo = {
username,
myinfo
}
console.log(MyInfo);

// step 3

let name = "Liton";
let info = {
    [name]:"hi this is mamun"
}
console.log(info);


//step 4

// this is consice method

let server = {
    name: "server side",
    restart(){
        console.log("this is consice method");
    }
}
console.log(server.restart());
