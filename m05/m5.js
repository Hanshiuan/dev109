var table = prompt("please rnter a nimber from 0 to 10:"); // Ask the user to a number 0-10


table=parseInt(table); // convert the input to an integer

if (isNaN(table)|| table===null) { table=0;} //if the input is null,set it to 0

var msg = "<h2>Multiplication Table</h2>"; // a heading for the table

for (var i=1; i,= 10; i++) { msg += i + "X" + table+ "="+ (i*table)+"<br/>";}  // Use a loop to create the table

var el= document.getElementById("blackboard"); 
el.innerHTML = msg;  // Display the result inside the HTML element with id="blackboard"
