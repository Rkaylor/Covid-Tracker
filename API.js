function displayStateInfo(){
    var state = $("#findState").attr("data-name");
    console.log(state)
    var queryUrl = "https://covidtracking.com/api/v1/states/nj" + state + "current.json";

console.log(state)
    $("#findState").on("click", function(event) {
        event.preventDefault();
        $("#stateDump").append("Increase" + positiveIncrease);
        console.log(positiveIncrease);
        
    $.ajax({
        url: queryUrl,
        method: "GET",
      }).then(function (response) {
       
        var stateDiv = $("<div class='state'>")
        
        var positiveIncrease = response.positiveIncrease;

        p1 = $("<p>").text("Positive Increase: " + positiveIncrease)

        stateDiv.append(p1)


        var hospital = response.hospitalizeCurrently;

        p2 = $("<p>").text("Hospital: " + hospital)

        stateDiv.append(p2)

        
        var confirmed = response.total;

        p3 = $("<p>").text("confirmed cases: " + confirmed)

        stateDiv.append(p3)

        // $("#stateDump").append("Increase" + positiveIncrease);//
        // console.log(positiveIncrease);
        // $("#stateDump").text(JSON.stringify(response))
        // console.log(response)
        $("#stateDump").prepend(stateDiv);
        console.log(response)
      });
      });



      }
      console.log(response)
      document.on("click", "findState", displayStateInfo )


