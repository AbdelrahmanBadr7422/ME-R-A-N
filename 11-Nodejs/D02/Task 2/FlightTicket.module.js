class FlightTicket {
  #seatNum;
  #flightNum;
  #departureAirport;
  #arrivalAirport;
  #travelDate;
  #currentSeat;

  static tickets = [];
  constructor(
    seatNum,
    flightNum,
    departureAirport,
    arrivalAirport,
    travelDate
  ) {
    this.#seatNum = seatNum;
    this.#flightNum = flightNum;
    this.#departureAirport = departureAirport;
    this.#arrivalAirport = arrivalAirport;
    this.#travelDate = travelDate;
    this.#currentSeat = {
      SeatNum: this.#seatNum,
      FlightNum: this.#flightNum,
      DepartureAirport: this.#departureAirport,
      ArrivalAirport: this.#arrivalAirport,
      TravelDate: this.#travelDate,
    };
    FlightTicket.tickets.push(JSON.stringify(this.#currentSeat));
  }

  getCurrentSeat() {
    return this.#currentSeat;
  }
  
  setSeatNumber(seatNum) {
    this.#seatNum = seatNum;
  }
  setFlightNum(flightNum) {
    this.#flightNum = flightNum;
  }
  setDepartureAirport(departureAirport) {
    this.#departureAirport = departureAirport;
  }
  setArrivalAirport(arrivalAirport) {
    this.#arrivalAirport = arrivalAirport;
  }
  setTravelDate(travelDate) {
    this.#travelDate = travelDate;
  }

  static showAllTickets() {
    return this.tickets;
  }

}

module.exports =  {FlightTicket} ;