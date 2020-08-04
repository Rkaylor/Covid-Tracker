$(document).ready(function () {
  var array = [
    "AL",
    "AK",
    "AZ",
    "AR",
    "CA",
    "CO",
    "CT",
    "DE",
    "FL",
    "GA",
    "HI",
    "ID",
    "IL",
    "IN",
    "IA",
    "KS",
    "LA",
    "ME",
    "MD",
    "MA",
    "MI",
    "MN",
    "MS",
    "MO",
    "MT",
    "NE",
    "NV",
    "NH",
    "NJ",
    "NM",
    "NY",
    "NC",
    "ND",
    "OH",
    "OK",
    "OR",
    "PA",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VT",
    "VA",
    "WA",
    "WV",
    "WI",
    "WY",
  ];

  var state = "";
  var dropDownMenuEl = $(".dropdown-menu");
  for (var i = 0; i < array.length; i++) {
    dropDownMenuEl.append($("<p class = dropdown-item>").text(array[i]));
  }
 

  var apiKey = "GJGTS1LAlgCHmfh3IpEHsaT0oIk7YvrA";
  var queryUrl = "https://covidtracking.com/api/v1/states/current.json";
    console.log(queryUrl);

    $.ajax({
      url: queryUrl,
      method: "GET",
    }).then(function(response) {
      console.log(response);
      // console.log(response[0].state);
      var stateSelectedEl = $("#stateSelected")
      var positiveIncreaseEl = $("#positiveIncrease");
      var hospitalizeIncreaseEl = $("#hospitalizeIncrease");
      var totalPosCasesEl = $("#totalPosCases");
      var currentOnVentilatorEl = $("#currentOnVentilator");
      var confirmedDeathsEl = $("#confirmedDeaths");

      $(".dropdown-item").click(function () {
        state = $(this).text(); //state the user chooses in the dropdown
        for(var i = 0; i < response.length; i++){
          if(response[i].state === state){
            stateSelectedEl.text(response[i].state);
            //lack of data handler for positive increase
            if(response[i].positiveIncrease === null){
              positiveIncreaseEl.text("No record");
            }
            else{
              positiveIncreaseEl.text(response[i].positiveIncrease);
            }
            //lack of data handler for hospitalization increase
            if(response[i].hospitalizedIncrease === null){
              hospitalizeIncreaseEl.text("No record");
            }
            else{
              hospitalizeIncreaseEl.text(response[i].hospitalizedIncrease);
            }
            //lack of data handler for positive cases
            if(response[i].positive === null){
              totalPosCasesEl.text("No record");
            }
            else{
              totalPosCasesEl.text(response[i].positive);
            }
            //lack of data handler for current on ventilator count
            if(response[i].onVentilatorCurrently === null){
              currentOnVentilatorEl.text("No record");
            }
            else{
              currentOnVentilatorEl.text(response[i].onVentilatorCurrently);
            }
            //lack of data handler for current on ventilator count
            if(response[i].deathConfirmed === null){
              confirmedDeathsEl.text("No record");
            }
            else{
              confirmedDeathsEl.text(response[i].deathConfirmed);
            }
          }
        }
    });
  });
});


      // // Start of Positive Increase
      // var stateDiv = $("<div class='state'>");

      // var positiveIncrease = response.positiveIncrease;

      // var p1 = $("<p>").text("Positive Increase" + positiveIncrease);

      // $(stateDiv).append(p1);

      // $("#stateDump").append(stateDiv);
      // // End of Positive Increase

      // // Start of Hospitalization
      // var total = response.total;

      // var p2 = $("<p>").text("Total cases within the state " + total);

      // $(stateDiv).append(p2);
      // $("#stateDump").append(stateDiv);
      // // End of Hospitalization