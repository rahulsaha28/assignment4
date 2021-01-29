/**
 *  [x] flightTicket
 *  [x] add event listener in four button
 *  [x] call incrementOrDecrement function
 *  [x]  call calculateSubTotal function for calculation (firstClassAmount+economyClassAmount)
 *  [x]  call vatCalculation function for calculate total vat
 *  [x] call totalCalculation function
 * [x] update the book now button click UI calling updateModal  
 */


// creating a object of all ticket information

const flightTicket = {

    rateOfFirstClass: 150,
    rateOfEconomyClass: 100,
    firstClassAmount: 0,
    EconomyClassAmount: 0,
    numberOfTicketFirst: 0,
    numberOfTicketEconomy: 0,
    subTotal: 0,
    vatAmount: 0,
    totalAmount: 0

}


// click the first increment button
document.getElementById("firstIncrementButton").addEventListener("click", function (event) {

    incrementOrDecrement(flightTicket, event.target.id);
    calculateSubTotal(flightTicket);

});

// click the Economy increment button
document.getElementById("economyIncrementButton").addEventListener("click", function (event) {

    incrementOrDecrement(flightTicket, event.target.id);
    calculateSubTotal(flightTicket);

});


// click the first decrement button
document.getElementById("firstDecrementButton").addEventListener("click", function (event) {

    incrementOrDecrement(flightTicket, event.target.id);
    calculateSubTotal(flightTicket);

});

// click the Economy decrement button
document.getElementById("economyDecrementButton").addEventListener("click", function (event) {

    incrementOrDecrement(flightTicket, event.target.id);
    calculateSubTotal(flightTicket);

});




// what happen when someone click increment button
function incrementOrDecrement(ticketObj, ticketClass) {

    // check which ticket is selected for increment
    if (ticketClass == "firstIncrementButton") {
        ticketObj.numberOfTicketFirst += 1;
        ticketObj.firstClassAmount = ticketObj.numberOfTicketFirst * ticketObj.rateOfFirstClass;
        document.getElementById("firstClassTicketNumber").value = ticketObj.numberOfTicketFirst;

    }
    else if (ticketClass == "economyIncrementButton") {
        ticketObj.numberOfTicketEconomy += 1;
        ticketObj.EconomyClassAmount = ticketObj.numberOfTicketEconomy * ticketObj.rateOfEconomyClass;
        document.getElementById("economyClassTicketNumber").value = ticketObj.numberOfTicketEconomy;

    }
    // check which ticket is selected for decrement
    else if (ticketClass == "firstDecrementButton" && ticketObj.numberOfTicketFirst > 0) {
        ticketObj.numberOfTicketFirst -= 1;
        ticketObj.firstClassAmount = ticketObj.numberOfTicketFirst * ticketObj.rateOfFirstClass;
        document.getElementById("firstClassTicketNumber").value = ticketObj.numberOfTicketFirst;

    }
    else if (ticketClass == "economyDecrementButton" && ticketObj.numberOfTicketEconomy > 0) {
        ticketObj.numberOfTicketEconomy -= 1;
        ticketObj.EconomyClassAmount = ticketObj.numberOfTicketEconomy * ticketObj.rateOfEconomyClass;
        document.getElementById("economyClassTicketNumber").value = ticketObj.numberOfTicketEconomy;

    }



}

// calculate subtotal
function calculateSubTotal(ticketObj) {
    ticketObj.subTotal = ticketObj.firstClassAmount + ticketObj.EconomyClassAmount;
    document.getElementById("subTotal").innerText = "$ " + ticketObj.subTotal;
    vatCalculation(ticketObj); // the vat calculation is here
}

// vat calculation
function vatCalculation(ticketObj) {
    ticketObj.vatAmount = (ticketObj.subTotal * .1);
    document.getElementById("vat").innerText = "$ " + ticketObj.vatAmount;
    totalCalculation(ticketObj); // the total amount is calculate is here
}

// total calculation
function totalCalculation(ticketObj) {
    ticketObj.totalAmount = ticketObj.subTotal + ticketObj.vatAmount;
    document.getElementById("total").innerText = ticketObj.totalAmount;
    updateModal(ticketObj) // update modal
}


// updating modal
function updateModal(ticketObj) {
    document.getElementById("firstClass").innerText = ticketObj.numberOfTicketFirst + " x $" + ticketObj.rateOfFirstClass + " = $" + ticketObj.firstClassAmount;
    document.getElementById("economyClass").innerText = ticketObj.numberOfTicketEconomy + " x $" + ticketObj.rateOfEconomyClass + " = $" + ticketObj.EconomyClassAmount;
    document.getElementById("vatClass").innerText = "$" + ticketObj.vatAmount;
    document.getElementById("totalClass").innerText = "$" + ticketObj.totalAmount;
}