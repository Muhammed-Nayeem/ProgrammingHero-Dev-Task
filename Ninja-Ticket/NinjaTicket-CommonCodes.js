//First Class Increment Button Handler:
const firstClassAddButton = document.getElementById("firstClass-ticketIncrement");
firstClassAddButton.addEventListener("click", function() {
  // const firstClassTicketInput = document.getElementById("firstClass-ticketInput");
  // const ticketCount = parseInt(firstClassTicketInput.value);
  // const ticketNewCount = ticketCount + 1;
  // firstClassTicketInput.value = ticketNewCount;
  // const firstClassTicketPrice = ticketNewCount * 150;
  // document.getElementById("firstClassTicket").innerText = "First Class ($"+ firstClassTicketPrice +")";

  firstClassTicketHandler(true);
});

//First Class Decrement Button Handler:
const firstClassDecreaseButton = document.getElementById("firstClass-ticketDecrement");
firstClassDecreaseButton.addEventListener("click", function() {
  // const firstClassTicketInput = document.getElementById("firstClass-ticketInput");
  // const ticketCount = parseInt(firstClassTicketInput.value);
  // const ticketNewCount = ticketCount - 1;
  // firstClassTicketInput.value = ticketNewCount;
  // const firstClassTicketPrice = ticketNewCount * 150;
  // document.getElementById("firstClassTicket").innerText = "First Class ($"+ firstClassTicketPrice +")";

  firstClassTicketHandler(false);
});

//Economy Class Increment Button Handler:
const economyAddButton = document.getElementById("economy-ticketIncrement");
economyAddButton.addEventListener("click", function() {
  // const economyTicketInput = document.getElementById("economy-ticketInput");
  // const ticketCount = parseInt(economyTicketInput.value);
  // const ticketNewCount = ticketCount + 1;
  // economyTicketInput.value = ticketNewCount;
  // const economyTicketPrice = ticketNewCount * 100;
  // document.getElementById("economyTicket").innerText = "Economy ($"+ economyTicketPrice +")";

  economyClassTicketHandler(true);
});

//Economy Class Decrement Button Handler:
const economyDecreaseButton = document.getElementById("economy-ticketDecrement");
economyDecreaseButton.addEventListener("click", function() {
  // const economyTicketInput = document.getElementById("economy-ticketInput");
  // const ticketCount = parseInt(economyTicketInput.value);
  // const ticketNewCount = ticketCount - 1;
  // economyTicketInput.value = ticketNewCount;
  // const economyTicketPrice = ticketNewCount * 100;
  // document.getElementById("economyTicket").innerText = "Economy ($"+ economyTicketPrice +")";

  economyClassTicketHandler(false);
});

//First Class Ticket Handler Function:
 function firstClassTicketHandler(isTicketIncrease) {
   const firstClassTicketInput = document.getElementById("firstClass-ticketInput");
   const ticketCount = parseInt(firstClassTicketInput.value);
   let ticketNewCount = ticketCount;
   if (isTicketIncrease === true) {
     ticketNewCount = ticketCount + 1;
   }
   if (isTicketIncrease === false && ticketCount > 0) {
     ticketNewCount = ticketCount - 1;
   }
   firstClassTicketInput.value = ticketNewCount;
   const firstClassTicketPrice = ticketNewCount * 150;
   document.getElementById("firstClassTicket").innerText = "First Class ($"+ firstClassTicketPrice +")";
   calculatePrice();
 }

//Economy Class Ticket Handler Function:
 function economyClassTicketHandler(isTicketIncrease) {
   const economyTicketInput = document.getElementById("economy-ticketInput");
   const ticketCount = parseInt(economyTicketInput.value);
   let ticketNewCount = ticketCount;
   if (isTicketIncrease === true) {
     ticketNewCount = ticketCount + 1;
   }
   if (isTicketIncrease === false && ticketCount > 0) {
     ticketNewCount = ticketCount - 1;
   }
   economyTicketInput.value = ticketNewCount;
   const economyTicketPrice = ticketNewCount * 100;
   document.getElementById("economyTicket").innerText = "Economy ($"+ economyTicketPrice +")";
   calculatePrice();
 }


function calculatePrice() {
  //const firstClassPrice = document.getElementById("firstClass-ticketInput");
  //const firstClassNewPrice = parseInt(firstClassPrice.value);
  //const economyClassPrice = document.getElementById("economy-ticketInput");
  //const economyClassNewPrice = parseInt(economyClassPrice.value);
  const subTotal = firstClassNewPrice * 150 + economyClassNewPrice * 100;
  document.getElementById("subTotal").innerText = "$"+ subTotal;
}

//First Class Increment Button Handler:
const firstClassAddButton = document.getElementById("firstClass-ticketIncrement");
firstClassAddButton.addEventListener("click", function () {
  ticketClassHandler(true, "firstClass");
});

//First Class Decrement Button Handler:
const firstClassDecreaseButton = document.getElementById("firstClass-ticketDecrement");
firstClassDecreaseButton.addEventListener("click", function () {
  ticketClassHandler(false, "firstClass");
});

//Economy Class Increment Button Handler:
const economyAddButton = document.getElementById("economy-ticketIncrement");
economyAddButton.addEventListener("click", function () {
  ticketClassHandler(true, "economy");
});

//Economy Class Decrement Button Handler:
const economyDecreaseButton = document.getElementById("economy-ticketDecrement");
economyDecreaseButton.addEventListener("click", function () {
  ticketClassHandler(false, "economy");
});