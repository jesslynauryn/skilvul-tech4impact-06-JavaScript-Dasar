/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE

for (let angka=1; angka<=100; angka++) {
    let pembagi = 0;
    for (let i=1; i<=angka; i++){
        if (angka % i == 0) {
            pembagi++;
        }
    }
    if(pembagi == 2){
        console.log(angka)
    }
 }


/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop 
let primeCounter = 0;
let fiftiethPrime;

// /// EDIT HERE
let angka = 0;
while (primeCounter<50) {
    let pembagi = 0;
    for (let i=1; i<=angka; i++){
        if (angka % i == 0) {
            pembagi++;
        }
    }
    if (pembagi == 2){
        fiftiethPrime = angka;
        primeCounter++;
    }
    angka++;
}
console.log(`fiftiethPrime should be ${fiftiethPrime}`);



/// Soal - 03
/// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop
let oddCounter = 0;
let fiftiethOdd;

// /// EDIT HERE
let ganjil = 1;
do { 
    if (ganjil % 2 == 1){
        fiftiethOdd = ganjil;
        oddCounter++;
    }
    ganjil++;
} while (oddCounter < 50);

console.log(`fiftiethOdd should be ${fiftiethOdd}`);

