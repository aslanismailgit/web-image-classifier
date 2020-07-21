var ctx = document.getElementById('myChart').getContext('2d');

function plotResults (selectedLabels,selectedProbs) {

    //console.log(selectedLabels)
    //console.log(selectedProbs)

    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',

        // The data for our dataset
        data: {
            labels: selectedLabels,
            datasets: [{
                label: 'Probability Plot',
                backgroundColor: '#D6D3D2',
                borderColor: '#D6D3D2',
                data: selectedProbs
            }]
        },

        // Configuration options go here
        options: {
            legend: {
                display: false,
            }
        }
    });
}