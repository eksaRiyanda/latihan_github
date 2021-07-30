/* 
Mencari Nilai Ganjil, Genap
*/
let genap = [];
let ganjil = [];

for (let i = 0; i <= 100; i++) {
    if (i % 2 == 1) {
        ganjil.push(i);
    } else {
        genap.push(i);
    }

}
console.log("Genap : " + genap + "Ganjil : " + ganjil)