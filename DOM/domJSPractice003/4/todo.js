function init() {
  //your code here
  // สร้าง input field
  const inputField = document.createElement("input");
  inputField.setAttribute("type", "text");
  inputField.setAttribute("placeholder", "Enter a new task");
  // สร้าง button
  const addButton = document.createElement("button");
  addButton.textContent = "Add";
  // เพิ่ม event listener ให้ปุ่ม "Add"
  addButton.addEventListener("click", addTask);
  // เลือก div และเพิ่ม input field และ button เข้าไป
  const firstDiv = document.querySelector("div");
  firstDiv.appendChild(inputField);
  firstDiv.appendChild(addButton);
  // สร้าง ul element
  const ulElement = document.createElement("ui");
  ulElement.setAttribute("id", "todoList"); //2.2 Add a <li> tag to the <ul id="todoList"></ul>
  // เลือก div และเพิ่ม ul เข้าไป
  const secondDiv = document.querySelector("div");
  secondDiv.appendChild(ulElement);
}
function addTask() {
  //your code here
  // ดึงค่าจาก input field ,สร้าง element <li> และกำหนดค่า textContent
  const inputField = document.querySelector("input");
  const inputValue = inputField.value;
  const listItem = document.createElement("li"); // สร้าง element <li>
  listItem.textContent = inputValue;
  // เลือก ul และเพิ่ม element <li> เข้าไป
  const todoList = document.getElementById("todoList");
  todoList.appendChild(listItem); //element <li>
  // ล้างค่าใน input field
  inputField.value = "";
}
init();
