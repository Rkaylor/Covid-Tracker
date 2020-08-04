var array = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE",
"NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];
var dropDowMenuEl = $(".dropdown-menu");

for(var i = 0; i < array.length; i++){
    dropDowMenuEl.append($("<p class = dropdown-item>").text(array[i]));
}

$(".dropdown-item").on("click", function(){
    $(this).val() = response.state;
})