/*
Array
*/

const mark =[1,2,3,4,5,6,7,8];
const firstMark = mark[0];
const second= mark[1];
const element4 = mark[3];
const size=mark.length;
const paskutinisElement=mark[size-1];
console.log("masyvas", mark);
console.log("pirmas elemenats", firstMark);
console.log("sekantis elemenats", second);
console.log("ketvirtas elementas", element4);
console.log("paskutinis elementas", paskutinisElement);
console.log('------------------');

const dictionary =['labas', 'rytas', 'tau', 'sakau', '🚀'];
const paskutinisZodis= dictionary[dictionary.length-1];
console.log(paskutinisZodis);

console.log('------------------');

/* metodai
- .push()       - pridėti į galą naują reikšmę
- .unshift()    - pridėti į priekį naują reikšmę
- .pop()        - išimti iš galo (paskutinį)
- .shift()      - išimti iš priekio (pirmąjį)
*/

const abc=['b', 'c'];
console.log(abc);

abc.push ('d');
console.log(abc);

abc.unshift ('a');
console.log(abc);

abc.pop ();
console.log(abc);

abc.shift ();
console.log(abc);

console.log("-------------")

console.log(abc.reverse()); /*sukeičia elementus vietomis, t. y. paskutinį į pirmąjį ir t. t. eilės tvarka*/
console.log(abc);
const a1=['a', 'b'];
const a2=['c', 'd'];
const a12=a1.concat(a2); /*sudeda du masyvus*/
console.log(a1);
console.log(a2);
console.log(a12);

console.log("-------------")

const modern1 =[...a1, ...a2,...a12];/*sudeda masyvus*/
console.log(modern1);

const modern2 =[...a2,...a1]; /*sukeičia elementus vietomis*/
console.log(modern2);