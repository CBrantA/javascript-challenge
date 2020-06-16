// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the ufo data from data.js
//console.log(data);

// Use d3 to update each cell's text with
// // UFO sighting values (datetime, city,state, country, shape, //durationMinutes,comments)
function buildTable(tableData) {
    tbody.html("");
    tableData.forEach(function(ufoReport) {
   //console.log(ufoReport);
   var row = tbody.append("tr");
   Object.entries(ufoReport).forEach(function([key, value]) {
     //console.log(key, value);
     // Append a cell to the row for each value
     // in the ufo report object
     var cell = row.append("td");
     cell.text(value);
   });
 });
};

buildTable(tableData);

//PART TWO FOR BRANT TO FIGURE OUT
 
 // Getting a reference to the button on the page with the id property set to `filter-btn`
var button = d3.select("#filter-btn");

// Getting a reference to the input element on the page with the id property set to 'datetime'
var inputField = d3.select("#datetime");

// Input fields can trigger a change event when new text is entered.
inputField.on("change", function() {
   inputField = d3.event.target.value;
  console.log(inputField);
});

// This function is triggered when the button is clicked
function handleClick() {
  //console.log("A button was clicked!");
    if (inputField) {
        tableData = tableData.filter(row => row.datetime === inputField);
        buildTable(tableData);
        tableData = data;
    } else {
        console.log("Blank Text")
    }
};
// We can use the `on` function in d3 to attach an event to the handler function
button.on("click", handleClick);

