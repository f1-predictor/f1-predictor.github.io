function loadTable() {
    console.log("Ok");
    var table = document.getElementById("results_table");
    for (i = 1; i <= 20; i++) {
        var row = document.createElement("tr");

        for (j = 0; j < 8; j++) {
            var cell = document.createElement("td");
            cell.innerHTML = i;
            row.appendChild(cell);
        }

        table.appendChild(row);
    }
}