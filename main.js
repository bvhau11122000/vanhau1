 alert("hi jav");
 //biến 
 var fulNam = 'BÙi Văn Hậu ';
 var age = 26;
 alert(fulNam);//thông báo 
 alert(age);///thông báo
// hàm built-in
var fulName = 'bui van hau'
console.log("123")//in ra dòng chữ thông báo 
console.warn(fulNam)// in ra cảnh báo
console.error(fulNam)// in ra dấu X đỏ lỗi 
 
confirm("xác nhận bạn đủ tuổi!");// có nut cancel anh ok

prompt('có ô nhập chữ ')

setTimeout(function() {
    alert(fulNam);
}, 1000)// chay 1 lần 

setInterval(function() {
    console.log(fulNam + Math.random());
}, 1000)// chay liên tục

// toán tử gán
var a = 1 + 2;
confir.log(a);
// toán tử so sánh 
 var a = 1;
 var b = 2;
  if(a>b){
    alert('sai');
  }
// toán tủ logic
 var a = 1;
 var b = 2;
  if(a > 0 && b > 0){
    alert("a & b lơn hơn 0")
  } 
/** toán tử 
 * ** là lũy thừ
 * %  là chia lấy dư
 */

/* toán tử chuổi*/
var firsName = "son";
var lastName = "Dang";
console.log (firsName + " " + lastName)

var namess = 'son';
names += 'dang ';
console.log(names);

// toán tử so sánh 
var a = 1;
var b = 2;
 if(a == b){
    console.log('điều kiện đúng');
 }else{
console.log('điều kiện sai ');
 }
 /**
  *  === : bằng tuyệt đối 
  * !==  :  khác tuyệt đối 
  */
 var a=1;
 varb=1;
 console.log(a===b);// false

 // Boolean
 var a =1;
 var b= 2;
var isSucess = a+b;
console.log(isSucess);
// câu điều kiện
 if (true){
    console.log('điều kiện đúng');
 }else{
    console.log('điều kiện sai');
 }
// toán tử logical
/**
 *  &&-and tất cả điều kiện đúng 
 * || - Or  1 điều kiện đúng thì sẽ đúng 
 *  !- Not  đúng thành sai, sai sẽ thành đúng 
 */
var a =1;
var b = 2;
var c  =3;
 if(a>0 && b>0 && c>0){
    console.log('dieu kiên đúng');
 }else{
    console.log("điều kiện sai");
 }
// kiểu dữ liệu
/**
 * 1 kiểu dữ liệu nguyên thủy
 * - Number: số 
 * - String: chuổi
 * - Boolean: true,fales
 * - Undefined: ko gán giá trị 
 * - Null: ko có gì 
 * - symbol: unique
 * 2 kiểu dữ liệu phức tạp
 * - Function:gọi đc,viết đc... 
 * - Object:
 */
var myObject = {
    name: 'van hau',
    age : 18,
    adress: 'dak lak',
    myFunction: function(){

    }
}
console.log('myObject',myObject);
 var myArray = [
    'javascript',
    'php'
 ];
