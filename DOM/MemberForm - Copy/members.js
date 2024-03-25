// Define a function named memberManagement
function memberManagement() {
  // Array of member objects
  const members = [
    {
      id: 1001,
      firstname: "Jason",
      lastname: "Parsley",
      email: "JasonParsley@teleworm.us",
      address: "3512 Florence Street Longview, TX 75601",
    },
    {
      id: 1002,
      firstname: "Mack",
      lastname: "Pierce",
      email: "MackKPierce@dayrep.com",
      address: "3484 Hiddenview Drive Garfield Heights, OH 44128",
    },
    {
      id: 1003,
      firstname: "Zaida",
      lastname: "Daniels",
      email: "ZaidaDaniels@dayrep.com",
      address: "1367 Clarksburg Park Road Sedona, AZ 86336",
    },
    {
      id: 1004,
      firstname: "Lawrence",
      lastname: "McGinnis",
      email: "LawrenceMMcGinnis@dayrep.com",
      address: "1723 Roane Avenue Bethesda, MD 20014",
    },
  ];

  // Function to retrieve all members
  function getMembers() {
    return members;
  }

  // Function to find a member by ID
  function findMember(id) {
    return members.find((member) => member.id === id);
  }

  // Return an object containing the functions
  return { getMembers, findMember };
}

// Export the memberManagement function as a module
export { memberManagement };
