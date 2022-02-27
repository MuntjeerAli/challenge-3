//const scoreDolphins = (96 + 108 + 89) / 3;
//const scoreKoalas = (88 + 91 + 110) / 3;

//console.log(scoreDolphins);
//console.log(scoreKoalas);

//if(scoreDolphins > scoreKoalas){
//    console.log('Dolphins wins the Trophy')
//}else if(scoreKoalas > scoreDolphins){
//    console.log('Koalas wins the Trophy')
//}else if(scoreDolphins === scoreKoalas){
//    console.log('Match has been tied!')
//}

//Data Bonus 2
const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 123) / 3;

console.log(scoreDolphins);
console.log(scoreKoalas);

if(scoreDolphins > scoreKoalas && scoreDolphins >= 100){
    console.log('Dolphins win the Trophy!')
} else if(scoreKoalas > scoreDolphins && scoreKoalas >= 100){
    console.log('Koalas wins the Trophy!')
} else if(scoreDolphins === scoreKoalas && scoreDolphins >= 100){
    console.log('Both win the Trophy!')
} else{
    console.log('No team wins the Trophy.')
}