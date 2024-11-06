let scroes = [50,70,80,90];
for(let store of scroes){
    console.log(store);
}


const rating = [
    {username:"eshan", info:"founder of hublu progrmmaer"},
    {username:"tutul", info:"co-founder of hublu programmer"},
    {username:"liton", info:"Student of hublu programmer"}
]

//let sum = 0 //numbering er jonno lage

for(let username of rating){
    console.log(username);
}

// itarate
let ita = "liton al-mamun";
for(let single of ita){
    console.log(single);
}



const movieRating = new Map([
    ["Inception",8.8],
    ["Max",5.9],
    ["Navab",7.9]
])

for (const [movie, rating] of movieRating){
    console.log( `${movie}: ${rating}`)
}