import { memberManagement } from "./members.js";
const { getMembers, findMember } = memberManagement();

function memberForm() {
  const addEventHandler = () => {
    // เพิ่ม event handler เมื่อคลิกที่ปุ่ม member
    const memberButton = document.getElementById("member");
    memberButton.addEventListener("click", memberHandler);
  };

  const memberHandler = () => {
    // เคลียร์เนื้อหาก่อนหน้า
    const foundMemberDiv = document.getElementById("foundMember");
    while (foundMemberDiv.firstChild) {
      foundMemberDiv.removeChild(foundMemberDiv.firstChild);
    }

    // สร้างและแสดงพาเนลสำหรับค้นหา member id
    const searchMemberDiv = document.getElementById("searchMember");
    while (searchMemberDiv.firstChild) {
      searchMemberDiv.removeChild(searchMemberDiv.firstChild);
    }
    const memberIdParagraph = document.createElement("p");
    memberIdParagraph.textContent = "Your Member Id:";
    searchMemberDiv.appendChild(memberIdParagraph);

    const memberIdInput = document.createElement("input");
    memberIdInput.setAttribute("id", "memberId");
    searchMemberDiv.appendChild(memberIdInput);

    const searchButton = document.createElement("button");
    searchButton.textContent = "search";
    searchButton.addEventListener("click", searchHandler);
    searchMemberDiv.appendChild(searchButton);
  };

  const searchHandler = () => {
    // เคลียร์เนื้อหาก่อนหน้า
    const foundMemberDiv = document.getElementById("foundMember");
    while (foundMemberDiv.firstChild) {
      foundMemberDiv.removeChild(foundMemberDiv.firstChild);
    }

    // รับค่า member id จาก input
    const memberIdInput = document.getElementById("memberId");
    const memberId = parseInt(memberIdInput.value);

    // ค้นหา member โดยใช้ id
    const member = findMember(memberId);

    // หากพบ member แสดงรายละเอียดของ member
    if (member) {
      const memberDetails = document.createElement("div");

      const idParagraph = document.createElement("p");
      idParagraph.textContent = `id: ${member.id}`;
      memberDetails.appendChild(idParagraph);

      const firstnameParagraph = document.createElement("p");
      firstnameParagraph.textContent = `firstname: ${member.firstname}`;
      memberDetails.appendChild(firstnameParagraph);

      const lastnameParagraph = document.createElement("p");
      lastnameParagraph.textContent = `lastname: ${member.lastname}`;
      memberDetails.appendChild(lastnameParagraph);

      const emailParagraph = document.createElement("p");
      emailParagraph.textContent = `email: ${member.email}`;
      memberDetails.appendChild(emailParagraph);

      const addressParagraph = document.createElement("p");
      addressParagraph.textContent = `address: ${member.address}`;
      memberDetails.appendChild(addressParagraph);

      foundMemberDiv.appendChild(memberDetails);
    }
  };

  return { addEventHandler };
}

const { addEventHandler } = memberForm();
addEventHandler();
