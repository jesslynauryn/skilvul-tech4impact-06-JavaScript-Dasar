/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

/// WRITE YOUR ANALYSIS HERE
// ada 3 tipe scope JS: blocks, local scope dan global scope

//blocks adalah scope yg berada di dalam {}, cthnya conditional, function dan looping menggunakan blocks
//global scope berarti variabel dibuat dapat diakses dimanapun dalam suatu file. suatu variable harus dideklarasikan diluar blocks agar menjadi global scope
//local scope berarti mendeklarasikan variabel didalam blocks seperti function, conditional, dan looping. variabel hanya bisa diakses didalam blocks saja. Tidak bisa diakses diluar blocks.

// // blocks :{
//   let x = 2;
// }
// // local scope: function myFunction() {
//   let carName = "Volvo";  
// -> cuma kode disini yg bisa pakai carName
// }
// // global scope: let carName = "Volvo";
// function car() {
//     return carName;
// }



/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
/// 
// Mariah
// karena dalam baris kode tersebut, yang dipanggil oleh function adalah parameter name dalam console log yaitu "Mariah Carey" dan bukan dari nilai nya variable name.
const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));

