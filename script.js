let str = ''
for (let i = 10; i <= 20; i++) {
    str += i + ", ";
}
alert(str);


let square = ''
for (let i = 10; i <= 20; i++) {
    square += i**2 + ", ";
}
alert(square);


let mult = '';
let result = '';
for (let i = 1; i <= 10; i++) {
    mult += i*7 + " ";
    result = mult.split(" ");
}
alert(`7 * 1 = ${result[0]}
7 * 2 = ${result[1]}
7 * 3 = ${result[2]}
7 * 4 = ${result[3]}
7 * 5 = ${result[4]}
7 * 6 = ${result[5]}
7 * 7 = ${result[6]}
7 * 8 = ${result[7]}
7 * 9 = ${result[8]}
7 * 10 = ${result[9]}`);


let sub = 0;
for (let i = 1; i <= 15; i++) {
    sub += i;
}
alert(sub);


let totalMult = 1;
for (let i = 15; i <= 35; i++) {
    totalMult *= i;
}
alert(totalMult);


let middle = 0;
for (let i = 1; i <= 500; i++) {
    middle += i;
}
alert(middle / 500);


let even = 0;
for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
       even += i; 
    } 
}
alert(even);


let odd = '';
for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        odd += i + ", "; 
     } 
}
alert(odd)


const randomNumber = 44;
let row = '';
let count = '';
let sum = 0;
for (let i = 1; i <= randomNumber; i++) {
    if (randomNumber % i === 0) {
        row += i + ", "; 
        if (i % 2 === 0) {
            count += i + ", ";
            sum += i;
        }
     } 
}
alert(`Всі дільники: ${row}
Парні дільники: ${count}
Сумма парних дільників: ${sum}`)


let table = '';
for (var i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
            table += (i * j) + ' ';
    }
    table += '\n'
}
alert(table);