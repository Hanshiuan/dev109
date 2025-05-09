var table = prompt("enter a number between 0 to 10:"); // Ask the user to a number 0-10

if (table===null|| isNaN(table)) { table=0;}  
else { table =Number(table);}  //if the input is null,set it to 0

var msg = "<h2>Multiplication Table</h2>"; // a heading for the table

for (var i = 1; i <= 10; i++) {
  msg += i + " x " + table + " = " + (i * table) + "<br />";
}  //  create the table

var el= document.getElementById("blackboard"); 
el.innerHTML = msg;  // Write the message into the page
