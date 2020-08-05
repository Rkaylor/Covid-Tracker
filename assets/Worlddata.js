$(document).ready(function () {
  


var globalUrl = "https://api.covid19api.com/summary";
console.log(globalUrl);




$.ajax({
  url: globalUrl,
  method: "GET",
}).then(function(response) {
  
  // var countrySelected = $("CountrySelected");
  // var newConfirmed = $("NewConfirmed");
  // var totalConfirmed = $("TotalConfirmed");
  // var newDeaths = $("NewDeaths");
  // var totalDeaths = $("TotalDeaths");
  // var newRecovered = $("NewRecovered");
  // var totalRecovered = $("TotalRecovered");

  console.log(response.Countries);

  var country = "";
  var countryTableEl = $(".countryName");
  for (var i = 0; i < response.Countries.length; i++) {
    var newRow = $("<tr scope = 'row'>");

    newRow.append($("<td scope = 'col'>").text(response.Countries[i].Country));
    newRow.append($("<td scope = 'col'>").text(response.Countries[i].TotalRecovered));
    newRow.append($("<td scope = 'col'>").text(response.Countries[i].TotalDeaths));
    newRow.append($("<td scope = 'col'>").text(response.Countries[i].NewConfirmed));
    newRow.append($("<td scope = 'col'>").text(response.Countries[i].TotalConfirmed));
    newRow.append($("<td scope = 'col'>").text(response.Countries[i].NewDeaths));
    newRow.append($("<td scope = 'col'>").text(response.Countries[i].Total));
    countryTableEl.append(newRow);
    console.log(response.Countries.length)
  }

   country =$(this).text();


      if(response[i].newConfirmed === null){
        newConfirmed.country("No record");
      }
      else{
        newConfirmed.text(response[i].NewConfirmed);
      }
      //lack of data handler for hospitalization increase
      if(response[i].totalConfirmed=== null){
        totalConfirmed.text("No record");
      }
      else{
        totalConfirmed.text(response[i].TotalConfirmed);
      }
      //lack of data handler for positive cases
      if(response[i].newDeaths === null){
        newDeaths.text("No record");
      }
      else{
        newDeaths.text(response[i].newDeaths);
      }
      //lack of data handler for current on ventilator count
      if(response[i].totalDeaths === null){
        totalDeaths.text("No record");
      }
      else{
        totalDeaths.text(response[i].totalDeaths);
      }
      //lack of data handler for current on ventilator count
      if(response[i].newRecovered === null){
        newRecovered.text("No record");
      }
      else{
        newRecovered.text(response[i].newRecovered);
      }
      if(response[i].totalRecovered === null){
        totalRecovered.text("No record");
      }
      else{
        totalRecovered.text(response[i].totalRecovered);
      };
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
