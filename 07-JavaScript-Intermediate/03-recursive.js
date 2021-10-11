// soal 1 sumOfArray
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 3, 1, 10, 22];
function sumOfArray(arr) { 
    let number = arr.reduce((total, value) => total + value);
    return number;
 }

console.log(sumOfArray(arr1));
console.log(sumOfArray(arr2));


// // soal 2
const avg1 = sumOfArray(arr1) / arr1.length;
const avg2 = sumOfArray(arr2) / arr2.length;

function countAboveAvg(arr, avg) { 
    if (arr.length < 1) {
        return 0;
    } else {
        return (arr[0] > avg) + countAboveAvg(arr.slice(1), avg);
    }
}

const totalAboveAvg1 = countAboveAvg(arr1, avg1);
const totalAboveAvg2 = countAboveAvg(arr2, avg2);

console.log(totalAboveAvg1);
console.log(totalAboveAvg2);

//output 2 // Ada 3 elemen yang melebihi atau sama dengan nilai rata-rata yaitu 4 dan 5
//2 // Ada 3 elemen yang melebihi atau sama dengan nilai rata-rata yaitu 10 dan 22


// soal 3
const arr = [1, 2, 3, 4, 5];
function searchInArray(arr, num) { 
    //base case
    if (arr[arr.length - 1] === num) {
        return `angka ditemukan pada index: ${arr.length - 1}`;
    }
    if (arr.length === 0){
        return "angka tidak ditemukan";
    }
    return searchInArray(arr.slice(0, -1), num);
}


console.log(searchInArray(arr, 6));
console.log(searchInArray(arr, 1));
console.log(searchInArray(arr, 8));


// //output "angka tidak ditemukan"
// // "angka ditemukan pada index: 0"
// // "angka tidak ditemukan"


//soal 4
function trianglePattern(a, b) { 
    for (var i=a; i>=1; i--) {
        var str = "";
        for (var j=i; j<=b; j++) {
            str += "*";
        }
        console.log(str);
        }
    }

trianglePattern(5, 5);

