// TULIS ANALISA ANDA DIBAWAH
// 1. Apa yang akan terjadi apabila kita jalankan baris kode dibawah?
// 2. Apakah hasil dari fun1 dan fun2 itu sama?
// 3. Buatlah sebuah alasan dari poin ke-2, mengapa baris kode tersebut menampilkan hasil baik itu sama ataupun tidak.
const obj = {
    fun1: function() {
      console.log("fun1", this);
    },
    fun2: () => {
      console.log("fun2", this);
    }
  };
  
  obj.fun1();
  obj.fun2();
 //1. fun1 { fun1: [Function: fun1], fun2: [Function: fun2] }
//fun2 {}

//2. beda
//3. Berbeda, karena fun1 menggunakan variabel function untuk menampilkan fun1 dan fun2 sedangkan pada fun2 tidak menggunakan variabel function sehingga hanya berisi {} kosong


 //soal2
// 1. Apa itu Encapsulation? Mengapa kita membutuhkannya?
// 2. Apa itu Abstraction? Mengapa kita membutuhkannya?
// 3. Apa itu Inheritance? Mengapa kita membutuhkannya?
// 4. Apa itu Polymorpishm? Mengapa kita membutuhkannya?

//1. encapsulation dimaksudkan untuk membungkus data variabel dan fungsi menjadi satu kesatuan. Tujuan lain dari encapsulation adalah membatasi hak akses pada properti yang dimiliki oleh suatu objek. Ketika kita ingin membatasi hak askses properti sehingga data terjaga dan hanya bisa diakses melalui method

//2. abstraction adalah konsep untuk menyembunyikan suatu detil proses yang tidak perlu diketahui oleh pengguna dan tidak mendefinisikan isi dari suatu method. Ketika kita ingin menyembunyikan properti dan agar kode lebih terstruktur

//3. Inheritance berfungsi untuk mewariskan properti dan method pada class lain, agar class yang serupa dan memiliki method dan properti yang sama bisa diwariskan properti atau method baru.

//4. Polymorphism berarti kemampuan dari suatu objek untuk memiliki banyak bentuk. Ketika method child class yang dimiliki berbeda dgn method parentnya, sehingga bisa di override


// soal3. class
class Phone {
  constructor(brand, storage, ram){
    this.brand = brand;
    this.storage = storage;
    this.ram = ram;
  }
  getBrandName (){
    return `${this.brand}`;
  }
  setBrandName (brand){
    this.brand = brand;
  }
  printSpecification(){
    return console.log(`Ponsel ini memiliki storage: ${this.storage} dan ram: ${this.ram}`);
  }
  setSpecification(storage, ram){
    this.storage = storage;
    this.ram = ram;
  }
}

const phone = new Phone("Skilvul Mobile co", 64, 4);

console.log(phone.getBrandName());
phone.setBrandName("SM.co")
console.log(phone.getBrandName());

phone.printSpecification();
phone.setSpecification(32, 2);
phone.printSpecification();


//soal4
class Student {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.courseOfferings = [];
  }
  
  takeNewCourse() {
    this.courseOfferings = Course.subject + 1;
  }
  
  takeATest() {
    if (this.attendance < this.courseAttendance) {
      return null;
    }else
      return `${this.grade}`
   }
  
  courseAttendance() { 
    return this.attendance = this.attendance + 1;
   }
}

class CourseOffering { 
  constructor(course, grade, attendance) {
    this.course = course;
    this.grade = grade;
    this.attendance = attendance [0];
}
  getCourse() {
    this.course = Course.subject;
    return `${this.course}`;
  }
  getAttendance() {
    this.attendance = Course.attendance;
    return `${this.attendance}`;
  }
}

class Course { 
  constructor(subject, quota, attendance) {
      this.subject = subject;
      this.quota = quota;
      this.attendance = attendance;
  }
  getSubject() {
      return `${this.subject}`;
  }
  getAttendance() {
      return `${this.attendance}`;
  }
  decreaseQuota() {
      return this.quota = this.quota - 1;
  }
}

const biology = new Course("biology", 10, 3);
const physics = new Course("physics", 10, 2);

const johnWatson = new Student("john watson", "male");

johnWatson.takeNewCourse(biology);
johnWatson.takeNewCourse(physics);

johnWatson.courseAttendance(physics);
johnWatson.courseAttendance(physics);
johnWatson.courseAttendance(biology);
johnWatson.courseAttendance(physics);

console.log(biology.quota);
console.log(physics.quota);

johnWatson.takeATest(biology);
johnWatson.takeATest(physics);

console.log(johnWatson.courseOfferings);
