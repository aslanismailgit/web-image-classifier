//var modelReady = document.getElementById("modelReady");
$("#modelReady").hide()


$("#image-selector").change(function() {
    let reader = new FileReader();
    reader.onload = function() {
        let dataURL = reader.result;
        $('#selected-image').attr("src",dataURL);
        $("#prediction-list").empty();
    }
    let file = $("#image-selector").prop('files')[0];
    reader.readAsDataURL(file)
});


let net;

async function appNet() {
  console.log('Loading mobilenet..');

  // Load the model.
  net = await mobilenet.load();
  console.log('Successfully loaded model');
  $('.progress-bar').hide();
  $("#modelReady").show();
}

appNet()

$("#predict-button").click(async function () {
    // Make a prediction through the model on our image.
    const imgEl = $('#selected-image').get(0);
    //console.log(imgEl);
    const result = await net.classify(imgEl);
    //console.log(result);
    
    var selectedLabels = []
    var selectedProbs = []

    for (var i = 0; i < result.length; i++) {
      
      selectedLabels.push(result[i].className)
      //console.log(selectedLabels[i])
      selectedProbs.push(result[i].probability)  
      //console.log(selectedProbs,[i])

    } 
    plotResults (selectedLabels,selectedProbs)


    $("#prediction-list").empty();
    result.forEach( function (p) {
        $('#prediction-list').append(`<li>${p.className}: ${p.probability.toFixed(4)}</li>`);
        //console.log("-------------------------------")
        //console.log(p.probability, p.className)

    })

})


