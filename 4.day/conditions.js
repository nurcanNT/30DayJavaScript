/* LEVEL 1 */

let message = prompt("Yaşınız nedir?", 0);
let account = 18 - message;

let result = message >= 18 ? "Ehliyet alabilirsiniz." : `Ehliet için ${account} yıl beklemelisiniz.`;

console.log(result);


let message1 = prompt("Yaşınız :");
let myAge = 27;
let account1 = message1 > myAge ? `Benden ${message1 - 27} yıl yaşlısınız` : `Benden ${27 - message1} yıl gençsin`;

console.log(account1);

let a = 4;
let b = 3;

let result2 = a < b ? "A, B'den küçüktür." : "A, B'den büyüktür.";
console.log(result2);


// if(a < b ){
//     console.log("A, B'den küçüktür.");
// }else if (a == b){
//     console.log("A eşittir B'ye");
// }else{
//     console.log("A, B'den büyüktür.");
//     return ;
// }


let messageNumber = prompt("Bir sayı giriniz : ");

let result11 = messageNumber % 2 == 0 ? `${messageNumber} çifttir` : `${messageNumber} tektir.`;

console.log(result11);

/* LEVEL 2 */

let note = prompt("Notunuzu giriniz : ");
if(note >= 80 && note <= 100){
    console.log("A");
}else if(note >= 70 && note <= 79){
    console.log("B");
}else if(note >= 60 && note <= 69){
    console.log("C");
}else if(note >= 50 && note <= 59){
    console.log("D")
}else if(note >= 0 && note <= 49){
    console.log("F");
}else{
    console.log("Geçerli bir sayı giriniz");
}


let month = prompt("Enter a month:").toUpperCase()

if ((month == "SEPTEMBER")||(month == "OCTOBER")|| (month == "NOVEMBER")){
    console.log("Autumn")
}else if((month == "DECEMBER")||(month == "JANUARY")|| (month == "FEBRUARY")){
    console.log("Winter")
}else if((month == "MARCH")||(month == "APRIL")|| (month == "MAY")){
    console.log("Spring")
}else if((month == "JUNE")||(month == "JULY")|| (month == "AUGUST")){
    console.log("Summer")
}


let day = prompt("What is the day today?").toLowerCase()
if ((day == "monday")|| (day == "tuesday")|| (day == "wednesday")|| (day == "thursday")|| (day == "friday")){
    console.log("Working day.")
}else if((day == "saturday")|| (day == "sunday")){
    console.log("Weekend day.")
}


/* LEVEL 3 */

let months = prompt("Enter a month: ").toLowerCase()

if((months == "april")|| (months == "june")|| (months == "september") || (months == "november")){
    console.log(`${months} has 30 days.`)
}else if((months == "january")|| (months =="march")|| (months == "may")|| (months == "july") || (months == "august") || (months == "october") || (months == "december")){
    console.log(`${months} has 31 days.`)
}else if(months == "february"){
            console.log(`${months} has 28 days.`)
}