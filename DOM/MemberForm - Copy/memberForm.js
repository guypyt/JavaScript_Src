import { memberManagement } from "./members.js";
const { getMembers, findMember } = memberManagement();

function memberForm() {
  const addEventHandler = () => {
    // เพิ่ม event handler เมื่อคลิกที่ปุ่ม member
    const memberButton = document.getElementById("member");
    memberButton.addEventListener("click", memberHandler);
  };

  const memberHandler = () => {
    //เคลียร์ก่อนหน้า
    const foundMemberDiv = document.getElementById("foundMember");
    foundMemberDiv.textContent = "";

    // สร้างและแสดงพาเนลสำหรับค้นหา member id
    const searchMemberDiv = document.getElementById("searchMember");

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
    // เคลียร์ก่อนหน้า
    const foundMemberDiv = document.getElementById("foundMember");
    foundMemberDiv.textContent = "";

    // รับค่า member id จาก input
    const memberIdInput = document.getElementById("memberId");
    const memberId = parseInt(memberIdInput.value);
    // ไม่สามารถใช้ memberIdInput.value; เพราะเป็น string

    // ค้นหา member โดยใช้ id
    const member = findMember(memberId);

    // หากพบ member แสดงรายลพเอียดของ member
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
    // const members = getMembers();
    // if (members.length > 0) {
    //   const memberDetailsDiv = document.createElement("div");

    //   const idParagraph = document.createElement("p");
    //   idParagraph.textContent = `id: ${member.id}`;
    //   memberDetailsDiv.appendChild(idParagraph);

    //   const firstnameParagraph = document.createElement("p");
    //   firstnameParagraph.textContent = `firstname: ${member.firstname}`;
    //   memberDetailsDiv.appendChild(firstnameParagraph);

    //   const lastnameParagraph = document.createElement("p");
    //   lastnameParagraph.textContent = `lastname: ${member.lastname}`;
    //   memberDetailsDiv.appendChild(lastnameParagraph);

    //   const emailParagraph = document.createElement("p");
    //   emailParagraph.textContent = `email: ${member.email}`;
    //   memberDetailsDiv.appendChild(emailParagraph);

    //   const addressParagraph = document.createElement("p");
    //   addressParagraph.textContent = `address: ${member.address}`;
    //   memberDetailsDiv.appendChild(addressParagraph);

    //   foundMemberDiv.appendChild(memberDetailsDiv);
    // }
    //กรณีเราใช้เงื่อนไขที่สอง แทน เงื่อนไขที่แรก const member = findMember(memberId); ตัวแปร member ก็ยังถูกเรียกใช้งานปกติ
  };

  return { addEventHandler };
}

const { addEventHandler } = memberForm();
addEventHandler();
