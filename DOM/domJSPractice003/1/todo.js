function init() {
  //your code here
  // 1. เรียกใช้ addTask() เมื่อปุ่ม "Add" ถูกคลิก
  const addButton = document.getElementById("addButton");
  addButton.addEventListener("click", addTask);
}
function addTask() {
  //your code here
  // 2.1 ดึงค่าจาก input fieldและสร้างแท็ก <li> และตั้งค่า textContent ของมันเป็นค่าจากฟิลด์ <input>
  const inputField = document.getElementById("todoInput");
  const inputValue = inputField.value;
  const listItem = document.createElement("li");
  listItem.textContent = inputValue;

  // 2.2 เพิ่มแท็ก <li> เข้าไปใน <ul>
  const todoList = document.getElementById("todoList");
  todoList.appendChild(listItem);
  // 2.3 หลังจากเพิ่มรายการแล้ว ล้างค่าใน input field เพื่อเตรียมรับข้อมูลใหม่
  inputField.value = "";
}
init();
