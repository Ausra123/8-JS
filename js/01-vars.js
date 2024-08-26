/*

Iniciavimo būdas (keičiamumas ir scope):
const - nekeičiama reikšmė
let - keičiama reikšmė
var - keičiama reikšmė

Kintamųjų tipai:
number (skaičius)
string (tekstas)
boolean (loginė reikšmė)
array (sąrašas, masyvas)
object (objektas)
null (reikšmė kuri neegzistuoja, bet yra, t.y. užima vietą)
undefined (neapibrėžta)
map
set

*/
const metai = 2024; /*sukuriame kintamąjį*/
console.log(metai); /*kreipiamės į konsolę ir spausdiname rezultatą*/

const vardas = "Vardelis";
console.log(vardas);

const arSninga = false;
console.log('Ar sninga:', arSninga);

const arTeigiama = true;
console.log('Ar teigiama:', arTeigiama);

const pazymiai = [10, 2, 8];
console.log(pazymiai);

const zodynas = ['labas', 'rytas', 'sakau', 'tau'];
console.log(zodynas);

const petras ={
vardas: 'Petras',
amzius: 66,
gyvenamojiVieta:'Gatve g. 1-3, Miestas',
vaikas:[
    {vardas: 'Onutė',
    amzius: 22},

    { vardas: 'Kęstutis',
    amzius: 25
    }
]
};
console.log(petras);

