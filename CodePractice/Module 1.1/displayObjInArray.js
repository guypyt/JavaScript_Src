// - Write code to display only the object elements in the mixedArray.
// Initiate code:
let mixedArray = [
  42,
  "hello",
  { name: "Joe", surname: "Doe" },
  true,
  56,
  false,
  { name: "John", surname: "Smith" },
  { name: "Joy", surname: "Stein" },
];
// Insert your code here
for (let element of mixedArray) {
  // ตรวจสอบว่าองค์ประกอบเป็นอ็อบเจกต์หรือไม่
  if (typeof element === "object") {
    console.log(element);
  }
}
// Output:
// {name: "Joe ", surname: "Doe}
// {name: "John ", surname: "Smith"}
// {name: "Joy ", surname: "Stein"}
