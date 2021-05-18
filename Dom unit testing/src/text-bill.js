// get a reference to the textbox where the bill type is to be entered
var textTotalAddBtn = document.querySelector(".addToBillBtn")
//get a reference to the add button
var callsTo_ = 0;
    var smsTota_ = 0;
function textBillTotals(){
    console.log("hey im text bill")
    var bill = document.querySelector(".billTypeText").value;
    
     function doCalls_1(){
        return callsTo_ += 2.75
        }
    function makeSmss_1(){
            return smsTota_ += 0.75;
        }
    //check the string if its a call or sms
    if (bill.includes("call")){
       doCalls_1()
    }
    else{
        makeSmss_1()
    }
    //reference the elements
    var callsTotalElem = document.querySelector(".callTotalOne");
    var smsTotalElem = document.querySelector(".smsTotalOne");
    var totalCostElem = document.querySelector(".totalOnes");
   //update the elements
   
    function getTotalCallss_1(){
        //update the total
        callsTotalElem.innerHTML = callsTo_.toFixed(2);
        return callsTo_
    } getTotalCallss_1()
    function getTotalSmss_1(){
        //update the total
        smsTotalElem.innerHTML = smsTota_.toFixed(2);
        return smsTota_
    } getTotalSmss_1()
    function getTotals_1(){
        //get totals
        var totalCost = callsTo_+smsTota_
        totalCostElem.innerHTML = totalCost.toFixed(2);
        return callsTo_+smsTota_
    }getTotals_1()
    function getClasss_1(){
        if (getTotals_1() >= 50){
            totalCostElem.classList.add("danger");
            return "danger";
        }
        else if (getTotals_1() >= 30){
            totalCostElem.classList.add("warning");
            return "warning";
        }
    } getClasss_1()
    return{
        doCalls_1,
        makeSmss_1,
        getTotalCallss_1,
        getTotalSmss_1,
        getTotals_1,
        getClasss_1
    }
}
textTotalAddBtn.addEventListener('click', textBillTotals);
//
    
  /*
    var callsTotalElem = document.querySelector(".callTotalOne");
    var smsTotalElem = document.querySelector(".smsTotalOne");
    var totalCostElem = document.querySelector(".totalOnes");
    //update the totals that is displayed on the screen.
    callsTotalElem.innerHTML = callsTotal.toFixed(2);
    smsTotalElem.innerHTML = smsTotall.toFixed(2);
    var totalCost = callsTotal + smsTotall;
    totalCostElem.innerHTML = totalCost.toFixed(2);
    console.log(totalCostElem)
    */
    //color the total based on the criteria
    
