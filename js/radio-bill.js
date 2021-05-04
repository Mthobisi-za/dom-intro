// get a reference to the textbox where the bill type is to be entered
var radioBillAddBtn = document.querySelector(".radioBillAddBtn")
//get a reference to the add button

//create a variable that will keep track of the total bill
var callsTotals = 0;
var smsTotal = 0;

//add an event listener for when the add button is pressed
function textBillTotal(){
    
    //var bill = document.querySelector(".billItemTypeRadio").value;
    // get the value entered in the billType textfield
    //console.log(bill)
    //var billTypeEntered = bill.trim();
    // update the correct total
    
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn){
        var billItemType = checkedRadioBtn.value
        console.log(billItemType)
        // billItemType will be 'call' or 'sms'
        if (billItemType  === "call"){
            callsTotals += 2.75
        }
        else if (billItemType  === "sms"){
            smsTotal += 0.75;
        }
}
    var callsTotalElem = document.querySelector(".callTotalTwo");
    var smsTotalElem = document.querySelector(".smsTotalTwo");
    var totalCostElem = document.querySelector(".totalTwo");
    //update the totals that is displayed on the screen.
    callsTotalElem.innerHTML = callsTotals.toFixed(2);
    console.log(callsTotalElem)
    smsTotalElem.innerHTML = smsTotal.toFixed(2);
    console.log(smsTotalElem)
    var totalCost = callsTotals + smsTotal;
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

radioBillAddBtn.addEventListener('click', textBillTotal);
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
