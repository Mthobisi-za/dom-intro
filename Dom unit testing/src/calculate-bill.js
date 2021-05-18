//get a reference to the calculate button
var calculateBtn = document.querySelector(".calculateBtn");

function calculate(){
    var billString = document.querySelector(".billString").value;   
    var smsTotal = 0;
    var callTotal = 0;
    function getString(){
        return billString
    };
    //var lay = billString.split(',')
    function splitting(){
        var g = getString().split(',')
        return g;
   };

    function calculateCost(){
        var lay = splitting()
            for (var i=0;i<lay.length;i++){
                var data = lay[i].trim();
               if(data== "call"){
                callTotal = callTotal +  2.75;
               }
               else {
                smsTotal = smsTotal + 0.75
               }
        }
    };
    calculateCost()
    //reference the elements
    var total = document.querySelector(".billTotal");
    function getSmsTotal(){
        return smsTotal.toFixed(2)
    };
    function getCallTotal(){
        return callTotal.toFixed(2)
    };
    function getOverallTotall(){
        var done = (callTotal + smsTotal).toFixed(2);
        total.innerHTML = done;
        return done;
    };
    getOverallTotall()
    function getClass(){
        if(getOverallTotall() >= 30){
            total.style.color = "red";
            return "red";
        }
        else if(getOverallTotall() < 20){
            total.style.color = "black";
            return "black";
        }
         else if(getOverallTotall() >= 20 || getOverallTotall <= 29 ){
            total.style.color = "orange";
            return "orange";
        }
    };
    getClass()
    return{
        getString,
        splitting,
        calculateCost,
        getSmsTotal,
        getCallTotal,
        getOverallTotall,
        getClass
    }
}
calculateBtn.addEventListener('click', calculate);
//get a reference to the billString
