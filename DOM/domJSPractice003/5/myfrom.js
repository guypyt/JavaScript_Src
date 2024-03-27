function init() {
  //your code here
  //1.1 สร้าง element ต่างๆไว้ใน <body>
  document.title = "Registeration Form";

  const body = document.body;

  const heading = document.createElement("h2");
  heading.textContent = "Register"; // กำหนดข้อความของ element <h2>
  body.appendChild(heading);

  // สร้าง div สำหรับช่องกรอกชื่อ
  const nameDiv = document.createElement("div");
  const nameLabel = document.createElement("label");
  nameLabel.setAttribute("for", "name");
  nameLabel.textContent = "Full Name:";

  const nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("id", "name");
  nameInput.setAttribute("name", "name");
  nameInput.setAttribute("required", "");

  //เพิ่ม element ื ทั้งหมดไป <body>
  nameDiv.appendChild(nameLabel);
  nameDiv.appendChild(nameInput);
  body.appendChild(nameDiv);

  // สร้าง div สำหรับช่องกรอกอีเมล
  const emailDiv = document.createElement("div");
  const emailLabel = document.createElement("label");
  emailLabel.setAttribute("for", "email");
  emailLabel.textContent = "Email Address:";

  const emailInput = document.createElement("input");
  emailInput.setAttribute("type", "email");
  emailInput.setAttribute("id", "email");
  emailInput.setAttribute("name", "email");
  emailInput.setAttribute("required", "");

  //เพิ่ม element ทั้งหมดไป <body>
  emailDiv.appendChild(emailLabel);
  emailDiv.appendChild(emailInput);
  body.appendChild(emailDiv);

  // สร้าง div สำหรับปุ่ม "Register"
  const buttonDiv = document.createElement("div");
  const registerButton = document.createElement("button");
  registerButton.setAttribute("type", "submit");
  registerButton.textContent = "Register";
  buttonDiv.appendChild(registerButton);
  body.appendChild(buttonDiv);

  //เพิ่ม event listener ให้กับปุ่ม "Register"
  registerButton.addEventListener("click", showUserRegister);
}
function showUserRegister() {
  //your code here
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const userInfo = document.createElement("p");
  userInfo.textContent = "Name: " + name + "Email: " + email;
  //สร้าง div สำหรับแสดงข้อมูลที่ผู้ใช้ลงทะเบียน
  const showDiv = document.createElement("div");
  document.body.appendChild(showDiv); //body.appendChild(showDiv); ไม่ได้
  showDiv.appendChild(userInfo);
}
init();
