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
  }else{
   alert('đúng');
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
console.log(names.length);// length: kt độ dài chuổi tính cả dấu cách 
// indexOf("x",6): vị tri của chuỗi
//latIndexOf("x"): vtri cuối của chuỗi
// Cut String '.slice(4,6);' cắt chuổi
// toán tử so sánh 
// replace('/js//g),'javascript'): ghi đề lên
// toUpperCase(): thành chữ viết hoa 
// toLowerCase(): thành chữ thường 
//trim(): loại bỏ khoản trắng ở 2 đầu 
//split(", ") 
//charAt(1);
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
 * 
 * toFixed(): làm tròn, rút gọn
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
//hàm function
 function showDialog(){
   alert('xin chào các bạn');
 }
 showDialog();
 // các loại function
 // Declaraton function
 function showMess(){

 }
// Expression function
function showmess(){
}
var showmess = function(){

}

 // call: mở và đóng ngoặc tròn 
 // tham sô 
 function writelog(message,test){
   console.log(message);
   console.log(test);
 }
writelog(message , test);
// rturn
function cong(a,b){
   return a+b;
}
var result = cong (2,3);
console.log(result);
//Mảng (array)
var languages = ['jv','php',
'ruby'];
console.log(languages.toString());
/**
 * 1. join(" ,"): biến array thành 1 chuổi 
 * 2. pop(): xóa đi element cuối mảng and trả về element đã xóa
 * 3. push(): thêm 1 or nhiều vào cuối mảng
 * 4. shift(): ngược lại with pop
 * 5. unshift(): gần giống with push
 * 6. splice(): xóa ,chèn, cắt của cái element của mảng
 * 7. concat(): nối 2 array 
 * 8. slice (): cắt mảng
 * 
 * 
 * 
 * 
 */
