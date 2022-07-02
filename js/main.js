const API_URL = "http://localhost:8080/";

function loadPage() {
    loadRounds();
    lastResults();
}

function loadRounds() {
    fetch(API_URL + "get_rounds")
        .then(response => response.json())
        .then(data => loadDropdown(data));
}

function loadDropdown(data) {
    console.log(data);
}

function lastResults() {
    fetch(API_URL + "last_results")
        .then(response => response.json())
        .then(data => loadTable("Last Results and Predictions: ", data));
}

function getResults(year, track) {
    fetch(API_URL + "results?year=" + year + "&track=" + track)
        .then(response => response.json())
        .then(data => loadTable("Results and Predictions: ", data));
}

function loadTable(pre_title, data) {
    var table = document.getElementById("results_table");
    var p1 = data["js-practice-1"];
    var p2 = data["js-practice-2"];
    var p3 = data["js-practice-3"];
    var q = data["js-qualifying"];
    var placements = data["placements"];

    var title = document.getElementById("title");
    title.innerHTML = pre_title + data["track-name"];

    for (i = 0; i < placements.length; i++) {
        var driver = placements[i];
        var p1_time = p1[driver];
        var p2_time = p2[driver];
        var p3_time = p3[driver];
        var q_time = q[driver];

        var values = [i+1, driver, p1_time, p2_time, p3_time, q_time, "---", "---"];

        var row = document.createElement("tr");
        for (j = 0; j < values.length; j++) {
            var cell = document.createElement("td");
            cell.innerHTML = (typeof values[j] !== "undefined") ? values[j] : "DNS";
            row.appendChild(cell);
        }

        table.appendChild(row);
    }
}