// Create the template for objects that are hotels
function Hotel(name, rooms, booked) {
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;
  this.checkAvailability = function() {
    return this.rooms - this.booked;
  };
}


// Create two hotel objects
var quayHotel = new Hotel('Quay', 40, 25);
var parkHotel = new Hotel('Park', 120, 77);

// add Sunset hotel objects
var sunsetHotel = new Hotel('Sunset', 86, 10);

// Update the HTML for the page
var details1 = quayHotel.name + ' rooms: ' + quayHotel.checkAvailability();
var elHotel1 = document.getElementById('hotel1');
elHotel1.textContent = details1;

var details2 = parkHotel.name + ' rooms: ' + parkHotel.checkAvailability();
var elHotel2 = document.getElementById('hotel2');
elHotel2.textContent = details2;

// Sunset rooms
var details3 = sunsetHotel.name + ' rooms: ' + sunsetHotel.checkAvailability();
var elHotel3 = document.getElementById('hotel3');
elHotel3.textContent = details3;

