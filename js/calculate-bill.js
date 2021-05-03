//get a reference to the calculate button
var calculateBtn = document.querySelector(".calculateBtn");

//get a reference to the billTotal element
function calculateBtnClicked(){
    // logic goes here
    var billStringElement = document.querySelector(".billString").value;
    
     // get the string entered in the textArea
    var billString = billStringElement;
    var total = document.querySelector(".billTotal")
    //split the string
    var billItems = billString.split(",");
    // a variable for the total phone bill.
    var billTotal = 0;
    //loop over all the bill items
    for (var i=0;i<billItems.length;i++){
        var billItem = billItems[i].trim();
        if (billItem === "call"){
            billTotal += 2.75;
        }
        else if (billItem === "sms"){
            billTotal += 0.75;
        }
    }
    
    //round to two decimals
    var roundedBillTotal = billTotal.toFixed(2);
    total.innerHTML = roundedBillTotal;
    if(roundedBillTotal >= 30){
        total.style.color = "red";
    }
    else if(roundedBillTotal < 20){
        total.style.color = "black";
    }
     else if(roundedBillTotal >= 20 || roundedBillTotal <= 29 ){
        total.style.color = "orange";
    }
   
    
}

calculateBtn.addEventListener('click', calculateBtnClicked);
//get a reference to the billString

//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

//link the function to a click event on the calculate button
