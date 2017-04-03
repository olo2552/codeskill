const input =
`Imię|Wzrost
Zofia|164
Grzegorz|187
Michal|170.5`;

let beforeRotation = input.split(`\n`)
        .map( elem => elem.split(`|`) );

const afterRotation = beforeRotation[0].map( (column, index) => {
    return beforeRotation
        .map( (row) => row[index] )
        .join(`|`);
}).join(`\n`);

console.log(afterRotation);


