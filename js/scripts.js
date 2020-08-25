function Ticket (name, time, type) {
  this.name = name,
  this.time = time,
  this.type = type
}

Ticket.prototype.calcCost = function () {
  let ticketCost = parseInt(this.type);
  if (this.name === "1") {
    ticketCost += 5;
    
  }
    else if (this.name === "2") {
      ticketCost += 2;
    }
    else {
      ticketCost += 3;
      console.log("Correct if statement reached");
    }
    if (this.time === "3" || this.time === "4") {
      ticketCost += 2;
    }
  return ticketCost;
}