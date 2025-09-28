
const {FlightTicket} = require('./FlightTicket.module')
let Ticket1 = new FlightTicket(1, 1, "Cairo", "London", "1/1/2026");
let Ticket2 = new FlightTicket(2, 1, "Alex", "Paris", "1/12/2025");
let Ticket6 = new FlightTicket(6, 1, "Cairo", "anotherAirport", "1/10/2025");

for (let ticket of FlightTicket.showAllTickets()) {
  console.log(ticket);
}
