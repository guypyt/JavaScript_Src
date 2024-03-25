// Import the memberManagement function from the members module
import { memberManagement } from "./members.js";

// Destructure getMembers and findMember functions from memberManagement
const { getMembers, findMember } = memberManagement();

// Define the memberForm function to handle member form functionality
function memberForm() {
  // Function to add event handlers
  const addEventHandler = () => {
    // Add event listener to the member button
    document.getElementById("member").addEventListener("click", memberHandler);
  };

  // Function to handle member button click event
  const memberHandler = () => {
    // Clear previous search results
    document.getElementById("searchMember").innerHTML = "";

    // Create and display member search panel
    const searchPanel = document.getElementById("searchMember");
    searchPanel.innerHTML = `
            <p>Your Member Id:</p>
            <input id="memberId" type="number">
            <button onclick="searchHandler()">search</button>
        `;
  };

  // Function to handle search button click event
  window.searchHandler = () => {
    // Get member id from input
    const memberId = document.getElementById("memberId").value;

    // Find member by id
    const member = findMember(parseInt(memberId));

    // Display member details if found, otherwise display message
    const foundMemberPanel = document.getElementById("foundMember");
    if (member) {
      foundMemberPanel.innerHTML = `
                <p>id: ${member.id}</p>
                <p>firstname: ${member.firstname}</p>
                <p>lastname: ${member.lastname}</p>
                <p>email: ${member.email}</p>
                <p>address: ${member.address}</p>
            `;
    } else {
      foundMemberPanel.innerHTML = "<p>ไม่พบข้อมูล</p>";
    }
  };

  // Call addEventHandler function to initialize event handling
  addEventHandler();
}

// Call memberForm function to initialize member form functionality
memberForm();
