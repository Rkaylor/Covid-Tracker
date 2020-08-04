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
  var dropDownMenuEl = $(".dropdown-menu");
  for (var i = 0; i < array.length; i++) {
    dropDownMenuEl.append($("<p class = dropdown-item>").text(array[i]));
  }
  var state = dropDownMenuEl;

  var apiKey = "GJGTS1LAlgCHmfh3IpEHsaT0oIk7YvrA";
  var queryUrl =
    "https://covidtracking.com/api/v1/states/" + state + "current.json";

  console.log(dropDownMenuEl);
  $("#findState").click(function () {
    $.ajax({
      url: queryUrl,
      method: "GET",
    }).then(function (response) {
      // Start of Positive Increase
      var stateDiv = $("<div class='state'>");

      var positiveIncrease = response.positiveIncrease;

      var p1 = $("<p>").text("Positive Increase" + positiveIncrease);

      $(stateDiv).append(p1);

      $("#stateDump").append(stateDiv);
      // End of Positive Increase

      // Start of Hospitalization
      var total = response.total;

      var p2 = $("<p>").text("Total cases within the state " + total);

      $(stateDiv).append(p2);
      $("#stateDump").append(stateDiv);
      // End of Hospitalization
    });
  });
});
