var radioBillAddBtn = document.querySelector(".radioBillAddBtn")
//get a reference to the add button

//create a variable that will keep track of the total bill

    var callsTotals = 0;
    var smsTotalse = 0;
//add an event listener for when the add button is pressed
function textBillTotal(){
    console.log("playing/")
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked").value;
    //var bill = document.querySelector(".billItemTypeRadio").value;
    // get the value entered in the billType textfield
    //console.log(bill)
    //var billTypeEntered = bill.trim();
    // update the correct total
    
    function doCall(str){
         if (str  === "call"){
            callsTotals += 2.75
            return callsTotals
        } 
        else{
            return "please enter call string"
        }
    }

    function doSms(str){
         if (str  === "sms"){
            return smsTotalse += 0.75;
        }
        return "please enter sms string"
    }
    if(checkedRadioBtn == "call"){
        doCall(checkedRadioBtn)
    }else{
        doSms(checkedRadioBtn)
    }
    //reference the elements
    var callsTotalElem = document.querySelector(".callTotalTwo");
    var smsTotalElem = document.querySelector(".smsTotalTwo");
    var totalCostElem = document.querySelector(".totalTwo");
   //update the totals
    function getSmsTotal(){
        smsTotalElem.innerHTML = smsTotalse.toFixed(2);
        return smsTotalse
    } getSmsTotal()
    function getCallsTotal(){
        callsTotalElem.innerHTML = callsTotals.toFixed(2);
        return callsTotals
    } getCallsTotal()
    function overallTotal(){        var totalCost = callsTotals + smsTotalse;
        totalCostElem.innerHTML = totalCost.toFixed(2);
         return totalCost
    }
        overallTotal()
        
    function getClass(){
        if (overallTotal() >= 50){
            totalCostElem.classList.add("danger");
            // adding the danger class will make the text red
            return ("danger");
        }
        else if (overallTotal() >= 30){
            totalCostElem.classList.add("warning");
            return ("warning");
        }
    }
    getClass()
    return{
        doCall,
        doSms,
        getCallsTotal,
        getSmsTotal,
        overallTotal,
        getClass
    }
   }  
   radioBillAddBtn.addEventListener('click', textBillTotal);
   //update the totals that is displayed on the screen.
   /* callsTotalElem.innerHTML = callsTotals.toFixed(2);
    console.log(callsTotalElem)
    smsTotalElem.innerHTML = smsTotalse.toFixed(2);
    console.log(smsTotalElem)
    var totalCost = callsTotals + smsTotalse;
    totalCostElem.innerHTML = totalCost.toFixed(2);
    console.log(totalCostElem) */
    
    //color the total based on the criteria
   
