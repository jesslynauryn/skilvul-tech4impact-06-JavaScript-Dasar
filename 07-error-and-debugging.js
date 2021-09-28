/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE
/*type error-> error ketika operation tidak bisa dijalankan 
reference error-> ketika mereferensikan non-existent variable
range error-> error keyika tidak ada value yg di set atau range yang diluar value yg sudah di set
syntax error-> error ketika menginterpretasikan kode sintaks yg tidak valid, ketika urutan pesan tidak sesuai dengan sintaks dari bahasa saat memparsing kode.
*/


/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE
console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;

//error
//reference error
// karena variabel yg dipanggil belum existent, karena mesin membaca kode dari atas kebawah sedangkan console.log meminta output dari si variabel salaryWithVar dan salaryWithConst, tapi belum sempat di inisialisasi duluan si variabelnya
