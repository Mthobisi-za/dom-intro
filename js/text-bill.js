// get a reference to the textbox where the bill type is to be entered
var textTotalAddBtn = document.querySelector(".addToBillBtn")
//get a reference to the add button

//create a variable that will keep track of the total bill
var callsTotal = 0;
var smsTotall = 0;

//add an event listener for when the add button is pressed
function textBillTotal(){
    
    var bill = document.querySelector(".billTypeText").value;
    // get the value entered in the billType textfield
    var billTypeEntered = bill.trim();
    console.log(billTypeEntered)
    // update the correct total
    if (billTypeEntered === "call"){
        callsTotal += 2.75
    }
    else if (billTypeEntered === "sms"){
        smsTotall += 0.75;
    }
    var callsTotalElem = document.querySelector(".callTotalOne");
    var smsTotalElem = document.querySelector(".smsTotalOne");
    var totalCostElem = document.querySelector(".totalOnes");
    //update the totals that is displayed on the screen.
    callsTotalElem.innerHTML = callsTotal.toFixed(2);
    smsTotalElem.innerHTML = smsTotall.toFixed(2);
    var totalCost = callsTotal + smsTotall;
    totalCostElem.innerHTML = totalCost.toFixed(2);
    console.log(totalCostElem)
    
    //color the total based on the criteria
    if (totalCost >= 50){
        // adding the danger class will make the text red
        totalCostElem.classList.add("danger");
    }
    else if (totalCost >= 30){
        totalCostElem.classList.add("warning");
    }
}

textTotalAddBtn.addEventListener('click', textBillTotal);
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
