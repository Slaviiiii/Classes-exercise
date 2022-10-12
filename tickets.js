function tickets(arr, str) {
  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = price;
      this.status = status
    }

    compareTo(other, criteria) {
      if (typeof this[criteria] === 'string') {
        return this[criteria].localeCompare(other[criteria]);
      } else {
        return this[criteria] - other[criteria];
      }
    }
  }

  let ticketsArr = [];

  for (let element of arr) {
    let [destination, price, status] = element.split('|');
    price = Number(price);
    let ticket = new Ticket(destination, price, status);
    ticketsArr.push(ticket);
  }

  ticketsArr.sort((a, b) => a.compareTo(b, str));

  return ticketsArr;

}
tickets(['Philadelphia|94.20|available',
  'New York City|95.99|available',
  'New York City|95.99|sold',
  'Boston|126.20|departed'],
  'destination')