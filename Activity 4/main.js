var employees = [
    { "id": 1, "name": "MIRIAM CASTIÑEIRA BREA", "department": "IT" },
    { "id": 2, "name": "GONZALO MULET FIGUERAS", "department": "IT" },
    { "id": 3, "name": "FRANCISCO JOSE GRAÑA BARBERA", "department": "IT" },
    { "id": 4, "name": "IRENE POMBO JORDA", "department": "HR" }
];


let table = document.getElementById("loop");
// const name = document.getElementsByName("name");
// const department = document.getElementByDepartment("department");



// function loopAlert(data) {
//     data.forEach((emp) => alert("id: " + emp.id + ", name: " + emp.name + ", department: " + emp.department));
// }


function loopHtml() {
    let tableLoop = ``;

    for (let emp of employees) {
        tableLoop += `<tr><td>` + `${emp.id}` + `</td>` + ` <td> ` + emp.name + `</td>` + `<td>` + emp.department + `</td></tr>`;
    }


    return tableLoop;


}

const head = `<tr><th>id</th><th>name</th><th>department</th></tr>`;

table.innerHTML = head + loopHtml();

