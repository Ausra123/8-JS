/*Numbers
teigiami, nulis, neigiami - matematikoje
teigiami, neigiami - programavime 
+0
-0
dešimytainiai, sveikieji, programavime realieji neegzistuoja
tikri skaicia, begalybės, NaN

*/
const teigiamas = 5;
const neigiamas = -8;
const nulis = 0;
const nulisMinus= -0;
console.log("teigiamas " + teigiamas, "neigiamas " + neigiamas); 
console.log(nulis, nulisMinus);

const desimtainis = 3.141592564;
console.log(desimtainis);

const begalybe = Infinity;
const begalybeMinus = -Infinity;
console.log(begalybe, begalybeMinus);

const nesamone = NaN;
console.log(nesamone);
 
/*const puseZodzio = 'labas' / 2;
console.log(puse.puseZodzio);
*/
console.log("-------------------")
const a=2;
const b=3;
const c=4;

const d= a + b + c;
console.log (a, b, c, d);

const e=a+b*c;
console.log("apskaičiuojamas reiškinys e=a+b*c");
console.log("e="+ e, "a="+a, "b="+b, "c="+c);

const f=(a+b)*c;
console.log("apskaičiuojamas reiškinys f=(a+b)*c");
console.log(f);

const angle=30;
const sin30=Math.sin(angle/180*Math.PI);
console.log(sin30);

console.log(Math.sqrt(81));// kvadratinė šaknis Math yra bibliotekėlė, kurioje yra aprašytos matematinės funkcijos
console.log(Math.pow(2, 3));//kėlimas laipsniu
console.log(2**3);//kėlimas laipsniu
console.log(17%5);//liekana






