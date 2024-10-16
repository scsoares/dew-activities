function initialize() {
    myForm = document.getElementById("form");
    myForm.addEventListener('submit', (e) => {
        e.preventDefault();
        validate();
    });
}


function validate() {

    const rowsValue = myForm.elements.rows.value;
    const columnsValue = myForm.elements.columns.value;

    if (rowsValue < 0 || rowsValue > 10 || rowsValue === "" || columnsValue < 0 || columnsValue > 10 || columnsValue === "") {
        alert("Value in both fields cannot be empty and has to be between 0 and 10.");
    } else {
        generateTable(rowsValue, columnsValue);
    }
}

function generateTable(rows, columns) {
    const table = document.getElementById("generated");

    table.innerHTML = ``;

    let strRow = ``;
    // let strCol = ``;

    for (let i = 1; i <= rows; i++) {
        strRow += `<tr>`;
        for (let j = 1; j <= columns; j++) {
            strRow += `<td>Row: ${i}; Column: ${j}</td>`;
        }
        strRow += `</tr>`;
    }


    table.innerHTML = strRow;
}

initialize();


