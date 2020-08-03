$(document).ready(function() {

var apiKey = "GJGTS1LAlgCHmfh3IpEHsaT0oIk7YvrA";
var queryUrl = "https://covidtracking.com/api/v1/states/" + state + "current.json";


    $('#findState').click(function() {
  
        var statesArray = [AL, AK, AZ, AR, CA, CO, CT, DE, FL, GA, HI, ID, IL, IN, IA, KS, KY, LA, ME, MD, MA, MI, MN, MS, MO, MT, NE, NV, NH, NJ, NM, NY, NC, ND, OH, OK, OR, PA, RI, SC, SD, TN, TX, UT, VT, VA, WA, WV, WI, WY]
  
      $('#stateInput')
        .append(
          $(document.createElement('label')).prop({
            for: 'states'
          }).html('Choose your State: ')
        )
        .append(
          $(document.createElement('select')).prop({
            id: 'states',
            name: 'states'
          })
        )
  
      for (const val of statesArray) {
        $('#states').append($(document.createElement('option')).prop({
          value: val,
          text: val.charAt(0).toUpperCase() + val.slice(1)
        }))
      }
    })
  });
    
 


$.ajax({
  url: queryUrl,
  method: "GET",
}).then(function (response) {

// Start of Positive Increase 
var stateDiv = $("<div class='state'>");

var positiveIncrease = response.positiveIncrease;

var p1 = $("<p>").text("Positive Increase" + positiveIncrease);

$(stateDiv).append(p1);

$("#stateDump").append(stateDiv)
// End of Positive Increase

// Start of Hospitalization
var total = response.total

var p2 = $("<p>").text("Total cases within the state " + total)

$(stateDiv).append(p2)
$("#stateDump").append(stateDiv)
// End of Hospitalization 
});
