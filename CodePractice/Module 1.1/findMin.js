let numbers = [34, 1, 58, 8, 21, 5, 13, 3, 89, 7];
console.log(findMin(numbers)); //1
// Insert your code here
function findMin(arr) {
  return Math.min(...arr); //เพื่อแยกสมาชิกแต่ละตัวของอาร์เรย์
}
