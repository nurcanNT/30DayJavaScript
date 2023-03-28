/**  LEVEL 1 **/
challenge = "30 Days of JavaScript";

console.log(challenge.length); //21
console.log(challenge.toUpperCase()); //"30 DAYS OF JAVASCRIPT"
console.log(challenge.toLowerCase()); //"30 days of javascript"
console.log(challenge.substr(11)); // "JavaScript"
console.log(challenge.substring(0, 7)); // "30 Days"
console.log(challenge.includes("Script")); //true
console.log(challenge.includes("script")); //false

var challenge = "1995";
console.log(challenge.split('')); // ["1","9","9","5"]

var challenge = "30 Days of JavaScript"; 
console.log(challenge.split('')); //["3","0"," ","D","a","y","s"," ","o","f"," ","J","a","v","a","S","c","r","i","p","t"]

var challenge = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(challenge.split(',')); //["Facebook"," Google"," Microsoft"," Apple"," IBM"," Oracle"," Amazon"]

var challenge = "30 Days of JavaScript"; 
console.log(challenge.replace('JavaScript','Python')); //"30 Days of Python"

console.log(challenge.charAt(15)); // "S"
console.log(challenge.charCodeAt("a")); //51
console.log(challenge.indexOf("of")); //8
console.log(challenge.lastIndexOf("f")); //9

var challenge = " 30 Days of JavaScript "; 
console.log(challenge.trim()); //"30 Days of JavaScript"

var challenge = " 30 Days of JavaScript";

console.log(challenge.repeat(2)); //" 30 Days of JavaScript 30 Days of JavaScript"


/**  LEVEL 2 **/

console.log("There is no exercises better for the heart then reaching down and lifting people up.")

console.log("Love is not patronizing and charity isn't about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand insteade")


var number = 5;
var num = "5";

console.log(typeof number == typeof num); // false

var num = 9.8;
console.log(Math.ceil(num)); //10

var str = "Python";
var str1 = "Jargon";

console.log(str.includes("on")); //true
console.log(str1.includes("on")); //true

console.log(Math.floor(Math.random() * 101)); //15
console.log(Math.floor(Math.random() * 101)); //66

console.log(Math.floor(Math.random() * 51) + 50); //70

var js = 'JavaScript'.length; //10
console.log(Math.floor(Math.random() * js + 1)); //7

var way = 'You cannot end a sentence with because because because is a conjunction';
console.log(way.substr(0, 31) + way.substr(55)); //"You cannot end a sentence with is a conjunction"

/**  LEVEL 3 **/

var lov  = "'Love is the best thing in this world. Some found their love and some are still looking for their love.'";
var reg = /love+/gi;
console.log(lov.match(reg).length); //3

var bot =
	'%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';

var result = bot.replace(/[`~!@#$%^&*()_|+\-=?;:'"<>\{\}\[\]\\\/]/gi, '');
console.log(result); // "I am a teacher, and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher This 30DaysOfJavaScript is also the result of love of teaching"

var price = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

var pro = price.match(/\d+/g)
var proto = Number(pro[0]) + Number(pro[1]) +Number( pro[2])
console.log(proto);  //30000

