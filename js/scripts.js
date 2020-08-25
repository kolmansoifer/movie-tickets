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
    }
    if (this.time === "3" || this.time === "4") {
      ticketCost += 2;
    }
  return ticketCost;
}

$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();

    const movieName = $("#movie").val();
    const showTime = $("#movie-time").val();
    const ticketType = $("#ticket-type").val();

    let myTicket = new Ticket(movieName, showTime, ticketType);
    let cost = myTicket.calcCost();

    console.log(cost);

    $("#result").text(cost);
    $("h3").show();
  })
})