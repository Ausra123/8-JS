/*
STRINGS (tekstas)
inicijavimo būdai:
- viengubos (') kabutės
- dvigubos (") kabutės
- bactick (`) kabutės

*/
const kabutes1 = 'Labas';
const kabutes2 = "rytas";
console.log(kabutes1);
console.log(kabutes2);
//Viengubos (') kabutes.
const kabutes12 = "viengubos (') kabutes";
console.log(kabutes12);

// Dvigubos (") kabutes.
const kabutes21 = "dvigubos (') kabutes";
console.log(kabutes21);

//Viengubos (') kabutes ir dvigubos (") kabutes.
const kabutes2e = "viengubos (') ir dvigubos (\") kabutes"
console.log(kabutes2e);

const kabutes1e = 'viengubos (\') ir dvigubos (") kabutes'
console.log(kabutes1e);

// Tekste backslash \ yra jėga!
const backslash = 'Tekste backslash \\ yra jėga!'
console.log(backslash);

// Vardelis Pavardėlė
const vardas ="Vardelis";
const pavarde = "Pavardėlė";
const fullName = vardas + ' ' + pavarde;
console.log(fullName);

//Sveiki, aš esu Vardelis!
const sayHi = 'Sveiki, aš esu ' + vardas + '!'
console.log(sayHi);

// \n - enter
// \t - tab
const imgSrc= './img/logo.png';
const HTML = '<header>\n\
        <nav>\n\
            <img src="' + imgSrc + ' alt="logo" class="logo">\n\
       <a href="#">Link</a>\n\
       <a href="#">Link</a>\n\
       <a href="#">Link</a>\n\
       <a href="#">Link</a>\n\
       <a href="#">Link</a>\n\
       <a href="#">Link</a>\n\
        </nav>\n\
    </header> ';
    console.log(HTML);

    const HTMLbacktick = `<header>
        <nav>
            <img src="${imgSrc}" alt="logo" class="logo">
       <a href="#">Link</a>
       <a href="#">Link</a>
       <a href="#">Link</a>
       <a href="#">Link</a>
       <a href="#">Link</a>
       <a href="#">Link</a>
        </nav>
    </header>`;
    console.log(HTMLbacktick);
    
