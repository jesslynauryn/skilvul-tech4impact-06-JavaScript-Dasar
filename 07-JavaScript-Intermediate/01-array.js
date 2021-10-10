//soal 1. reverse

// const arr = [1, 2, 3];
// const arr2 = [8, 1, 5, 7];
// function reverse(x) { 
//     let leftIndex = 0;
//     let rightIndex = x.length - 1;
    
//     while (leftIndex < rightIndex){
//         let temp = x[leftIndex];
//         x[leftIndex] = x[rightIndex];
//         x[rightIndex] = temp;

//         leftIndex++;
//         rightIndex--;
       
//     }
//     return x;
//  }

//  const newArr = reverse(arr);
//  const newArr2 = reverse(arr2);
 
//  console.log(newArr);
//  console.log(newArr2);



// // soal 2. mengembalikan total berapa elemen bilangan/number yang melebihi nilai rata-rata dari sebuah array

// const arr1 = [1, 3, 4, 1, 2, 8];
// const arr2 = [5, 6, 7, 8, 1, 3];

// function getAverage(arr) { 
//     let hasil = arr.reduce((total, value) => total + value);
    
//     hasil = hasil / arr.length
//     let filterArr = arr.filter((item) => {
//         return item > hasil;
//     })
//     return filterArr.length
// }

// console.log(getAverage(arr1))
// console.log(getAverage(arr2))




// soal 3. 
const arr = [
    [10],
    [9, 7, 1],
    [2, 8],
  ];
  
  function searchInArray(arr, num) {
      let newArr = [];
      for(let x = 0; x < arr.length; x++ ) {
          for (let y = 0; y < arr[x].length; y++) {
              newArr.push(arr[x][y]);
          }
      }
      for (let i = 0; i<newArr.length; i++){
          if (num == newArr[i]) {
              return newArr.indexOf(newArr[i]);
          }
      }
      return null;
  }
  
  console.log(searchInArray(arr, 3));
  console.log(searchInArray(arr, 2));
  console.log(searchInArray(arr, 4));
  console.log(searchInArray(arr, 8));
  

//   karna fungsi tersebut menerima sebuah array multi dimensi maka kita perlu merubahnya kedalam 1 dimensi terlebih dahulu
// setelah array 1 dimensi terbentuk, maka kita bisa mencari nilai yang ingin dicari oleh user
// apabila kita tidak menemukan nilai tersebut maka kembalikan null
// dan apabila kita menemukan nilai tersebut, maka kita akan mengembalikan index dari nilai tersebut (index dalam bentuk 1 dimensi bukan multi dimensi)
