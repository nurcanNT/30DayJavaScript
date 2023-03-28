/** LEVEL 1 **/

let firstName = "Adem";
let surName = "Önemli";
let age = 34;
let isMarried = true;

console.log(typeof firstName); //string
console.log(typeof age); // number
console.log(typeof isMarried); //boolean

let num1 = 10;
let num2 = '10';
let result = num1 == num2;
let result2 = num1 === num2;

console.log(parseInt('9.8') == 10); //false
console.log(1 == true,  67 > 7,"7" == 7 ) //true true true

let i = 4>3 && 10<12; //true
let ii = 4>3 && 10>12; //false
let iii = 4>3 || 10<12; //true
let iv = 4>3 || 10>12; //true
let v = !(4>3); //false
let vi = !(4<3); //true
let vii = !(false); //true
let viii = !(4>3 && 10<12); //false
let ix = !(4>3 && 10>12); //true
let x = !('4'=== 4); //true



/** LEVEL 2 **/

let base = prompt("Lütfen taban sayısını girin:", 20);
let height = prompt("Lütfen uzunluğunu giriniz:", 10);
let area = prompt("Sonuç:",  0.5 * base * height);


let a = prompt("Lütfen üçgenin bir açısını giriniz:", 2);
let b = prompt("Lütfen üçgenin diğer açısını giriniz:", 3);
let c = prompt("Lütfen üçgenin bir diğer açısını giriniz:", 4);
let perimeter = prompt("Sonuç :" ,a + b + c);


const pi = 3.14;
let r = prompt(" Enter radius");
console.log(`Area of a circle ${pi*r*r}`);
console.log(`Circumference of a circle ${2*pi*r}`);

let name1 = "Nurcan";
let age2 = 27 ;
let nameHeight = name1.length;

let result5 = nameHeight == age2 ? "Yaşınızın uzunluğu adınızın uzunluğuna eşittir." : "Adınızın uzunluğu yaşınıza eşit değildir.";

console.log(result5);

let myAge = 27;
let yourAge = 55;
let result7 = myAge > yourAge ? "Ben senden büyüğüm." : "Sen benden büyüksün.";

console.log(result7);

let humanAge = prompt("Hangi yılda doğdunuz? ", );
let humanCont = 2023 - humanAge;
let result10 = humanAge < 2005 ? "Ehliyet alabilrsiniz." : "Ehliyet için yaşınız yeterli değil.";

console.log(result10);

/** LEVEL 3 **/

/* - What is the year today?
-What is the month today as a number?
-What is the date today?
-What is the day today as a number?
-What is the hours now?
-What is the minutes now?
-Find out the numbers of seconds elapsed from January 1, 1970 to now.*/

const date = new Date();

let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDate();
let hour = date.getHours();
let minutes = date.getMinutes();
let second = date.getSeconds();
let dayName = date.getDay();

let months = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık"
];

let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

let humanDate = `${day} ${months[month]} ${year}, ${days[dayName]} Saat: ${hour}:${minutes}:${second}`;
console.log(humanDate);