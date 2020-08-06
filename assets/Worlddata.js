$(document).ready(function () {
  


var globalUrl = "https://api.covid19api.com/summary";
console.log(globalUrl);




$.ajax({
  url: globalUrl,
  method: "GET",
}).then(function(response) {
  
  


  

  var country = "";
  var countryTableEl = $(".countryName");
  
  for (var i = 0; i < response.Countries.length; i++) {
    countryTableEl.append($("<tr class='countries text-center'>").append($("<hr>").css("border", "10px")))
    countryTableEl.append($("<td class ='table-data text-center'>").text(response.Countries[i].Country));
    countryTableEl.append($("<td class ='table-data text-center'>").text(response.Countries[i].TotalRecovered));
    countryTableEl.append($("<td class ='table-data text-center'>").text(response.Countries[i].TotalDeaths));
    countryTableEl.append($("<td class ='table-data text-center'>").text(response.Countries[i].NewConfirmed));
    countryTableEl.append($("<td class ='table-data text-center'>").text(response.Countries[i].TotalConfirmed));
    countryTableEl.append($("<td class ='table-data text-center'>").text(response.Countries[i].NewDeaths));
    countryTableEl.append($("<td class ='table-data text-center'>").text(response.Countries[i].Total));
    
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

function sortTable(n){
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("worldCard");
  switching = true;
  dir = "asc";

  while(switching) {
    switching = false;
    var rows = table.rows;
    
    for (i = 0; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementByTagName("td")[n];
      y = rows [i +1].getElementByTagName("td")[n];

      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()){
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      
      switchcount ++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
      switching = true;
      }
    }
  }
}

function sortNumb() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("worldCard");
  switching = true;
  
  while (switching){
    switching = false;
    rows = table.rows;

    for (i = 1; i < (rows.length -1); i++) {
      shouldSwitch = false;
      x= rows[i].getElementByTagName("td")[0];
      y= rows[i].getElementByTagName('td')[0];
      
      if (Number(x.innerHTML) > Number(y.innerHTML)) {
        shouldSwitch = true;
        break;
      }
    } 
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i +1], rows[i]);
      switching = true;
    }
  }
}