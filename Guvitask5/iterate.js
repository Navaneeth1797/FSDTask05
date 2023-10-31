// For the given jSON iterate over all for loops (for, for in ,for of ,for each)


let flightDetailsJSON = `{
  "route": "Chennai to Delhi",
  "flights": [
    {
      "flightNumber": "AI7801",
      "departureTime": "08:00 AM",
      "arrivalTime": "11:00 AM",
      "duration": "3 hours",
      "price": 9000
    },
    {
      "flightNumber": "IndiGo2081",
      "departureTime": "14:00 PM",
      "arrivalTime": "17:00 PM",
      "duration": "3 hours",
      "price": 5200
    },
    {
      "flightNumber": "SpiceJet967",
      "departureTime": "16:30 PM",
      "arrivalTime": "19:30 PM",
      "duration": "3 hours",
      "price": 7800
    }
  ]
}`;


let flightDetailsupdated = JSON.parse(flightDetailsJSON);

console.log("Available Flights (Using 'for' loop):");


let availableFlightsFor = [];

for (let i = 0; i < flightDetailsupdated.flights.length; i++) {

    let flight = flightDetailsupdated.flights[i];

    let flightdeparturetime = parseInt(flight.departureTime.split(':')[0]);

    if (flight.price < 6000 && flightdeparturetime >= 12 && flightdeparturetime < 18) {

        availableFlightsFor.push(flight);

    }
}

console.log(availableFlightsFor);

/*output :Available Flights (Using 'for' loop):
[
  {
    flightNumber: 'IndiGo2081',    
    departureTime: '14:00 PM',     
    arrivalTime: '17:00 PM',       
    duration: '3 hours',
    price: 5200
  }
]*/


console.log("\n Available Flights (Using 'for in' loop):");


let availableFlightsForin = [];

for (let index in flightDetailsupdated.flights) {

    let flight = flightDetailsupdated.flights[index];

    let flightdeparturetime = parseInt(flight.departureTime.split(':')[0]);

    if (flight.price < 6000 && flightdeparturetime >= 12 && flightdeparturetime < 18) {

        availableFlightsForin.push(flight);

    }
    
}

console.log(availableFlightsForin);


/*output :Available Flights (Using 'for in' loop):
[
  {
    flightNumber: 'IndiGo2081',    
    departureTime: '14:00 PM',     
    arrivalTime: '17:00 PM',       
    duration: '3 hours',
    price: 5200
  }
]*/


console.log("\n Available Flights (Using 'for of' loop):");


let availableFlightsForOf = [];

for (let flight of flightDetailsupdated.flights) {
    
    let flightdeparturetime = parseInt(flight.departureTime.split(':')[0]);

    if (flight.price < 6000 && flightdeparturetime >= 12 && flightdeparturetime < 18) {

        availableFlightsForOf.push(flight);
        
    }
}

console.log(availableFlightsForOf);


/*output :Available Flights (Using 'for of' loop):
[
  {
    flightNumber: 'IndiGo2081',    
    departureTime: '14:00 PM',     
    arrivalTime: '17:00 PM',       
    duration: '3 hours',
    price: 5200
  }
]*/



console.log("\n Available Flights (Using 'forEach' loop):");


const availableFlightsForEach = [];

flightDetailsupdated.flights.forEach(flight => {

let flightdeparturetime = parseInt(flight.departureTime.split(':')[0]);

    if (flight.price < 6000 && flightdeparturetime >= 12 && flightdeparturetime < 18) {

        availableFlightsForEach.push(flight);

    }
    
});

console.log(availableFlightsForEach);


/*output :Available Flights (Using 'forEach' loop):
[
  {
    flightNumber: 'IndiGo2081',    
    departureTime: '14:00 PM',     
    arrivalTime: '17:00 PM',       
    duration: '3 hours',
    price: 5200
  }
]*/

