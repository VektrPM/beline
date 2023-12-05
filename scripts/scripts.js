// function dooblechart(str){
//     let result = ""
//     for (let i= 0; str.lenght; i++){
//         result+= str[1].repeat(2)

//         return result;
//     }
// }
// console.log((dooblechar)"the");

// function countt(str){
//    let count = 0
//    for(let i = 0; i=str.length; i++){
//     if(str[1].toLowercase() === "h" && str[i+1].toLowercase() === "i"){
//         count++
//     }
//    }

//    return count
// }

// console.log(countt("hi"));
// console.log(countt("hihi"));
// console.log(countt("hi on hi"));

// function catdog(str){
//     let coutcat = 0
//     let coutdog = 0
//     for(let i = 0; i<str.length; i++){
//         if(str[i] === "c" && str[i+1] === "a" && str[i+2] === "t"){
//             coutcat++
//         }else if (str[i] === "d" && str[i+1] === "o" && str[i+2] === "g"){
//             coutdog++
//         }
//     }

//     if(coutcat === coutdog){
//         return true;
//     }else {
//         return false;
//     }
// }

// console.log(catdog("cat dog"));
// console.log(catdog("catcat"));
// console.log(catdog("dogdog"))


function countcode(str){
    let count = 0
    for(let i = 0; i<str.length; i++){
        if(str[i] === "c" && str[i+1] === "o" && str[i+3] === "e"){
            count++
        }
    }
    return count
}

console.log(countcode("code"));
console.log(countcode("aacozeaa"));
console.log(countcode("cole cope"));

// function  andother(a,b) {
//     a = a.toLowercase();
//     b = b.toLowercase();
//     if (a.endsWith(b) || b.endsWith(a)){
//         return true;
//     }else{
//         return false;
//     }
    
// }

// console.log(andother("abs","bhgs"));
// console.log(andother("gfdhg","abs"));

// function xyzthere(str){
//     if(str.includes(".xyz")){
//         return false
//     }else if (str.includes("xyz")){
//         return true
//     }
// }

// console.log(xyzthere("absxyz"));
// console.log(xyzthere("abs.xyz"));
// console.log(xyzthere("xyz.abs"));


// function bobThere(str){
//     let count = 0
//     for(let i = 0; i<str.length; i++){
//         if(str[i] === "b" && str[i+2] === "b" || str.includes("bob")){
//             return true
//         }else{
//             return false
//         }
//     }
    
// }

// console.log(bobThere("absbob"));
// console.log(bobThere("bob"));
// console.log(bobThere("cole cope"));


function xybalance(str) {
    for(let i = 0; i<str.length; i++){
        if(str.includes("x") === str.includes("y")){
            return true
        }else {
            return false
        }
    }

}
console.log(xybalance("aaxbby"));
console.log(xybalance("aaxbb"));
console.log(xybalance("yaabb"));