// FIRST CHART
let heading = document.getElementById("firstHeading");
let canvas = document.createElement("canvas");
canvas.id = "myChart";

heading.parentNode.insertBefore(canvas, heading.nextSibling);

let ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'line',
    
    data: {
      labels: "0",
        datasets: [{
            label: 'Number of crimes',
            data: [],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

let updateChart = async () => {
    let response = await fetch("https://canvasjs.com/services/data/datapoints.php", { cache: "reload" });
    let data = await response.json();

    let generateLabels = () => {
        let labels = [];

        for (let i = 0; i < data.length; i++) {
            labels.push(i.toString());
        }
            return labels;
    }

    myChart.data.labels = generateLabels();
    myChart.data.datasets.pop();
    myChart.data.datasets.push(
        {
            label: "Number of crimes",
            data: data
        }
    )
    myChart.update();
}

setInterval(updateChart, 1000);

// SECOND CHART
let canvas2 = document.createElement("canvas");
canvas2.id = "myChart2";

let table1 = document.getElementById("table1");

table1.parentNode.insertBefore(canvas2, table1);

let rowsTable1 = table1.rows;
let yearTable1 = [];
let dataTable1 = [];

// UTILITY FUNCTION: Generate random RGB color
let getRandomRGB = () => {
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;

    return `rgb(${r}, ${g}, ${b})`;
}

for (let i = 2; i < rowsTable1[1].cells.length; i++) {
    yearTable1[i - 2] = rowsTable1[1].cells[i].innerHTML;
}

for (let i = 2; i < rowsTable1.length; i++) {
    let countryData = rowsTable1[i].cells[1].innerHTML;

    let numbersData = [];
    let tableRow = rowsTable1[i];

    for (let a = 2; a < tableRow.cells.length; a++) {
        numbersData.push(parseInt(tableRow.cells[a].innerHTML));
    }

    let jsonData = {
        label: countryData,
        data: numbersData,
        backgroundColor: getRandomRGB()
    };

    dataTable1.push(jsonData);
}

let ctx2 = document.getElementById("myChart2").getContext('2d');
let myChart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: yearTable1,
        datasets: dataTable1
    },
    options: {
    }
});

//THIRD CHART
let canvas3 = document.createElement("canvas");
canvas3.id = "myChart3";

let table2 = document.getElementById("table2");

table2.parentNode.insertBefore(canvas3, table2);

let rowsTable2 = table2.rows;
let yearTable2 = [];
let dataTable2 = [];

for (let i = 2; i < rowsTable2[0].cells.length; i++) {
    yearTable2[i - 2] = rowsTable2[0].cells[i].innerHTML;
}

for (let i = 2; i < rowsTable2.length; i++) {
    let countryData = rowsTable2[i].cells[1].innerHTML;

    let numbersData = [];
    let tableRow = rowsTable2[i];

    for (let a = 2; a < tableRow.cells.length; a++) {
        numbersData.push(parseInt(tableRow.cells[a].innerHTML));
    }
    
    let jsonData = {
        label: countryData,
        data: numbersData,
        backgroundColor: getRandomRGB()
    };

    dataTable2.push(jsonData);
}

let ctx3 = document.getElementById("myChart3").getContext('2d');
let myChart3 = new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: yearTable2,
        datasets: dataTable2
    },
    options: {
    }
});
