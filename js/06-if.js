/*
IF - salygos sakinys

uzklausos klausimas visada atsako i "taip ar ne"?

reiksmes:
true
false

PALYGINIMO OPERATORIAI:
visi: >, <, ==, !=, <=, >=, ===, !==
nenaudotini: ==, != (jeigu nesutampa tipai, nerekomneduojama jų naudoti, pvz. stalas ir šuo, nors turi keturias kojas)
naudotini: >, <, <=, >=, ===, !==

SABLONAI:
if () {}
if () {} else {}
if () {} else if {}
if () {} else if {} ...  else if {} (neribota grandis be else)
if () {} else if {} ...  else if {} else {} (neribota grandis su else)

*/

const a = 33;
const b = 7;

if (a > b) {
    console.log('A yra maziau uz B');
} else {
    console.log('A nera maziau uz B');
}
// Jeigu rašytume a=b, tai yra priskyrimo sakinys. 
// Bus toks komentaras "Assignments to constant variable", 
// todėl naudojamas dvigubos lygybės operatorius.

if (5 == 5) {
    console.log('abu yra lygus');
} else {
    console.log('nera lygus');
}
// nelygu, nes šauktukas sako, ne. Iš priešingos pusės dėti negalima!

if (5 != 8) {
    console.log('penki nelygu astuoniem');
} else {
    console.log('vis gi yra lygu');
}

if (11 >= 8) {
    console.log('daugiau arba lygu 11 >= 8');
}

if (11 >= 11) {
    console.log('daugiau arba lygu 11 >= 11');
}
// dviguba lygybė tikrina reikšmes
const c = 11
const d = "11"
if (c == d) {
    console.log('taip, c reikšmė lygi d reikšmei');
}
 else {
        console.log('ne');
}

// Tekstų atveju if klausia ar kintamojo reikšmė pilna ar ne, 
// jei tuščias "ne", jeigu yra simbolių "taip"
const cc = ""
const dd = "11"
if (cc) {
    console.log('taip');
}
 else {
        console.log('ne');
}
// Jeigu dirbama su tekstu jis sulygina reikšmę su "true", 
// else dalis lieka neveiksni, nes prie tokios kodo dalies neįmanoma patekti
const zodis = "labas"
if (true) {
    console.log('taip');
}
 else {
        console.log('ne');
}

const astuoniolikaNumber = 18;
const astuoniolikaString = '18';

if (astuoniolikaNumber == astuoniolikaString) {
    console.log('taip');
} else {
    console.log('ne');
}
// 
if (astuoniolikaNumber === astuoniolikaString) {
    console.log('taip');
} else {
    console.log('ne');
}

const falseBoolean = false;
const falseString = '';
const falseNumber = 0;

if (falseBoolean === falseString) {
    console.log('hello');
} else {
    console.log('cya');
}

if (falseBoolean === falseNumber) {
    console.log('hello');
} else {
    console.log('cya');
}

if (falseString === falseNumber) {
    console.log('hello');
} else {
    console.log('cya');
}

// ZEMIAU: du pavyzdziai, kai logikos nors ir panasios, taciau rezultatai visiskai skirtingi
const akys = 'melynos';

if (akys === 'melynos') {
    console.log('1 - Akys yra melynos');
} else if (akys === "zalios") {
    console.log('1 - Akys yra zalios');
} else if (akys === "rudos") {
    console.log('1 - Akys yra rudos');
} else if (akys === "raudonos") {
    console.log('1 - Akys yra raudonos (tipo programeris???)');
} else {
    console.log('1 - Neatpazinta akiu spalva... ');
}
// Galima kita kombinacija su labiau skaitomu if sakiniais, ne visada tinkama logika, 
// nes patikrins visus if'us, o to ne visada reikia (atsakymai 1 Akys yra melynos, 
// 1 Akys yra melynos 2 Neatpazinta akiu spalva... 👌)
if (akys === 'melynos') {
    console.log('2 - Akys yra melynos');
}

if (akys === "zalios") {
    console.log('2 - Akys yra zalios');
}

if (akys === "rudos") {
    console.log('2 - Akys yra rudos');
}

if (akys === "raudonos") {
    console.log('2 - Akys yra raudonos (tipo programeris???)');
} else {
    console.log('2 - Neatpazinta akiu spalva... 👌');
}
// kita if logika
const parosMetas = 'diena';
const arLyja = true;

if (parosMetas === 'rytas') {
    console.log('Dabar yra rytas');
} else {
    if (parosMetas === 'diena') {
        if (arLyja === true) {
            console.log('Dabar yra diena ir lyja');
        } else {
            console.log('Dabar yra diena bet dar ne lyja');
        }
    } else {
        if (parosMetas === 'vakaras') {
            console.log('Dabar yra vakaras');
        } else {
            console.log('Neatpazintas paros metas');
        }
    }
}