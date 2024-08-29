/*
operacijos iš užduočių 
*/
const s1 = 5;
const s2 = -3;
const sum = s1 + s2;
console.log(sum);
const w1="labas";
const w2="rytas";
const w3="tau";
const sakinys1= w1+ " " + w2 + " " + w3;
console.log(sakinys1);

const sakinys2= `${w1} ${w2} ${w3}`; //mažiau simbolių//
console.log(sakinys2);
const x=[10, 2, 8, 4];
const alternuojantiSuma=x[0] - x[1] + x[2] - x[3];
console.log(alternuojantiSuma);
console.log("------------");

const d=[w1, w2, w3];
console.log(d);
const sakinys3= d[2] + ","+ d[1] + "," + d[0];
console.log(sakinys3);
console.log("------------");

const sakinys4= `${d[2]}, ${d[1]}, ${d[0]}`;
console.log(sakinys4);
console.log("------------");

const dd=[s1, w2, w3];
console.log(d);
const sakinys5= dd[2] + ","+ dd[1] + "," + dd[0];
console.log(sakinys5);
console.log("------------");

// dr- dd array reversed//
console.log(dd);

const dr = dd.reverse();
console.log(dr);
const sakinys6=dr.join(); 
console.log(sakinys6);
// parašo masyvą per kablelius, bet
// be tarpelių, nes turi reikšmę 
// pagal nutylėjima sakinys6=dr.join(','), 
// jeigu parašysime tarpą join(', '), rezultatas bus su tarpu.
 
const sakinys7=dr.join(", "); 
console.log(sakinys7); 
