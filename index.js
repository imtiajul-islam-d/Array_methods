const data = [
  { first: "Numayeer", last: "Mohammad Shafiq" },
  { first: "Ehat", last: "Islam" },
  { first: "Emon", last: "Islam" },
  { first: "Eshat", last: "Islam" },
];

const people = ["Numayeer", "Eshat", "Emon", "Emi"];

// Array.prototype.filter()
// 1. Filter the list of data for those who have the last name "Mohammad Shafiq"
const shafiq = data.filter((item) => item.last === "Mohammad Shafiq")
console.table(shafiq)
