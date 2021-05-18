
//reference the buttons
const addBtnSet = document.querySelector(".button-primaryy");

const updateSetBtn = document.querySelector(".updateSettings");

var callPrice = 0;
var smsPrice = 0;
var warningPrice = 0;
var dangerPrice = 0;

// keep tracks of settings
var callAmountInput = document.querySelector(".callCostSetting");
var smsAmountInput = document.querySelector(".smsCostSetting");
var warningAmountInput = document.querySelector(".warningLevelSetting");
var dangerAmountInput = document.querySelector(".criticalLevelSetting");

// create a variables that will keep track of all three totals.

var smsTotalSet = 0;
var callTotalSet = 0;
var totalSet = 0;

/*--total output spaces-----*/
var callSetOutput = document.querySelector(".callTotalSettings");
var smsSetOutput = document.querySelector(".smsTotalSettings");
var totalSetOutput = document.querySelector(".totalSettings");

function updateSettings() {
    callPrice = 0.00;
    smsPrice = 0.00;
    warningPrice = 0.00;
    dangerPrice = 0.00;
function updatePrices(){
    callPrice = parseFloat(callAmountInput.value);
    smsPrice = parseFloat(smsAmountInput.value);
    warningPrice = parseFloat(warningAmountInput.value);
    dangerPrice = parseFloat(dangerAmountInput.value);
}
updatePrices()
function removeClass(){
    totalSetOutput.classList.remove("warning");
    totalSetOutput.classList.remove("danger");
}
removeClass()
function addClass(){
    if (totalSet >= warningPrice && totalSet < dangerPrice) {
        totalSetOutput.classList.add("warning");
    } else if (totalSet >= dangerPrice) {
        totalSetOutput.classList.add("danger");
    }
}
addClass()
return{
    updatePrices,
    removeClass,
    addClass
}
}

function settingsCalculations () {
    // have a reference
    const radioBtn = document.querySelector(".billItemTypeWithSettings:checked");
    function calculate(){
    if (totalSet < dangerPrice) {
        if (radioBtn.value === 'sms') {
            smsTotalSet += smsPrice;
            totalSet += smsPrice;
        } else if (radioBtn.value === 'call') {
            callTotalSet += callPrice;
            totalSet += callPrice;
        }

    } else {
        smsTotalSet += 0;
        callTotalSet += 0;
        totalSet += 0;
    }
}calculate()
    console.log(callTotalSet)
    callSetOutput.innerHTML = callTotalSet.toFixed(2);
    smsSetOutput.innerHTML = smsTotalSet.toFixed(2);
    totalSetOutput.innerHTML = totalSet.toFixed(2);

    totalSetOutput.classList.remove("warning");
    totalSetOutput.classList.remove("danger");
    if (totalSet >= warningPrice && totalSet < dangerPrice) {
        totalSetOutput.classList.add("warning");
    } else if (totalSet >= dangerPrice) {
        totalSetOutput.classList.add("danger");
    }
}
updateSetBtn.addEventListener("click", updateSettings);
addBtnSet.addEventListener("click", settingsCalculations);

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.