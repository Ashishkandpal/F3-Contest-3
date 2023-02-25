"use strict";
let id = 1;

const addRowBtn = document.querySelector(".btn__add-row");
const tbody = document.querySelector(".table__body");

//array for storing data
const tableData = [];

//event listener
addRowBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const addingRow = `
    <tr>
        <td>${id}</td>
        <td><input class='${id}--1' type="text" required/></td>
        <td><input class='${id}--2' type="text" required/></td>
        <td><input class='${id}--3' type="text" required/></td>
        <td><input class='${id}--4' type="number" required/></td>
        <td><input class='${id}--5' type="email" required/></td>
        <td><button class="btn__save--${id} btn-dark ">Save</button></td>
    </tr>
`;
  tbody.insertAdjacentHTML("beforeend", addingRow);

  //storing the data inside the array and logging in the console
  const rowId = id;
  const btnSave = document.querySelector(`.btn__save--${rowId}`);
  btnSave.addEventListener("click", function () {
    e.preventDefault();
    if (
      document.querySelector(`input[class='${rowId}--1']`).value == "" ||
      document.querySelector(`input[class='${rowId}--2']`).value == "" ||
      document.querySelector(`input[class='${rowId}--3']`).value == "" ||
      document.querySelector(`input[class='${rowId}--4']`).value == "" ||
      !document.querySelector(`input[class='${rowId}--5']`).value.includes("@")
    ) {
      alert("Please fill all fields properly");
      return;
    }
    tableData.push({
      id: rowId,
      student_name: document.querySelector(`input[class='${rowId}--1']`).value,
      student_roll: document.querySelector(`input[class='${rowId}--2']`).value,
      subject: document.querySelector(`input[class='${rowId}--3']`).value,
      marks: document.querySelector(`input[class='${rowId}--4']`).value,
      markedBy: document.querySelector(`input[class='${rowId}--5']`).value,
    });
    console.log(tableData);
  });
  id++;
});

//now adding functionality for saving the data into array
