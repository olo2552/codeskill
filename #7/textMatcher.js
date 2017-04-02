// Andrzeju, jeśli to czytasz, to chcę Ci gorąco za to zadanie podziękować -
// przy tym zadaniu nauczyłem się jako programista więcej niż przez całe życie.
// I kurde trochę miałeś rację - programowanie to nie tylko kodowanie :)

const match = (text, pattern) => {
    //pattern = pattern.split(`?`).join(`[a-z]`);
    // ^ this is the same, but RegExp method is about 50% faster

    pattern = '0' + pattern.replace(/\?/g, `[a-z]`).replace(/\^/, ``);
    text = `0` + text;

    console.log(text , new RegExp(pattern, `i`));

    return new RegExp(pattern, `i`).test(text); // `i` flag stands for case insensitive search
};

console.log(match(`Andrzej`, `^a`));
console.log(match(`Andrzej`, `^adr`));
console.log(match(`Andrzej`, `?ndrze?`));
console.log(match(`Andrzej`, `*j`));
console.log(match(`Andrzej`, `A*j`)); // ? ASK WHY IT BEHAVES IN SUCH A WAY!
console.log(match(`Andrzej`, `*nd*e*`,'\n'));


// conclusion:
//      - think first, read second, ask third, do LAST
//      - in a near future master RegExp - ask Andrzej how and where to begin
//      - when such a simple task is growing enormously it's sign that, your simply doing it wrong
//      - there's no point in digging deep into the wrong way of achieving the answer -
//
// IT'S BETTER TO TAKE A REST, GIVE YOURSELF A BREAK, THAN TRYHARDING WITH NO RESULTS