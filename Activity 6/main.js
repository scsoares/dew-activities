var emp = [];


async function fetchData() {
    const response = await fetch("employees.json");
    const data = await response.json();
    return data;
}

async function getLength() {
    emp = await fetchData();

    const length = emp.length;
    const data = emp;

    generateTable(length, data);
}

function generateTable(length, data) {
    const table = document.getElementById("table-container");

    table.innerHTML = ``;

    let strRow = ``;

    for (let i = 0; i < length; i++) {
        strRow += `<tr><td>${data[i].name}</td><td>${data[i].department}</td></tr>`;
    }

    table.innerHTML = `<tr><th>Name</th><th>Department</th></tr>` + `<tbody>` + strRow + `</tbody>`;
}


getLength();
